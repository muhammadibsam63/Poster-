import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portrait from "./assets/portrait.png";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const PORTFOLIOS = [
  {
    number: "01",
    title: "PRIMARY PORTFOLIO",
    label: "LIVE PORTFOLIO",
    url: "https://new-md-ibsam-protfolio.vercel.app/",
    description:
      "My main developer portfolio featuring my profile, skills, experience, services and selected work.",
  },
  {
    number: "02",
    title: "PORTFOLIO V2",
    label: "LIVE PROJECT",
    url: "https://muhammad-ibsam-portfolio-drtd.vercel.app/",
    description:
      "Another live version of my portfolio built to explore a different visual direction and frontend experience.",
  },
];

const SKILLS = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Node.js",
  "Firebase",
  "Git",
  "GitHub",
  "REST APIs",
  "Responsive UI",
];

const SERVICES = [
  "Custom Websites",
  "Responsive Design",
  "Frontend Development",
  "Backend Development",
  "E-Commerce Websites",
  "API Integration",
  "Modern UI Development",
  "Clean Code Architecture",
];

const LEARNING = ["TypeScript", "Express.js", "MongoDB", "Advanced React"];

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
    phone: (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
    github: (
      <svg {...common}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2 0 6.5-1.6 6.5-7A5.4 5.4 0 0 0 19 3.8 5 5 0 0 0 18.9 1S17.7.6 15 2.5a13.4 13.4 0 0 0-6 0C6.3.6 5.1 1 5.1 1A5 5 0 0 0 5 3.8 5.4 5.4 0 0 0 3.5 7.5c0 5.4 3.3 7 6.5 7a4.8 4.8 0 0 0-1 3.5v4" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </svg>
    ),
    instagram: (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
      </svg>
    ),
    linkedin: (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    external: (
      <svg {...common}>
        <path d="M14 3h7v7" />
        <path d="M10 14 21 3" />
        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),
    copy: (
      <svg {...common}>
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    ),
  };

  return icons[name] || null;
}

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-dots">
        <span className="dot red" />
        <span className="dot amber" />
        <span className="dot green" />
      </div>

      <div className="topbar-file">
        <span>~/developer/</span> ibsam.jsx
      </div>

      <div className="topbar-right">
        <span className="pulse" />
        SYSTEM ONLINE
      </div>
    </div>
  );
}

function SkillTag({ children }) {
  return (
    <span className="skill-tag">
      <span className="skill-dot" />
      {children}
    </span>
  );
}

function ContactRow({ icon, label, value, href }) {
  return (
    <a
      className="contact-row"
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <span className="contact-icon">
        <Icon name={icon} size={17} />
      </span>

      <span className="contact-copy">
        <small>{label}</small>
        <strong>{value}</strong>
      </span>

      <Icon name="external" size={14} />
    </a>
  );
}

function ServiceRow({ number, children }) {
  return (
    <div className="service-row">
      <span>{number}</span>
      <strong>{children}</strong>
      <Icon name="arrow" size={15} />
    </div>
  );
}

