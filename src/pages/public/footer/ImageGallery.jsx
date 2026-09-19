import React, { useState } from "react";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiCamera,
  FiGrid,
  FiLayers,
  FiArrowUpRight,
} from "react-icons/fi";

import PageHero from "../../../components/PageHero";
import "./ImageGallery.css";

const categories = [
  "All",
  "Campus",
  "Academics",
  "Cultural",
  "Sports",
  "Community",
  "Infrastructure",
];

const galleryItems = [
  /* ================= CAMPUS ================= */

  {
    id: 1,
    category: "Campus",
    src: "https://mkjkcollege.org/img/files/folder/college%20building.jpg",
    thumb: "https://mkjkcollege.org/img/files/folder/college%20building.jpg",
    title: "College Building",
    caption:
      "The iconic main building of Maharani Kishori Jat Kanya Mahavidyalaya, Rohtak.",
    span: "featured",
  },

  {
    id: 2,
    category: "Campus",
    src: "/assets/infrastructure-blocks.png",
    thumb: "/assets/infrastructure-blocks.png",
    title: "Infrastructure Overview",
    caption:
      "A bird's-eye view of the campus infrastructure and blocks.",
    span: "normal",
  },

  {
    id: 3,
    category: "Campus",
    src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
    thumb:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=70",
    title: "College Campus",
    caption:
      "Lush green campus grounds – an ideal learning environment.",
    span: "normal",
  },

  {
    id: 4,
    category: "Campus",
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
    thumb:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=70",
    title: "Convocation Ground",
    caption:
      "Annual convocation ceremony held at the campus.",
    span: "normal",
  },

  /* ================= ACADEMICS ================= */

  {
    id: 5,
    category: "Academics",
    src: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=900&q=80",
    thumb:
      "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=600&q=70",
    title: "Classroom Session",
    caption:
      "Interactive classroom sessions promoting quality education.",
    span: "featured",
  },

  {
    id: 6,
    category: "Academics",
    src: "/assets/best-practices-reference.png",
    thumb: "/assets/best-practices-reference.png",
    title: "Best Practices",
    caption:
      "Documented best practices adopted by the institution.",
    span: "normal",
  },

  {
    id: 7,
    category: "Academics",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    thumb:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=70",
    title: "Library Resources",
    caption:
      "Students utilizing the well-stocked MKJK library.",
    span: "normal",
  },

  {
    id: 8,
    category: "Academics",
    src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=900&q=80",
    thumb:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=600&q=70",
    title: "Science Laboratory",
    caption:
      "Modern science labs supporting practical learning.",
    span: "normal",
  },

  /* ================= CULTURAL ================= */

  {
    id: 9,
    category: "Cultural",
    src: "/assets/cultural-illustration.svg",
    thumb: "/assets/cultural-illustration.svg",
    title: "Cultural Activities",
    caption:
      "Vibrant cultural events that celebrate arts and traditions.",
    span: "normal",
  },

  {
    id: 10,
    category: "Cultural",
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=80",
    thumb:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=70",
    title: "Annual Cultural Fest",
    caption:
      "Annual cultural festival showcasing student talent.",
    span: "featured",
  },

  {
    id: 11,
    category: "Cultural",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    thumb:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=70",
    title: "Dance Performance",
    caption:
      "Students showcasing their dancing talents at the annual event.",
    span: "normal",
  },

  /* ================= SPORTS ================= */

  {
    id: 12,
    category: "Sports",
    src: "/assets/sports-illustration.svg",
    thumb: "/assets/sports-illustration.svg",
    title: "Sports Facilities",
    caption:
      "State-of-the-art sports infrastructure for students.",
    span: "normal",
  },

  {
    id: 13,
    category: "Sports",
    src: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=900&q=80",
    thumb:
      "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=600&q=70",
    title: "Annual Sports Meet",
    caption:
      "Inter-college sports competition promoting fitness and teamwork.",
    span: "featured",
  },

  {
    id: 14,
    category: "Sports",
    src: "https://images.unsplash.com/photo-1547919307-1ecb10702e6f?auto=format&fit=crop&w=900&q=80",
    thumb:
      "https://images.unsplash.com/photo-1547919307-1ecb10702e6f?auto=format&fit=crop&w=600&q=70",
    title: "Yoga & Wellness",
    caption:
      "Students participating in yoga and wellness programmes.",
    span: "normal",
  },

  /* ================= COMMUNITY ================= */

  {
    id: 15,
    category: "Community",
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80",
    thumb:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=70",
    title: "NSS Community Drive",
    caption:
      "National Service Scheme volunteers serving the community.",
    span: "featured",
  },

  {
    id: 16,
    category: "Community",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    thumb:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=70",
    title: "Women Empowerment",
    caption:
      "Events promoting women empowerment and gender equality.",
    span: "normal",
  },

  {
    id: 17,
    category: "Community",
    src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=80",
    thumb:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=70",
    title: "NCC Activities",
    caption:
      "NCC cadets in discipline training and parade exercises.",
    span: "normal",
  },

  /* ================= INFRASTRUCTURE ================= */

  {
    id: 18,
    category: "Infrastructure",
    src: "/assets/organizational-structure.png",
    thumb: "/assets/organizational-structure.png",
    title: "Organizational Structure",
    caption:
      "The institutional organizational chart and governance structure.",
    span: "featured",
  },

  {
    id: 19,
    category: "Infrastructure",
    src: "/assets/hostel-illustration.svg",
    thumb: "/assets/hostel-illustration.svg",
    title: "Hostel Facilities",
    caption:
      "Comfortable and secure hostel accommodation for students.",
    span: "normal",
  },

  {
    id: 20,
    category: "Infrastructure",
    src: "/assets/library-illustration.svg",
    thumb: "/assets/library-illustration.svg",
    title: "Library Block",
    caption:
      "The MKJK library – a hub of knowledge and digital resources.",
    span: "normal",
  },

  {
    id: 21,
    category: "Infrastructure",
    src: "/assets/research-illustration.svg",
    thumb: "/assets/research-illustration.svg",
    title: "Research Centre",
    caption:
      "Research and innovation centre supporting academic excellence.",
    span: "normal",
  },

  {
    id: 22,
    category: "Infrastructure",
    src: "/assets/scbc-complaint-form-reference.png",
    thumb: "/assets/scbc-complaint-form-reference.png",
    title: "SC/BC Cell",
    caption:
      "SC/BC Cell supporting scholarship and welfare for students.",
    span: "normal",
  },
];

