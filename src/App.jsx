import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Download,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
} from "lucide-react";
import "./App.css";

const name = "Veeramuthu R";

const highlights = [
  { label: "Focus", value: "MERN + UI/UX" },
  { label: "Experience", value: "3 internships" },
  { label: "Projects", value: "7 portfolio-ready builds" },
  { label: "Education", value: "B.E. CSE, 2022-2026" },
];

const skills = [
  "React.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
  "SQL",
  "Figma",
  "GitHub",
  "Postman",
  "WordPress",
];

const experience = [
  {
    title: "Prompt Infotech",
    subtitle: "Web Designing & Development Internship",
    period: "Internship",
    points: [
      "Built responsive and interactive website sections with HTML, CSS, and JavaScript.",
      "Applied UI/UX design principles to create clear layouts and usable interfaces.",
      "Worked on a small project that combined design thinking with functional web features.",
    ],
  },
  {
    title: "AICTE · Microsoft & Edunet Foundation",
    subtitle: "4-week Foundation of Artificial Intelligence",
    period: "Training",
    points: [
      "Studied AI fundamentals, machine learning concepts, and neural network basics.",
      "Used Python-based libraries through guided exercises and mini-projects.",
      "Strengthened problem-solving and model evaluation skills.",
    ],
  },
  {
    title: "Infygain",
    subtitle: "Frontend Developer Internship",
    period: "1 month",
    points: [
      "Built responsive UI screens with React.js and modern frontend patterns.",
      "Integrated APIs, managed state, and optimized multi-device layouts.",
      "Delivered a mini web application focused on polished user experience.",
    ],
  },
];

const projects = [
  {
    name: "Portfolio Website",
    tag: "Featured",
    stack: "HTML · CSS · JavaScript · React",
    description:
      "Personal portfolio website created to showcase skills, certifications, and projects.",
  },
  {
    name: "To-Do Web App",
    tag: "MERN",
    stack: "MongoDB · Express · React · Node",
    description:
      "Task management app with CRUD operations and user authentication.",
  },
  {
    name: "Food Delivery Website",
    tag: "Product UI",
    stack: "HTML · CSS · JavaScript · React",
    description:
      "Food ordering and delivery experience for local restaurants with a clean interface.",
  },
  {
    name: "Travel Planning Tracker",
    tag: "Mobile Contribution",
    stack: "Kotlin · Java",
    description:
      "Collaborative travel planning and tracking app for route and itinerary management.",
  },
  {
    name: "Habit Tracker",
    tag: "Hackathon",
    stack: "MERN Stack",
    description:
      "Habit tracking web app designed for daily monitoring and consistency.",
  },
  {
    name: "AI Chatbot",
    tag: "Automation",
    stack: "Gemini Model · n8n",
    description:
      "Conversational assistant concept built around AI workflow automation.",
  },
  {
    name: "Custom WordPress Blog Theme",
    tag: "CMS",
    stack: "WordPress · Custom Templates",
    description:
      "Responsive blog theme development with custom template hierarchy and structure.",
  },
];

const certifications = [
  "MERN Stack Web Development · Jan 2025",
  "Oracle Cloud Infrastructure Foundation Course · Jul 2024",
  "ICT Learnathon · Jan 2025",
  "Teckno KreatiCon Project Pitch · Feb 2025",
  "IBM SkillBuild AI Fundamentals · Aug 2025",
];