function PortfolioCard({ portfolio }) {
  return (
    <a
      className="portfolio-card"
      href={portfolio.url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="portfolio-card-glow" />

      <div className="portfolio-top">
        <span className="portfolio-number">{portfolio.number}</span>

        <span className="portfolio-status">
          <span />
          {portfolio.label}
        </span>
      </div>

      <div className="portfolio-main">
        <div>
          <span className="mini-label">WEB EXPERIENCE</span>
          <h3>{portfolio.title}</h3>
          <p>{portfolio.description}</p>
        </div>

        <span className="portfolio-arrow">
          <Icon name="arrow" size={22} />
        </span>
      </div>

      <div className="portfolio-bottom">
        <span>VERCEL DEPLOYMENT</span>
        <span>OPEN PORTFOLIO ↗</span>
      </div>
    </a>
  );
}

function Stat({ number, label }) {
  return (
    <div className="stat">
      <strong data-count={number}>{number}</strong>
      <span>{label}</span>
    </div>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);
  const appRef = useRef(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("muhammadibsam63@gmail.com");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      window.location.href = "mailto:muhammadibsam63@gmail.com";
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .from(".topbar", {
          y: -30,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          ".portrait-wrap",
          {
            y: 45,
            opacity: 0,
            scale: 0.94,
            duration: 1,
          },
          "-=0.45"
        )
        .from(
          ".hero-right > *",
          {
            y: 35,
            opacity: 0,
            duration: 0.7,
            stagger: 0.09,
          },
          "-=0.65"
        )
        .from(
          ".hero-meta > *",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.4"
        );

      gsap.from(".skill-tag", {
        scrollTrigger: {
          trigger: ".skills-box",
          start: "top 82%",
        },
        y: 18,
        opacity: 0,
        duration: 0.45,
        stagger: 0.04,
        ease: "power3.out",
      });

      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
          },
          y: 35,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      gsap.from(".stat", {
        scrollTrigger: {
          trigger: ".stats",
          start: "top 85%",
        },
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".portfolio-card", {
        scrollTrigger: {
          trigger: ".portfolios-grid",
          start: "top 82%",
        },
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power4.out",
      });

      gsap.to(".glow-a", {
        x: 90,
        y: 70,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".glow-b", {
        x: -80,
        y: -50,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".portrait-wrap", {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".scan-line", {
        yPercent: 1000,
        duration: 5,
        repeat: -1,
        ease: "none",
      });

      const cards = gsap.utils.toArray(".portfolio-card");

      cards.forEach((card) => {
        const onMove = (event) => {
          const rect = card.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        };

        card.addEventListener("mousemove", onMove);

        card._cleanup = () => {
          card.removeEventListener("mousemove", onMove);
        };
      });

      return () => {
        cards.forEach((card) => card._cleanup?.());
      };
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={appRef} className="stage">
      <div className="ambient">
        <div className="glow glow-a" />
        <div className="glow glow-b" />
        <div className="grid" />
        <div className="noise" />
        <div className="scan-line" />
      </div>

      <section className="poster-shell">
        <TopBar />

        <div className="hero">
          <div className="hero-left">
            <div className="portrait-wrap">
              <div className="portrait-frame">
                <img src={portrait} alt="Muhammad Ibsam" />
                <div className="portrait-overlay" />
              </div>

              <span className="corner corner-tl" />
              <span className="corner corner-tr" />
              <span className="corner corner-bl" />
              <span className="corner corner-br" />

              <div className="portrait-index">/ 001</div>
            </div>

            <div className="availability">
              <span className="availability-dot" />
              AVAILABLE FOR PROJECTS
            </div>

            <div className="education">
              <span className="label">EDUCATION</span>
              <strong>SMIT</strong>
              <span>Web Development Course</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="code-line">
              <span>01</span>
              <span className="keyword">const</span>{" "}
              <span className="variable">developer</span>{" "}
              <span>=</span>{" "}
              <span className="string">"Muhammad Ibsam"</span>
            </div>

            <span className="eyebrow">
              <span />
              FULL-STACK WEB DEVELOPER
            </span>

            <h1>
              BUILDING
              <br />
              <em>DIGITAL</em>
              <br />
              EXPERIENCES.
            </h1>

            <div className="identity">
              <span className="identity-line" />
              <div>
                <strong>MUHAMMAD IBSAM</strong>
                <p>
                  I create modern, responsive and interactive web experiences
                  using clean frontend architecture and powerful backend
                  technologies.
                </p>
              </div>
            </div>

            <div className="hero-meta">
              <div>
                <span>BASED IN</span>
                <strong>PAKISTAN 🇵🇰</strong>
              </div>

              <div>
                <span>FOCUS</span>
                <strong>WEB DEVELOPMENT</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong className="status-live">
                  <i /> LEARNING + BUILDING
                </strong>
              </div>
            </div>
          </div>
        </div>

        <div className="stats reveal">
          <Stat number="10+" label="TECH SKILLS" />
          <Stat number="8" label="SERVICES" />
          <Stat number="2" label="LIVE PORTFOLIOS" />
          <Stat number="∞" label="IDEAS TO BUILD" />
        </div>

        <div className="section-divider reveal">
          <span>02</span>
          <span>CAPABILITIES</span>
          <span />
        </div>

        <section className="capabilities">
          <div className="skills-box reveal">
            <div className="section-heading">
              <span className="mini-label">01 / TECH STACK</span>
              <h2>TOOLS I <em>BUILD</em> WITH.</h2>
            </div>

            <div className="skills-list">
              {SKILLS.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>

            <div className="exploring">
              <span>CURRENTLY EXPLORING</span>

              <div>
                {LEARNING.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="services-box reveal">
            <div className="section-heading">
              <span className="mini-label">02 / SERVICES</span>
              <h2>WHAT I <em>DO.</em></h2>
            </div>

            <div className="services-list">
              {SERVICES.map((service, index) => (
                <ServiceRow
                  key={service}
                  number={String(index + 1).padStart(2, "0")}
                >
                  {service}
                </ServiceRow>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider reveal">
          <span>03</span>
          <span>MY DIGITAL PRESENCE</span>
          <span />
        </div>

        <section className="portfolios-section">
          <div className="section-heading portfolio-heading reveal">
            <div>
              <span className="mini-label">LIVE / PORTFOLIOS</span>
              <h2>
                MY <em>PORTFOLIOS.</em>
              </h2>
            </div>

            <p>
              Explore my live portfolio experiences and see how I approach
              design, development and interaction.
            </p>
          </div>

          <div className="portfolios-grid">
            {PORTFOLIOS.map((portfolio) => (
              <PortfolioCard
                key={portfolio.number}
                portfolio={portfolio}
              />
            ))}
          </div>
        </section>

        <div className="section-divider reveal">
          <span>04</span>
          <span>LET'S CONNECT</span>
          <span />
        </div>

        <section className="contact-section">
          <div className="contact-intro reveal">
            <span className="mini-label">GET IN TOUCH</span>

            <h2>
              HAVE AN IDEA?
              <br />
              <em>LET'S BUILD IT.</em>
            </h2>

            <p>
              Whether it's a website, web app or a fresh digital idea, I'm
              always interested in creating something meaningful.
            </p>

            <button className="copy-email" onClick={copyEmail}>
              <span>
                <Icon name={copied ? "check" : "copy"} size={16} />
              </span>

              {copied ? "EMAIL COPIED" : "COPY EMAIL"}
            </button>
          </div>

          <div className="contact-panel reveal">
            <ContactRow
              icon="mail"
              label="EMAIL"
              value="muhammadibsam63@gmail.com"
              href="mailto:muhammadibsam63@gmail.com"
            />

            <ContactRow
              icon="phone"
              label="WHATSAPP"
              value="0322 8742404"
              href="https://wa.me/923228742404"
            />

            <ContactRow
              icon="github"
              label="GITHUB"
              value="@muhammadibsam63"
              href="https://github.com/muhammadibsam63"
            />

            <ContactRow
              icon="instagram"
              label="INSTAGRAM"
              value="@muhammad_ibsam_09"
              href="https://instagram.com/muhammad_ibsam_09"
            />

            <ContactRow
              icon="linkedin"
              label="LINKEDIN"
              value="Muhammad Ibsam"
              href="https://www.linkedin.com/in/muhammad-ibsam-7582363a6/"
            />
          </div>
        </section>

        <footer className="footer">
          <div className="footer-brand">
            <span className="mi-logo">MI</span>
            <div>
              <strong>MUHAMMAD IBSAM</strong>
              <span>WEB DEVELOPER</span>
            </div>
          </div>

          <div className="footer-center">
            <span className="footer-status">
              <i />
              SYSTEM ACTIVE
            </span>
            <span>© 2026 MUHAMMAD IBSAM</span>
          </div>

          <div className="footer-right">
            <span>PAKISTAN</span>
            <span>•</span>
            <span>WEB DEVELOPMENT</span>
          </div>
        </footer>
      </section>
    </main>
  );
}