export default function ImageGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  const openLightbox = (index) => {
    setLightbox(index);
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const prevImage = () => {
    setLightbox((current) =>
      current === 0
        ? filtered.length - 1
        : current - 1
    );
  };

  const nextImage = () => {
    setLightbox((current) =>
      current === filtered.length - 1
        ? 0
        : current + 1
    );
  };

  const handleKeyDown = (e) => {
    if (lightbox === null) return;

    if (e.key === "ArrowLeft") {
      prevImage();
    }

    if (e.key === "ArrowRight") {
      nextImage();
    }

    if (e.key === "Escape") {
      closeLightbox();
    }
  };

  return (
    <>
      <PageHero
        title="Image Gallery"
        subtitle="A visual window into campus life, academics, culture and community."
      />

      <main
        className="ig-main page-scope-imagegallery"
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >

        {/* ================================================
            TOP INTRO
        ================================================= */}

        <section className="ig-intro">
          <div className="ig-intro-inner">

            <div className="ig-intro-content">
              <span className="ig-eyebrow">
                <FiCamera />
                CAMPUS MOMENTS
              </span>

              <h1>
                Life at
                <br />
                <em>MKJK College.</em>
              </h1>

              <p>
                Explore moments from our campus, classrooms,
                cultural activities, sports, community initiatives
                and institutional facilities.
              </p>
            </div>

            <div className="ig-intro-stats">

              <div className="ig-intro-stat">
                <FiCamera />
                <strong>{galleryItems.length}</strong>
                <span>Photos</span>
              </div>

              <div className="ig-intro-divider"></div>

              <div className="ig-intro-stat">
                <FiGrid />
                <strong>{categories.length - 1}</strong>
                <span>Categories</span>
              </div>

              <div className="ig-intro-divider"></div>

              <div className="ig-intro-stat">
                <FiLayers />
                <strong>1988</strong>
                <span>Established</span>
              </div>

            </div>

          </div>
        </section>


        {/* ================================================
            GALLERY CONTAINER
        ================================================= */}

        <div className="ig-container">

          {/* FILTER */}

          <div className="ig-toolbar">

            <div>
              <span className="ig-toolbar-label">
                EXPLORE GALLERY
              </span>

              <div className="ig-filter-pills">

                {categories.map((category) => {
                  const count =
                    category === "All"
                      ? galleryItems.length
                      : galleryItems.filter(
                          (item) =>
                            item.category === category
                        ).length;

                  return (
                    <button
                      key={category}
                      type="button"
                      className={`ig-pill ${
                        activeCategory === category
                          ? "ig-pill--active"
                          : ""
                      }`}
                      onClick={() =>
                        setActiveCategory(category)
                      }
                    >
                      {category}

                      <span className="ig-pill-count">
                        {count}
                      </span>
                    </button>
                  );
                })}

              </div>
            </div>

            <div className="ig-showing">
              <span>Showing</span>
              <strong>{filtered.length}</strong>
              <span>photos</span>
            </div>

          </div>


          {/* GALLERY */}

          {filtered.length > 0 ? (
            <div className="ig-grid">

              {filtered.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`ig-card ig-card--${item.span}`}
                  onClick={() =>
                    openLightbox(index)
                  }
                  aria-label={`Open ${item.title}`}
                >

                  <img
                    src={item.thumb}
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="ig-card-shade"></div>

                  <div className="ig-card-content">

                    <div>
                      <span className="ig-card-category">
                        {item.category}
                      </span>

                      <h2>{item.title}</h2>
                    </div>

                    <span className="ig-card-arrow">
                      <FiArrowUpRight />
                    </span>

                  </div>

                </button>
              ))}

            </div>
          ) : (
            <div className="ig-empty">
              <FiCamera />
              <h3>No photos available</h3>
              <p>
                There are no gallery photos in this category yet.
              </p>
            </div>
          )}

        </div>

      </main>


      {/* ================================================
          LIGHTBOX
      ================================================= */}

      {lightbox !== null && filtered.length > 0 && (
        <div
          className="ig-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeLightbox();
            }
          }}
        >

          <button
            className="ig-lb-close"
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            <FiX />
          </button>


          <button
            className="ig-lb-nav ig-lb-prev"
            type="button"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <FiChevronLeft />
          </button>


          <div className="ig-lb-content">

            <div className="ig-lb-image-wrap">
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].title}
                className="ig-lb-image"
              />
            </div>

            <div className="ig-lb-info">

              <div>
                <span className="ig-lb-category">
                  {filtered[lightbox].category}
                </span>

                <h2>
                  {filtered[lightbox].title}
                </h2>

                <p>
                  {filtered[lightbox].caption}
                </p>
              </div>

              <span className="ig-lb-counter">
                {String(lightbox + 1).padStart(2, "0")}
                {" / "}
                {String(filtered.length).padStart(2, "0")}
              </span>

            </div>

          </div>


          <button
            className="ig-lb-nav ig-lb-next"
            type="button"
            onClick={nextImage}
            aria-label="Next image"
          >
            <FiChevronRight />
          </button>

        </div>
      )}
    </>
  );
}