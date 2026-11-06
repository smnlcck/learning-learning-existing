import { useEffect, useRef, useState } from "react";
import "./Learning.css";

const LOGO_BASE = "https://simonalcock.ie/wp-content/uploads";

export const learningItems = [
  {
    title: "Designing for Accessibility",
    year: 2025,
    institution: "UX Design Institute Dublin / Glasgow Caledonian University",
    logo: `${LOGO_BASE}/2024/07/ux-design-institute-logo.png`,
    logoAlt: "UX Design Institute logo",
  },
  {
    title: "Fintech",
    year: 2023,
    institution: "Stanford University, California",
    logo: `${LOGO_BASE}/2023/07/stanford-2.png`,
    logoAlt: "Stanford University crest",
  },
  {
    title: "Accessibility, Representation & Inclusion",
    year: 2020,
    institution: "Curtin University of Technology, Perth",
    logo: `${LOGO_BASE}/2023/07/curtin-256.png`,
    logoAlt: "Curtin University crest",
  },
  {
    title: "UX Design",
    year: 2019,
    institution: "UX Design Institute Dublin / Glasgow Caledonian University",
    logo: `${LOGO_BASE}/2024/07/ux-design-institute-logo.png`,
    logoAlt: "UX Design Institute logo",
  },
  {
    title: "Critical Thinking & Problem Solving",
    year: 2018,
    institution: "Rochester Institute of Technology, New York",
    logo: `${LOGO_BASE}/2023/07/rit-256.png`,
    logoAlt: "Rochester Institute of Technology logo",
  },
  {
    title: "Blockchain Technology",
    year: 2018,
    institution: "Berkeley University, California",
    logo: `${LOGO_BASE}/2023/12/berkeley-256.png`,
    logoAlt: "Berkeley University logo",
  },
];

/**
 * Reveals once when the list scrolls into view.
 * Rows stagger in via a CSS custom property (--i), so timing lives in CSS.
 */
function useRevealOnce(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // No observer support (or SSR hydration edge) → just show.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export function LearningItem({ title, year, institution, logo, logoAlt, index }) {
  return (
    <li className="learning__item" style={{ "--i": index }}>
      <div className="learning__logo">
        <img src={logo} alt={logoAlt} loading="lazy" decoding="async" />
      </div>
      <div className="learning__text">
        <h3 className="learning__title">
          {title} <span className="learning__year">({year})</span>
        </h3>
        <p className="learning__institution">{institution}</p>
      </div>
    </li>
  );
}

export default function Learning({ heading = "Learning", items = learningItems }) {
  const [listRef, visible] = useRevealOnce();

  return (
    <section className="learning" aria-labelledby="learning-heading">
      <div className="learning__inner">
        <h2 id="learning-heading" className="learning__heading">
          {heading}
        </h2>
        <div className="learning__card">
          <ul
            ref={listRef}
            className={`learning__list${visible ? " is-visible" : ""}`}
          >
            {items.map((item, i) => (
              <LearningItem key={`${item.title}-${item.year}`} index={i} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
