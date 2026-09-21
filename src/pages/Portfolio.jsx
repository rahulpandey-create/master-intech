import { useEffect, useRef, useState } from "react";
import { submitEnquiry } from "../services/api";
import arrowbtn from "../assets/arrowbtn.svg";
import ellebeline from "../assets/ellebeline.png";
import nusi from "../assets/nusi.png";
import enigmanova from "../assets/enigmanova.png";
import tasarden from "../assets/tasarden.png";

import Contact from "../components/home/Contact";

const projectGroups = [
  {
    id: "CMS",
    number: "01",
    title: "CMS",
    projects: [
      {
        image: ellebeline,
        label: "Ellebeline — CMS",
      },
      {
        image: nusi,
        label: "Jonathan Holmes — CMS",
      },
      {
        image: enigmanova,
        label: "enigmanova — CMS",
      },
      {
        image: tasarden,
        label: "tasarden — CMS",
      },
    ],
  },

  {
    id: "logo",
    number: "02",
    title: "Logo Design",
    projects: [
      {
        image: "https://picsum.photos/id/1025/1400/875",
        label: "Logo — Project 01",
      },
      {
        image: "https://picsum.photos/id/1027/1400/875",
        label: "Logo — Project 02",
      },
      {
        image: "https://picsum.photos/id/1029/1400/875",
        label: "Logo — Project 03",
      },
      {
        image: "https://picsum.photos/id/1033/1400/875",
        label: "Logo — Project 04",
      },
    ],
  },

  {
    id: "banner",
    number: "03",
    title: "Banner Design",
    projects: [
      {
        image: "https://picsum.photos/id/1035/1400/875",
        label: "Banner — Project 01",
      },
      {
        image: "https://picsum.photos/id/1037/1400/875",
        label: "Banner — Project 02",
      },
      {
        image: "https://picsum.photos/id/1040/1400/875",
        label: "Banner — Project 03",
      },
      {
        image: "https://picsum.photos/id/1043/1400/875",
        label: "Banner — Project 04",
      },
    ],
  },

  {
    id: "poster",
    number: "04",
    title: "Poster Design",
    projects: [
      {
        image: "https://picsum.photos/id/1044/1400/875",
        label: "Poster — Project 01",
      },
      {
        image: "https://picsum.photos/id/1045/1400/875",
        label: "Poster — Project 02",
      },
      {
        image: "https://picsum.photos/id/1047/1400/875",
        label: "Poster — Project 03",
      },
      {
        image: "https://picsum.photos/id/1050/1400/875",
        label: "Poster — Project 04",
      },
    ],
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("ui");

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

          <h1>MY PORTFOLIO</h1>

          <p>
            A collection of selected creative work across UI/UX,
            branding, banners and visual design.
          </p>

          <div className="buttonlets">

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

          <div className="projects-categories">

            {projectGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                className={`project-category ${
                  activeCategory === group.id
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
                  >

                    <div className="project-image">

                      <img
                        src={project.image}
                        alt={`${group.title} project ${
                          index + 1
                        }`}
                        loading="lazy"
                      />

                    </div>

                    <button
                      type="button"
                      className="project-info"
                      onClick={() =>
                        openContact(project)
                      }
                    >

                      <h4>
                        {project.label}
                      </h4>

                    </button>

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