const education = [
  {
    degree: "Bachelor of Computer Science and Engineering",
    school: "PPG Institute of Technology, Coimbatore",
    period: "2022 - 2026",
    note: "GPA 8.1/10",
  },
  {
    degree: "Higher Secondary Certificate",
    school: "Variyar Higher Secondary School",
    period: "2020 - 2021",
    note: "81.3%",
  },
  {
    degree: "Secondary School Leaving Certificate",
    school: "Variyar Higher Secondary School",
    period: "2019 - 2020",
    note: "91.6%",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const [filter, setFilter] = useState("All");
  const tags = ["All", ...Array.from(new Set(projects.map((p) => p.tag)))];
  const [selectedProject, setSelectedProject] = useState(null);
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.tag === filter);
  const [formStatus, setFormStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const FORM_ENDPOINT = "https://formspree.io/f/your-form-id"; // replace with your Formspree ID

  async function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setSending(true);
    setFormStatus(null);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setFormStatus({ ok: true, message: "Message sent — thank you!" });
        form.reset();
      } else {
        const payload = await res.json().catch(() => ({}));
        setFormStatus({
          ok: false,
          message: payload.error || "Submission failed",
        });
      }
    } catch (err) {
      setFormStatus({
        ok: false,
        message: "Network error — try email instead.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="portfolio-shell">
      <nav className="site-nav">
        <div className="nav-inner">
          <a className="nav-logo" href="#top">
            {name}
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <a
              className="nav-resume"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <motion.header
        className="hero"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        <motion.div className="hero-grid" variants={fadeUp}>
          <div className="hero-copy">
            <p className="intro-line">Hi, I am</p>
            <motion.h1 className="name-gradient" variants={fadeUp}>
              {name}
            </motion.h1>

            <div className="role-rotator" aria-hidden>
              <span>MERN Stack Developer</span>
              <span>UI / UX Designer</span>
              <span>Frontend Engineer</span>
            </div>

            <p className="hero-text">
              A placement-ready portfolio built from the resume, focused on
              modern React UI, motion-driven micro-interactions, and
              production-minded storytelling.
            </p>

            <div className="hero-actions">
              <a
                className="primary-action"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={18} />
                Open Resume
              </a>
              <a className="secondary-action" href="#projects">
                View Projects
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="scroll-hint" aria-hidden>
              <div className="scroll-dot" />
              <div>Scroll to explore</div>
            </div>

            <div className="contact-strip">
              <a href="mailto:veeradpi12@gmail.com">
                <Mail size={16} />
                veeradpi12@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/veeramuthu-r-02b813269"
                target="_blank"
                rel="noreferrer"
              >
                <ArrowUpRight size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/Veeramuthu2004"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={16} />
                GitHub
              </a>
            </div>
          </div>

          <motion.aside
            className="hero-card"
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div className="hero-card-top">
              <span className="status-pill">
                <BadgeCheck size={14} />
                Open for opportunities
              </span>
              <span className="status-date">
                <CalendarDays size={14} />
                2026 graduation track
              </span>
            </div>

            <div className="hero-card-name">
              <div className="avatar-mark">VR</div>
              <div>
                <h2>{name}</h2>
                <p>Coimbatore, India</p>
              </div>
            </div>

            <div className="hero-badges" aria-hidden>
              <span className="badge">React</span>
              <span className="badge">MERN</span>
              <span className="badge">Figma</span>
            </div>

            <p className="hero-card-summary">
              Passionate about MERN stack development, scalable web apps, and UI
              systems that feel sharp on every screen size.
            </p>

            <div className="hero-card-metrics">
              {highlights.map((item) => (
                <div key={item.label} className="metric-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </motion.aside>
        </motion.div>
      </motion.header>

      <section className="stats-grid" aria-label="Key highlights">
        {highlights.map((item) => (
          <motion.div
            key={item.label}
            className="stat-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </motion.div>
        ))}
      </section>

      <motion.section
        className="content-section glass-panel"
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="section-heading">
          <div>
            <span className="section-kicker">About</span>
            <h2>Focused on clean execution, not filler.</h2>
          </div>
          <p>
            MERN stack developer, UI design enthusiast, and product-minded
            builder with a strong base in responsive design, scalable
            architecture, and practical delivery.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card accent-card">
            <BrainCircuit size={24} />
            <h3>Core direction</h3>
            <p>
              Build modern full-stack web experiences with polished interfaces,
              clear structure, and strong usability.
            </p>
          </div>
          <div className="about-card">
            <Rocket size={24} />
            <h3>What I ship</h3>
            <p>
              Portfolio apps, CRUD systems, responsive product UIs, and
              CMS-based themes with practical workflows.
            </p>
          </div>
          <div className="about-card">
            <BriefcaseBusiness size={24} />
            <h3>Work style</h3>
            <p>
              Fast iteration, attention to detail, and designs that still hold
              up when translated into real frontend code.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="content-section"
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="section-heading">
          <div>
            <span className="section-kicker">Experience</span>
            <h2>Internships and training that shaped the portfolio.</h2>
          </div>
          <p>
            Hands-on exposure across frontend development, web design, and AI
            foundations.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-card" key={item.title}>
              <div className="timeline-meta">
                <span>{item.period}</span>
                <Layers3 size={16} />
              </div>
              <h3>{item.title}</h3>
              <p className="timeline-subtitle">{item.subtitle}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="content-section"
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="section-heading">
          <div>
            <span className="section-kicker">Projects</span>
            {/* <h2>Selected work from the resume.</h2> */}
          </div>
          <p>
            A compact showcase of product, frontend, and CMS work with practical
            value.
          </p>
        </div>

        <div className="project-filters">
          {tags.map((t) => (
            <button
              key={t}
              className={"filter-btn " + (filter === t ? "active" : "")}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.name}
              className="project-card clickable"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-topline">
                <span>{project.tag}</span>
                <ArrowUpRight size={16} />
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-stack">{project.stack}</div>
            </motion.article>
          ))}
        </div>

        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <header className="modal-header">
                <h3>{selectedProject.name}</h3>
                <button
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </header>
              <div className="modal-body">
                <p>{selectedProject.description}</p>
                <p className="modal-stack">Stack: {selectedProject.stack}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.section>

      <div className="dual-grid">
        <motion.section
          className="content-section glass-panel"
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="section-heading compact">
            <div>
              <span className="section-kicker">Skills</span>
              <h2>Technology stack and creative tools.</h2>
            </div>
          </div>
          <div className="skill-chips">
            {skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="content-section glass-panel"
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="section-heading compact">
            <div>
              <span className="section-kicker">Education</span>
              <h2>Academic foundation.</h2>
            </div>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <div key={item.degree} className="education-card">
                <GraduationCap size={18} />
                <div>
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                </div>
                <span>{item.period}</span>
                <strong>{item.note}</strong>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      <motion.section
        className="content-section"
        id="certifications"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="section-heading">
          <div>
            <span className="section-kicker">Certifications</span>
            <h2>Additional proof of learning.</h2>
          </div>
        </div>

        <div className="cert-grid">
          {certifications.map((item) => (
            <div key={item} className="cert-card">
              <BadgeCheck size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="contact-panel"
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div>
          <span className="section-kicker">Contact</span>
          <h2>Ready for internship or junior frontend/full-stack roles.</h2>
          <p>
            If you want the site tuned further, I can also tailor it around a
            specific job title, company, or color direction.
          </p>
        </div>

        <div className="contact-actions">
          <form
            className="contact-form"
            onSubmit={handleContactSubmit}
            aria-label="Contact form"
          >
            <label>
              <span className="sr-only">Your name</span>
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              <span className="sr-only">Your email</span>
              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
              />
            </label>
            <label>
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                required
              />
            </label>
            <div className="form-actions">
              <button
                type="submit"
                className="primary-action"
                disabled={sending}
              >
                {sending ? "Sending…" : "Send message"}
              </button>
              <a
                className="secondary-action"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={16} />
                Resume PDF
              </a>
            </div>
            {formStatus && (
              <div
                className={"form-status " + (formStatus.ok ? "ok" : "err")}
                role="status"
              >
                {formStatus.message}
              </div>
            )}
          </form>

          <div className="contact-shortcuts">
            <a href="mailto:veeradpi12@gmail.com">
              <Mail size={16} />
              Email
            </a>
            <a href="tel:+919597316057">
              <MapPin size={16} />
              Call
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default App;
