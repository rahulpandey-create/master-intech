import { useEffect, useRef, useState } from "react";

import abstractRight from "../../assets/design/10.png";
import client2 from "../../assets/design/12.png";
import client3 from "../../assets/design/13.png";
import client4 from "../../assets/design/14.png";
import client5 from "../../assets/design/15.png";
import client6 from "../../assets/design/16.png";
import google from "../../assets/google.svg";
import KatyaVideo from "../../assets/KatyaVideo.mp4";
import KatyaFaris from "../../assets/KatyaFaris.png";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* =========================================================
   CLIENT DATA

   image = floating circular thumbnail
   video = large testimonial video
   video can be null until the video is uploaded
========================================================= */

const clients = [
  {
    id: "katya",
    image: KatyaFaris,
    video: KatyaVideo,
    // video: katyaVideo,

    name: "Katya Faris",
    role: "Hindustan Astrology",
    review:
      "An excellent team to collaborate with—highly skilled and confident in their work. Their communication was clear and timely, and they always responded quickly.",
  },

  {
    id: "johan",
    image: client3,
    video: null,
    // video: johanVideo,

    name: "Johan Lim",
    role: "Malaysia",
    review:
      "I have hired him several times, i think in general they can deliver the work just need to keep things on time. Overall ill hire them again",
  },

  {
    id: "bernie",
    image: client4,
    video: null,
    // video: bernieVideo,

    name: "Bernie Leigh",
    role: "Director, SpeediBoats",
    review:
      "Looking forward to working with Randeep and the MIT TEAM again very soon",
  },

  {
    id: "manie",
    image: client5,
    video: null,

    name: "Manie",
    role: "IOSG Venture",
    review:
      "Good team to work with as they are confident with their skills. Communication is also very good as they quickly respond. They priced the project well and competitively. Vinit was our main point of contact and he did an excellent job in communication!",
  },

  {
    id: "client-5",
    image: client6,
    video: null,

    name: "Client Name",
    role: "Client Role",
    review:
      "We had a great experience working with the MIT team.",
  },
];

export default function Feedback() {
  /*
   * The THIRD floating position is always the active client.
   *
   * Example:
   *
   * [A, B, C, D, E]
   *       ↑
   *    ACTIVE
   *
   * After next:
   *
   * [B, C, D, E, A]
   *       ↑
   *    ACTIVE
   */

  const [floatingClients, setFloatingClients] = useState(clients);

  const [swiperInstance, setSwiperInstance] = useState(null);

  const autoTimerRef = useRef(null);

  /*
   * Active client is always whoever is in position 3.
   */
  const activeClient = floatingClients[2];

  /* =========================================================
     MOVE TO NEXT CLIENT
  ========================================================= */

  const moveToNextClient = () => {
    setFloatingClients((current) => {
      const next = [...current];

      const firstClient = next.shift();

      next.push(firstClient);

      return next;
    });
  };

  /* =========================================================
     ACTIVATE CLICKED CLIENT
  ========================================================= */

  const activateClient = (clickedClient) => {
    setFloatingClients((current) => {
      const clickedIndex = current.findIndex(
        (client) => client.id === clickedClient.id
      );

      if (clickedIndex === -1) {
        return current;
      }

      /*
       * Already in the middle.
       */
      if (clickedIndex === 2) {
        return current;
      }

      const reordered = [...current];

      /*
       * Remove selected client.
       */
      const [selectedClient] = reordered.splice(clickedIndex, 1);

      /*
       * Put selected client into middle position.
       */
      reordered.splice(2, 0, selectedClient);

      return reordered;
    });
  };

  /* =========================================================
     AUTOMATIC CHANGE
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
  }, 3500);

  return () => {
    clearTimeout(autoTimerRef.current);
  };
}, [activeClient?.id]);
  /* =========================================================
     KEEP SWIPER SYNCHRONIZED
  ========================================================= */

  useEffect(() => {
    if (!swiperInstance || !activeClient) {
      return;
    }

    const clientIndex = clients.findIndex(
      (client) => client.id === activeClient.id
    );

    if (clientIndex === -1) {
      return;
    }

    /*
     * Avoid unnecessary slide changes.
     */
    if (swiperInstance.realIndex !== clientIndex) {
      swiperInstance.slideToLoop(clientIndex);
    }
  }, [activeClient?.id, swiperInstance]);

  /* =========================================================
     SWIPER PAGINATION / MANUAL REVIEW CHANGE
  ========================================================= */

  const handleSwiperChange = (swiper) => {
    const selectedClient = clients[swiper.realIndex];

    if (!selectedClient) {
      return;
    }

    activateClient(selectedClient);
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
    <section className="feedback-section">
      <div className="section-shell feedback-grid">

        {/* =================================
            FLOATING CLIENT IMAGES
        ================================= */}

        <div className="floating-people" data-reveal>
          {floatingClients.map((client, index) => (
            <img
              key={`${client.id}-${index}`}
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

        <div className="testimonial-photo" data-reveal>
          {activeClient?.video ? (
            <video
              key={activeClient.id}
              src={activeClient.video}
              controls
              playsInline
              onPlay={() => {
                if (autoTimerRef.current) {
                  clearTimeout(autoTimerRef.current);
                  autoTimerRef.current = null;
                }
              }}
              onEnded={moveToNextClient}
            />
          ) : (
            <div
              className="testimonial-video-placeholder"
              key={`${activeClient?.id}-placeholder`}
            >
              <span>TESTIMONIAL VIDEO</span>

              <strong>
                Coming Soon
              </strong>

              <small>
                We’re still uploading this client’s testimonial.
              </small>
            </div>
          )}

          <div key={`${activeClient?.id}-info`}>
            <strong>{activeClient?.name}</strong>
            <span>{activeClient?.role}</span>
          </div>
        </div>

        {/* =================================
            TESTIMONIAL / REVIEWS
        ================================= */}

        <div className="testimonial-copy" data-reveal>
          <div className="center-heading">
            <h2>Client’s Feedback</h2>
          </div>

          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            speed={700}
            initialSlide={2}
            onSwiper={setSwiperInstance}
            onSlideChange={handleSwiperChange}
            pagination={{
              clickable: true,
            }}
            className="feedback-swiper"
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="feedback-review">

                  {/* REVIEWER */}

                  <div className="feedback-reviewer">
                    <h2>{client.name}</h2>

                    <span>{client.role}</span>
                  </div>

                  {/* STARS */}

                  <div className="feedback-stars">
                    ★ ★ ★ ★ ★
                  </div>

                  {/* REVIEW */}

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
          alt="Abstract colorful 3D artwork"
        />
      </div>
    </section>
  );
}