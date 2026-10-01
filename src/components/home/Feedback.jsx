import { useEffect, useRef, useState } from "react";

import abstractRight from "../../assets/design/10.png";
import thumbnail from "../../assets/design/floating_client_thumbnail.jpeg";
import client3 from "../../assets/design/13.png";
import client4 from "../../assets/design/14.png";
import client5 from "../../assets/design/15.png";
import client6 from "../../assets/design/16.png";
import google from "../../assets/google.svg";
import KatyaVideo from "../../assets/KatyaVideo.mp4";
import shenton from "../../assets/shenton.png";
import KatyaFaris from "../../assets/KatyaFaris.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* =========================================================
   CLIENT DATA
========================================================= */

const clients = [
  {
    id: "katya",
    image: KatyaFaris,
    video: KatyaVideo,

    name: "Katya Faris",
    role: "Founder, Hindustan Astrology - USA",
    review:
      "An excellent team to collaborate with—highly skilled and confident in their work. Their communication was clear and timely, and they always responded quickly.",
  },

  {
    id: "johan",
    image: thumbnail,
    video: null,

    name: "Tarun Chaudhary",
    role: "Founder, Infra Optics Australia",
    review:
      "I have hired him several times, i think in general they can deliver the work just need to keep things on time. Overall ill hire them again",
  },

  {
    id: "bernie",
    image: thumbnail,
    video: null,

    name: "Santosh Kumar",
    role: "Marketing Head, Celegence",
    review:
      "Looking forward to working with Randeep and the MIT TEAM again very soon",
  },

  {
    id: "manie",
    image: thumbnail,
    video: null,

    name: "Mannie",
    role: "Founder, RecommendMe Australia",
    review:
      "Good team to work with as they are confident with their skills. Communication is also very good as they quickly respond. They priced the project well and competitively. Vinit was our main point of contact and he did an excellent job in communication!",
  },

  {
    id: "client-5",
    image: shenton,
    video: null,

    name: "Shenton Adams",
    role: "Co-Founder & Creative Director",
    review:
      "Fantastic work by Vinit and his team, two websites completed and a few more to come Will definitely rehire for additional work ! Keep up the good work team!",
  },
];

