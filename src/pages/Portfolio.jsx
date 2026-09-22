import { useEffect, useRef, useState } from "react";
import { submitEnquiry } from "../services/api";
import arrowbtn from "../assets/arrowbtn.svg";
import ellebeline from "../assets/ellebeline.png";
import chamundi from "../assets/chamundi.png";
import celegence from "../assets/celegence.png";
import daben from "../assets/Daben.png";
import DRUM from "../assets/DRUM.png";
import diversity from "../assets/diversity.png";
import enigmanova from "../assets/enigmanova.png";
import Contact from "../components/home/Contact";
import logoone from "../assets/logoone.png";
import logotwo from "../assets/logotwo.png";
import logothree from "../assets/logothree.png";
import logofour from "../assets/logofour.png";
import logofive from "../assets/logofive.png";
import logosix from "../assets/logosix.png";
import logoseven from "../assets/logoseven.png";
import logoeight from "../assets/logoeight.png";
import logonine from "../assets/logonine.png";
import logoten from "../assets/logoten.png";
import logoeleven from "../assets/logoeleven.png";
import logotwelve from "../assets/logotwelve.png";
import logothirteen from "../assets/logothirteen.png";
import logofourteen from "../assets/logofourteen.png";
import logofivteen from "../assets/logofivteen.png";
import logosixteen from "../assets/logosixteen.png";
import logoseventeen from "../assets/logoseventeen.png";
import logoeighteen from "../assets/logoeighteen.png";
import logonineteen from "../assets/logonineteen.png";
import logotwenty from "../assets/logotwenty.png";
import logotwentyone from "../assets/logotwentyone.png";
import infraoptics from "../assets/infraoptics.png";
import thewaya from "../assets/thewaya.png";
import jacaranda from "../assets/jacaranda.png";
import smartbol from "../assets/smartbol.png";
import verito from "../assets/verito.png";
import fastrack from "../assets/fastrack.png";
import medisync from "../assets/medisync.png";
import bryanstrohmone from "../assets/bryanstrohmone.png";
import hindustanasrologyone from "../assets/hindustanasrologyone.png";
import shipforma from "../assets/shipforma.png";
import property from "../assets/property.png";
import kreative from "../assets/kreative.png";
import mbbs from "../assets/mbbs.png";
import nusii from "../assets/nusii.png";
import beejartha from "../assets/beejartha.png";
import strawberry from "../assets/strawberry.png";
import diversitys from "../assets/diversitys.png";
import comingsoon from "../assets/comingsoon.png";
import aboutImage from "../assets/codrrr.gif";

