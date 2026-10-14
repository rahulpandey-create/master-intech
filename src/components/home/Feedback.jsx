import { useEffect, useRef, useState } from "react";
import abstractRight from "../../assets/design/10.png";
import google from "../../assets/google.svg";
import KatyaVideo from "../../assets/KatyaVideo.mp4";
import shenton from "../../assets/shenton.png";
import KatyaFaris from "../../assets/KatyaFaris.png";
import userthumb from "../../assets/userthumb.png";
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
    image: userthumb,
    video: null,
    name: "Tarun Chaudhary",
    role: "Founder, Infra Optics Australia",
    review:
      "I have hired him several times, i think in general they can deliver the work just need to keep things on time. Overall ill hire them again",
  },
  {
    id: "bernie",
    image: userthumb,
    video: null,
    name: "Santosh Kumar",
    role: "Marketing Head, Celegence",
    review:
      "Looking forward to working with Randeep and the MIT TEAM again very soon",
  },
  {
    id: "manie",
    image: userthumb,
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

export default function Feedback({ variant = "default" }) {
  const isReviewsOnly = variant === "reviews-only";
  /* =========================================================
     STATES
  ========================================================= */

  const [floatingClients, setFloatingClients] = useState(clients);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  const autoTimerRef = useRef(null);
  const feedbackSectionRef = useRef(null);
  const videoRef = useRef(null);
  const imageRefs = useRef({});
  const animationRef = useRef(false);

  const activeClient = floatingClients[2];

  /* =========================================================
     STOP VIDEO
  ========================================================= */

  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsPlaying(false);
  };

  /* =========================================================
     PLAY / PAUSE
  ========================================================= */

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  };

  /* =========================================================
     STOP VIDEO WHEN ACTIVE CLIENT CHANGES
  ========================================================= */

  useEffect(() => {
    stopVideo();
  }, [activeClient?.id]);

  /* =========================================================
     PAUSE VIDEO WHEN SECTION LEAVES VIEWPORT
  ========================================================= */

  useEffect(() => {
    if (isReviewsOnly) return;

    const section = feedbackSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          stopVideo();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [isReviewsOnly]);

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

      const deltaX = oldRect.left - newRect.left;
      const deltaY = oldRect.top - newRect.top;

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
     MOVE TO NEXT CLIENT
  ========================================================= */

  const moveToNextClient = () => {
    if (animationRef.current) return;

    if (!isReviewsOnly) {
      stopVideo();
    }

    const current = floatingClients;
    const nextActiveClient = current[3];

    if (!nextActiveClient) return;

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

    animateClientToCenter(nextActiveClient.id, oldRect);
  };

  /* =========================================================
     ACTIVATE CLICKED CLIENT
  ========================================================= */

  const activateClient = (clickedClient) => {
    if (animationRef.current) return;

    const current = floatingClients;

    const clickedIndex = current.findIndex(
      (client) => client.id === clickedClient.id
    );

    if (clickedIndex === -1 || clickedIndex === 2) return;

    if (!isReviewsOnly) {
      stopVideo();
    }

    const clickedElement = imageRefs.current[clickedClient.id];

    const oldRect = clickedElement
      ? clickedElement.getBoundingClientRect()
      : null;

    animationRef.current = true;

    setFloatingClients((currentClients) => {
      const reordered = [...currentClients];
      const [selectedClient] = reordered.splice(clickedIndex, 1);

      reordered.splice(2, 0, selectedClient);

      return reordered;
    });

    animateClientToCenter(clickedClient.id, oldRect);
  };

  /* =========================================================
     AUTOMATIC CLIENT CHANGE
  ========================================================= */

  useEffect(() => {
    if (isReviewsOnly) {
      if (autoTimerRef.current) {
        clearTimeout(autoTimerRef.current);
        autoTimerRef.current = null;
      }

      return;
    }

    if (autoTimerRef.current) {
      clearTimeout(autoTimerRef.current);
    }

    autoTimerRef.current = setTimeout(() => {
      moveToNextClient();
    }, 8000);

    return () => {
      if (autoTimerRef.current) {
        clearTimeout(autoTimerRef.current);
      }
    };
  }, [activeClient?.id, isReviewsOnly]);

  /* =========================================================
     CLEANUP
  ========================================================= */

  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }

      if (autoTimerRef.current) {
        clearTimeout(autoTimerRef.current);
      }
    };
  }, []);

  /* =========================================================
     REVIEW SWIPER
  ========================================================= */

  const handleFeedbackSwiperChange = (swiper) => {
    const selectedReview = clients[swiper.realIndex];

    if (!selectedReview) return;
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section
      ref={feedbackSectionRef}
      className={`feedback-section ${
        isReviewsOnly ? "feedback-section--reviews-only" : ""
      }`}
    >
      <div className="section-shell feedback-grid">
        {/* FLOATING CLIENT IMAGES */}

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

        {/* MAIN TESTIMONIAL MEDIA - HOME PAGE ONLY */}

        {!isReviewsOnly && (
          <div
            className="testimonial-photo"
            data-reveal
            style={{ position: "relative" }}
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
                    setIsPlaying(true);

                    if (autoTimerRef.current) {
                      clearTimeout(autoTimerRef.current);
                      autoTimerRef.current = null;
                    }
                  }}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => {
                    stopVideo();
                    moveToNextClient();
                  }}
                />

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
        )}

        {/* CLIENT FEEDBACK */}

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
            onSlideChange={handleFeedbackSwiperChange}
            pagination={{ clickable: true }}
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

                  <p>“{client.review}”</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* GOOGLE REVIEWS BUTTON */}

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

        {/* DECORATIVE ART - HOME PAGE ONLY */}

        {!isReviewsOnly && (
          <img
            className="feedback-art"
            src={abstractRight}
            alt=""
          />
        )}
      </div>
    </section>
  );
}