export default function Feedback() {
  /* =========================================================
     STATES
  ========================================================= */

  const [floatingClients, setFloatingClients] = useState(clients);

  /*
   * Play / Pause state
   */
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  /*
   * Swiper instance is kept only for the
   * feedback column itself.
   *
   * It is NOT synchronized with video/client.
   */
  const [swiperInstance, setSwiperInstance] = useState(null);

  const autoTimerRef = useRef(null);

  /*
   * Feedback section DOM reference
   */
  const feedbackSectionRef = useRef(null);

  /*
   * Active video DOM reference
   */
  const videoRef = useRef(null);

  /*
   * Store every image DOM element
   */
  const imageRefs = useRef({});

  /*
   * Prevent multiple clicks during animation
   */
  const animationRef = useRef(false);

  /*
   * Active video client is always position 3 / center
   */
  const activeClient = floatingClients[2];

  /* =========================================================
     STOP VIDEO HELPER
  ========================================================= */

  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsPlaying(false);
  };

  /* =========================================================
     PLAY / PAUSE BUTTON
  ========================================================= */

  const toggleVideo = () => {
    if (!videoRef.current) {
      return;
    }

    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  /* =========================================================
     STOP VIDEO WHEN ACTIVE CLIENT CHANGES
  ========================================================= */

  useEffect(() => {
    /*
     * Whenever the video client changes:
     * pause previous video
     * reset playback
     */
    stopVideo();
  }, [activeClient?.id]);

  /* =========================================================
     PAUSE VIDEO WHEN SECTION LEAVES VIEWPORT
  ========================================================= */

  useEffect(() => {
    const section = feedbackSectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        /*
         * Feedback section is outside viewport
         * so stop the video.
         */
        if (!entry.isIntersecting) {
          stopVideo();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =========================================================
     ANIMATE CLIENT INTO CENTER
  ========================================================= */

  const animateClientToCenter = (clientId, oldRect) => {
    requestAnimationFrame(() => {
      const element = imageRefs.current[clientId];

      if (!element || !oldRect) {
        animationRef.current = false;
        return;
      }

      const newRect = element.getBoundingClientRect();

      /*
       * Calculate distance between
       * old position and new position
       */
      const deltaX = oldRect.left - newRect.left;
      const deltaY = oldRect.top - newRect.top;

      /*
       * Start from old position
       * and slide to center.
       */
      const animation = element.animate(
        [
          {
            transform: `translate(${deltaX}px, ${deltaY}px)`,
          },
          {
            transform: "translate(0, 0)",
          },
        ],
        {
          duration: 750,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "none",
        }
      );

      animation.finished
        .catch(() => {})
        .finally(() => {
          animationRef.current = false;
        });
    });
  };

  /* =========================================================
     MOVE TO NEXT VIDEO CLIENT
  ========================================================= */

  const moveToNextClient = () => {
    if (animationRef.current) {
      return;
    }

    /*
     * Stop current video before changing client.
     */
    stopVideo();

    const current = floatingClients;

    /*
     * Current:
     *
     * A B C D E
     *     ↑
     *   CENTER
     *
     * Next:
     *
     * B C D E A
     *     ↑
     *   CENTER
     */

    const nextActiveClient = current[3];

    if (!nextActiveClient) {
      return;
    }

    const nextElement = imageRefs.current[nextActiveClient.id];

    const oldRect = nextElement
      ? nextElement.getBoundingClientRect()
      : null;

    animationRef.current = true;

    setFloatingClients((currentClients) => {
      const next = [...currentClients];

      const firstClient = next.shift();

      next.push(firstClient);

      return next;
    });

    /*
     * Slide next client into center.
     */
    animateClientToCenter(nextActiveClient.id, oldRect);
  };

  /* =========================================================
     ACTIVATE CLICKED VIDEO CLIENT
  ========================================================= */

  const activateClient = (clickedClient) => {
    if (animationRef.current) {
      return;
    }

    const current = floatingClients;

    const clickedIndex = current.findIndex(
      (client) => client.id === clickedClient.id
    );

    if (clickedIndex === -1) {
      return;
    }

    /*
     * Already center.
     */
    if (clickedIndex === 2) {
      return;
    }

    /*
     * Stop current video before changing client.
     */
    stopVideo();

    /*
     * Get exact current image position
     * before React reorders it.
     */
    const clickedElement = imageRefs.current[clickedClient.id];

    const oldRect = clickedElement
      ? clickedElement.getBoundingClientRect()
      : null;

    animationRef.current = true;

    /*
     * Move clicked client to center.
     */
    setFloatingClients((currentClients) => {
      const reordered = [...currentClients];

      const [selectedClient] = reordered.splice(clickedIndex, 1);

      reordered.splice(2, 0, selectedClient);

      return reordered;
    });

    /*
     * Animate clicked image into center.
     */
    animateClientToCenter(clickedClient.id, oldRect);
  };

  /* =========================================================
     AUTOMATIC VIDEO CLIENT CHANGE
  ========================================================= */

  useEffect(() => {
    if (autoTimerRef.current) {
      clearTimeout(autoTimerRef.current);
    }

    /*
     * NO VIDEO:
     * Show "Testimonial video coming soon" for 3.5 seconds,
     * then move to the next client.
     */
    autoTimerRef.current = setTimeout(() => {
      moveToNextClient();
    }, 8000);

    return () => {
      clearTimeout(autoTimerRef.current);
    };
  }, [activeClient?.id]);

  /* =========================================================
     CLEANUP VIDEO + TIMER
  ========================================================= */

  useEffect(() => {
    return () => {
      /*
       * Stop video when component unmounts.
       */
      stopVideo();

      /*
       * Clear automatic timer.
       */
      if (autoTimerRef.current) {
        clearTimeout(autoTimerRef.current);
      }
    };
  }, []);

  /* =========================================================
     FEEDBACK SWIPER

     IMPORTANT:
     This Swiper is completely independent
     from the video/client slider.
  ========================================================= */

  const handleFeedbackSwiperChange = (swiper) => {
    /*
     * Only the feedback Swiper changes here.
     *
     * DO NOT call activateClient().
     * DO NOT change floatingClients.
     * DO NOT change video.
     */
    const selectedReview = clients[swiper.realIndex];

    if (!selectedReview) {
      return;
    }

    /*
     * Feedback review changes independently.
     */
  };

  /* =========================================================
     SECTION LINK
  ========================================================= */

  const handleSectionLink = (event, sectionId) => {
    event.preventDefault();

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section
      ref={feedbackSectionRef}
      className="feedback-section"
    >
      <div className="section-shell feedback-grid">

        {/* =================================
            FLOATING CLIENT IMAGES
        ================================= */}

        <div className="floating-people" data-reveal>
          {floatingClients.map((client, index) => (
            <img
              key={client.id}
              ref={(element) => {
                imageRefs.current[client.id] = element;
              }}
              src={client.image}
              alt={client.name}
              className={`bord${index + 1}`}
              onClick={() => activateClient(client)}
            />
          ))}
        </div>

        {/* =================================
            MAIN TESTIMONIAL MEDIA
        ================================= */}

        <div
          className="testimonial-photo"
          data-reveal
          style={{
            position: "relative",
          }}
          onMouseEnter={() => setIsVideoHovered(true)}
          onMouseLeave={() => setIsVideoHovered(false)}
        >
          {activeClient?.video ? (
            <>
              <video
                key={activeClient.id}
                ref={videoRef}
                src={activeClient.video}
                playsInline
                preload="metadata"

                onPlay={() => {
                  /*
                   * Video is playing.
                   */
                  setIsPlaying(true);

                  /*
                   * User manually started video.
                   * Stop automatic client timer.
                   */
                  if (autoTimerRef.current) {
                    clearTimeout(autoTimerRef.current);
                    autoTimerRef.current = null;
                  }
                }}

                onPause={() => {
                  /*
                   * Video paused.
                   */
                  setIsPlaying(false);
                }}

                onEnded={() => {
                  /*
                   * Stop and reset video first.
                   */
                  stopVideo();

                  /*
                   * Then move to next video client.
                   */
                  moveToNextClient();
                }}
              />

              {/* =================================
                  CUSTOM PLAY / PAUSE BUTTON

                  PAUSED:
                  Always visible

                  PLAYING:
                  Only visible on hover
              ================================= */}

              {(!isPlaying || isVideoHovered) && (
                <button
                  type="button"
                  onClick={toggleVideo}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255, 255, 255, 0.7)",
                    background: "rgba(0, 0, 0, 0.55)",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {isPlaying ? "❚❚" : "▶"}
                </button>
              )}
            </>
          ) : (
            <div
              className="testimonial-video-placeholder"
              key={`${activeClient?.id}-placeholder`}
            >
              <span>TESTIMONIAL VIDEO</span>

              <strong>Coming Soon</strong>

              <small>
                We’re still uploading this client’s testimonial.
              </small>
            </div>
          )}

          <div
            key={`${activeClient?.id}-info`}
            className="text-start"
          >
            <strong>{activeClient?.name}</strong>

            <span>{activeClient?.role}</span>
          </div>
        </div>

        {/* =================================
            CLIENT FEEDBACK

            COMPLETELY INDEPENDENT FROM VIDEO
        ================================= */}

        <div className="testimonial-copy" data-reveal>
          <div className="center-heading">
            <h2>Client’s Feedback</h2>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            speed={700}
            initialSlide={0}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={handleFeedbackSwiperChange}
            pagination={{
              clickable: true,
            }}
            className="feedback-swiper"
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="feedback-review">

                  <div className="feedback-reviewer">
                    <h2>{client.name}</h2>
                    <span>{client.role}</span>
                  </div>

                  <div className="feedback-stars">
                    ★ ★ ★ ★ ★
                  </div>

                  <p>
                    “{client.review}”
                  </p>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* =================================
              GOOGLE REVIEWS BUTTON
          ================================= */}

          <a
            className="review-button"
            href="https://www.google.com/maps/place/Master+Intech+Solutions/@30.6814396,76.745409,16z/data=!4m8!3m7!1s0x390fee617d77cee3:0x9a2c176de1908123!8m2!3d30.6818399!4d76.7441781!9m1!1b1!16s%2Fg%2F11bbwl511s?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <img src={google} alt="Google" />
            </span>

            See All Reviews
          </a>
        </div>

        {/* =================================
            RIGHT ABSTRACT ART
        ================================= */}

        <img
          className="feedback-art"
          src={abstractRight}
          alt=""
        />

      </div>
    </section>
  );
}