const projectGroups = [
  {
    id: "CMS",
    number: "01",
    title: "CMS",
    projects: [
      {
        image: daben,
        label: "Daben — CMS",
      },
      {
        image: DRUM,
        label: "DRUM — CMS",
      },
      {
        image: ellebeline,
        label: "Ellebeline — CMS",
      },
      {
        image: chamundi,
        label: "Chamundi — CMS",
      },
      {
        image: celegence,
        label: "Celegence — CMS",
      },
      {
        image: enigmanova,
        label: "Enigmanova — CMS",
      },
      {
        image: diversity,
        label: "Diversity — CMS",
      },
    ],
  },

  {
    id: "logo",
    number: "02",
    title: "Logo Design",
    projects: [
      {
        image: logoone,
        label: "Fashion",
      },
      {
        image: logotwo,
        label: "Life Sciences & AI",
      },
      {
        image: logothree,
        label: "Media & Publishing",
      },
      {
        image: logofour,
        label: "Travelers & Travel Enthusiasts",
      },
      {
        image: logofive,
        label: "10 Book Series",
      },
      {
        image: logosix,
        label: "Healthcare | AI Solution",
      },
      {
        image: logoseven,
        label: "Mobile Case Covers",
      },
      {
        image: logoeight,
        label: "Mobile Case Covers",
      },
      {
        image: logonine,
        label: "Customer Referral & Rewards Platform",
      },
      {
        image: logoten,
        label: "Digital Shipping",
      },
      {
        image: logoeleven,
        label: "Jwellery",
      },
      {
        image: logotwelve,
        label: "Disability Services",
      },
      {
        image: logothirteen,
        label: "Disability Care & Support",
      },
      {
        image: logofourteen,
        label: "Care center",
      },
      {
        image: logofivteen,
        label: "South Indian Food",
      },
      {
        image: logosixteen,
        label: "Study & Work Abroad",
      },
      {
        image: logoseventeen,
        label: "Leadership & Business Coaching",
      },
      {
        image: logoeighteen,
        label: "Premium Tea & Wellness",
      },
      {
        image: logonineteen,
        label: "Pet Shop",
      },
      {
        image: logotwenty,
        label: "Oracle IT Solutions",
      },
      {
        image: logotwentyone,
        label: "Fibre Optic Solutions",
      },
    ],
  },

  {
    id: "banner",
    number: "03",
    title: "Ui/UX Design",
    projects: [
      {
        image: infraoptics,
        label: "Ui/Ux Design",
      },
      {
        image: thewaya,
        label: "Ui/Ux Design",
      },
      {
        image: jacaranda,
        label: "Ui/Ux Design",
      },
      {
        image: smartbol,
        label: "Ui/Ux Design",
      },
      {
        image: verito,
        label: "Ui/Ux Design",
      },
      {
        image: fastrack,
        label: "Ui/Ux Design",
      },
      {
        image: medisync,
        label: "Ui/Ux Design",
      },
      {
        image: bryanstrohmone,
        label: "Ui/Ux Design",
      },
      {
        image: hindustanasrologyone,
        label: "Ui/Ux Design",
      },
      {
        image: shipforma,
        label: "Ui/Ux Design",
      },
      {
        image: diversity,
        label: "Ui/Ux Design",
      },
      {
        image: property,
        label: "Ui/Ux Design",
      },
      {
        image: kreative,
        label: "Ui/Ux Design",
      },
    ],
  },

  {
    id: "poster",
    number: "04",
    title: "Banner Design",
    projects: [
      {
        image: mbbs,
        label: "photoshop",
      },
      {
        image: nusii,
        label: "photoshop",
      },
      {
        image: beejartha,
        label: "photoshop",
      },
      {
        image: strawberry,
        label: "photoshop",
      },
      {
        image: diversitys,
        label: "photoshop",
      },
      {
        image: comingsoon,
        label: "photoshop",
      },
    ],
  },
  {
    id: "videos",
    number: "05",
    title: "AI Videos",
    projects: [
      {
        image: aboutImage,
        label: "photoshop",
      },
      
    ],
  },

];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("CMS");
  
  

  const [contactOpen, setContactOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [feedback, setFeedback] = useState({
    success: "",
    error: "",
  });

  const groupRefs = useRef([]);

  /*
   * ========================================================
   * ACTIVE CATEGORY
   * ========================================================
   */

  useEffect(() => {
    const sections = groupRefs.current.filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        if (visibleEntries.length > 0) {
          const category =
            visibleEntries[0].target.dataset.category;

          if (category) {
            setActiveCategory(category);
          }
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * ========================================================
   * CATEGORY CLICK
   * ========================================================
   */

  const handleCategoryClick = (category) => {
    const section = document.querySelector(
      `[data-category="${category}"]`
    );

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveCategory(category);
    }
  };

  /*
   * ========================================================
   * LOCAL LINK
   * ========================================================
   */

  const handleLocalLink = (event, target) => {
    event.preventDefault();

    if (target === "contact") {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  /*
   * ========================================================
   * FORM
   * ========================================================
   */

  const updateField = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    setFeedback({
      success: "",
      error: "",
    });

    try {
      const data = await submitEnquiry(formData);

      setFeedback({
        success:
          data?.message ||
          "Your enquiry has been submitted successfully.",
        error: "",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setFeedback({
        success: "",
        error:
          error?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  /*
   * ========================================================
   * OPEN CONTACT
   * ========================================================
   */

  const openContact = (project) => {
    setSelectedProject(project);
    setContactOpen(true);

    document.body.style.overflow = "hidden";
  };

  /*
   * ========================================================
   * CLOSE CONTACT
   * ========================================================
   */

  const closeContact = () => {
    setContactOpen(false);
    setSelectedProject(null);

    document.body.style.overflow = "";
  };

  /*
   * ========================================================
   * CLICK OUTSIDE
   * ========================================================
   */

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeContact();
    }
  };

  /*
   * ========================================================
   * ESC KEY
   * ========================================================
   */

  useEffect(() => {
    if (!contactOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeContact();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [contactOpen]);

  /*
   * ========================================================
   * CLEANUP
   * ========================================================
   */

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /*
   * ========================================================
   * RENDER
   * ========================================================
   */

  return (
    <main className="portfolio-project-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="portfolio-project-hero">

        <div className="portfolio-project-hero-content">

          <h1 data-reveal>PORTFOLIO</h1>

          <p data-reveal>
            A collection of selected creative work across UI/UX,
            branding, banners and visual design.
          </p>

          <div className="buttonlets" data-reveal>

            <div className="buttonletss">

              <a
                href="/"
                className="service-btn service-btn-primary"
                onClick={(event) =>
                  handleLocalLink(event, "contact")
                }
              >
                Let's Build Together

                <span>
                  <img
                    src={arrowbtn}
                    alt=""
                  />
                </span>
              </a>

            </div>

          </div>

          <div className="services-glow services-glow-1"></div>

          <div className="services-glow services-glow-2"></div>

        </div>

      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section className="projects-section">

        <aside className="projects-sidebar">
          <h1 className="featuredprojec">FEATURED PROJECTS</h1>

          <div className="projects-categories">

            {projectGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                className={`project-category ${activeCategory === group.id
                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  handleCategoryClick(group.id)
                }
              >

                <span className="category-number">
                  {group.number}
                </span>

                <span className="category-title">
                  {group.title}
                </span>

              </button>
            ))}

          </div>

        </aside>

        <div className="projects-content">

          {projectGroups.map((group, groupIndex) => (
            <section
              key={group.id}
              ref={(element) => {
                groupRefs.current[groupIndex] = element;
              }}
              className="project-group"
              data-category={group.id}
            >

              <div className="project-grid">

                {group.projects.map((project, index) => (
                  <article
                    className="project-card"
                    key={`${group.id}-${index}`}
                    data-reveal
                  >

                    <div className="project-image">

                      <img
                        src={project.image}
                        alt={`${group.title} project ${index + 1
                          }`}
                        loading="lazy"
                      />

                    </div>

                    <div className="project-actions">

                      <div className="project-info">
                        <h4>{project.label}</h4>
                      </div>

                      <button
                        type="button"
                        className="project-contact-cta"
                        onClick={() => openContact(project)}
                      >
                        Let's Talk
                        <span><img src={arrowbtn} alt="arrow" /></span>
                      </button>

                    </div>
                  </article>
                ))}

              </div>

            </section>
          ))}

        </div>

      </section>

      {/* =====================================================
          CONTACT POPUP
      ===================================================== */}

      {contactOpen && (
        <div
          className="portfolio-contact-overlay"
          onMouseDown={handleOverlayClick}
        >

          <div
            className="portfolio-contact-modal"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="portfolio-contact-close"
              onClick={closeContact}
              aria-label="Close contact form"
            >
              ×
            </button>

            <Contact
              formData={formData}
              loading={loading}
              feedback={feedback}
              updateField={updateField}
              handleSubmit={handleSubmit}
              selectedProject={selectedProject}
            />

          </div>

        </div>
      )}

    </main>
  );
}