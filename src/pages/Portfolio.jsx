import { useEffect, useRef, useState } from "react";
import { submitEnquiry } from "../services/api";
import DesignNav from "../components/home/designNav";
import Contact from "../components/home/Contact";

const projectGroups = [
  {
    id: "ui",
    number: "01",
    title: "UI/UX Design",
    projects: [
      {
        image: "https://picsum.photos/id/1015/1400/875",
        label: "UI/UX — Project 01",
      },
      {
        image: "https://picsum.photos/id/1016/1400/875",
        label: "UI/UX — Project 02",
      },
      {
        image: "https://picsum.photos/id/1018/1400/875",
        label: "UI/UX — Project 03",
      },
      {
        image: "https://picsum.photos/id/1020/1400/875",
        label: "UI/UX — Project 04",
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
  const [contactClosing, setContactClosing] = useState(false);

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

  /* ========================================================
     ACTIVE CATEGORY
     ======================================================== */

  useEffect(() => {
    const sections = groupRefs.current.filter(Boolean);

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

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* ========================================================
     CATEGORY CLICK
     ======================================================== */

  const handleCategoryClick = (category) => {
    const section = document.querySelector(
      `[data-category="${category}"]`
    );

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* ========================================================
     FORM
     ======================================================== */

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
        success: data.message,
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
          error.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  /* ========================================================
     OPEN CONTACT
     ======================================================== */

  const openContact = (project) => {
    setSelectedProject(project);
    setContactOpen(true);

    document.body.style.overflow = "hidden";
  };

  /* ========================================================
     CLOSE CONTACT
     ======================================================== */

  const closeContact = () => {
    setContactOpen(false);
    setSelectedProject(null);

    document.body.style.overflow = "";
  };



  /* ========================================================
     CLICK OUTSIDE
     ======================================================== */

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeContact();
    }
  };

  /* ========================================================
     ESC KEY
     ======================================================== */

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

  /* ========================================================
     CLEANUP
     ======================================================== */

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <main className="portfolio-project-page">

      <DesignNav />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="portfolio-project-hero">
        <div className="portfolio-project-hero-content">
          <h1>MY WORK</h1>

          <p>
            A collection of selected creative work across UI/UX,
            branding, banners and visual design.
          </p>
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
                  >
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={`${group.title} project ${index + 1
                          }`}
                      />
                    </div>

                    <button
                      type="button"
                      className="project-info"
                      onClick={() =>
                        openContact(project)
                      }
                    >
                      <h4>{project.label}</h4>
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
          <div className="portfolio-contact-modal">

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
            />

          </div>
        </div>
      )}

    </main>
  );
}