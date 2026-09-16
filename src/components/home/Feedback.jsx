import abstractRight from "../../assets/design/10.png";
import client2 from "../../assets/design/12.png";
import client3 from "../../assets/design/13.png";
import client4 from "../../assets/design/14.png";
import client5 from "../../assets/design/15.png";
import client6 from "../../assets/design/16.png";
import google from "../../assets/google.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


const reviews = [
  {
    name: "Katya Faris",
    role: "Hindustan Astrology",
    review:
      "An excellent team to collaborate with—highly skilled and confident in their work. Their communication was clear and timely, and they always responded quickly.",
  },
  {
    name: "Johan Lim",
    role: "Malaysia",
    review:
      "I have hired him several times, i think in general they can deliver the work just need to keep things on time. Overall ill hire them again",
  },
  {
    name: "Bernie Leigh",
    role: "Director, SpeediBoats",
    review:
      "Looking forward to working with Randeep and the MIT TEAM again very soon",
  },
  {
    name: "Manie",
    role: "IOSG Venture",
    review:
      "Good team to work with as they are confident with their skills. Communication is also very good as they quickly respond. They priced the project well and competitively. Vinit was our main point of contact and he did an excellent job in communication!",
  },
];


export default function Feedback() {

  const handleSectionLink = (event, sectionId) => {
    event.preventDefault();

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="feedback-section">


      <div className="section-shell feedback-grid">

        {/* =================================
            FLOATING CLIENT IMAGES
        ================================= */}

        <div className="floating-people" data-reveal>
          <img src={client2} alt="" className="bord1" />
          <img src={client3} alt="" className="bord2" />
          <img src={client4} alt="" className="bord3" />
          <img src={client5} alt="" className="bord4" />
          <img src={client6} alt="" className="bord5" />
        </div>


        {/* =================================
            MAIN CLIENT IMAGE
        ================================= */}

        <div className="testimonial-photo" data-reveal>

          <img
            src={client6}
            alt="Client portrait"
          />

          <div>
            <strong>BERNIE LEIGH</strong>
            <span>Director, Luxor</span>
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
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            speed={700}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            className="feedback-swiper"
          >

            {reviews.map((item, index) => (

              <SwiperSlide key={index}>

                <div className="feedback-review">





                  {/* REVIEWER */}
                  <div className="feedback-reviewer">

                    <h2>
                      {item.name}
                    </h2>

                    <span>
                      {item.role}
                    </span>

                  </div>
                  {/* STARS */}
                  <div className="feedback-stars">
                    ★ ★ ★ ★ ★
                  </div>
                  {/* REVIEW */}
                  <p>
                    “{item.review}”
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