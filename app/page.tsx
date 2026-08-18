import ThreeCanvas from "./three-canvas";
import styles from "./page.module.css";

const projects = [
  {
    index: "01",
    name: "Unstuck Official Website",
    type: "Official Website",
    tone: "acid",
    description:
      "A website for Unstuck, a platform that helps organizations discover the right career paths and connect with the right candidates.",
    outcome: "An animated, AI-powered website built with GSAP and OpenAI to guide companies to the right path.",
    stack: ["Astro.js", "Tailwind CSS", "OpenAI", "GSAP"],
    href: "https://unstucklabs.com",
    linkLabel: "Visit unstucklabs.com",
  },
  {
    index: "02",
    name: "UnstuckOS",
    type: "Ticketing Management System",
    tone: "violet",
    description:
      "Ticket management platform that enables teams to organize work across customizable workspaces, folders, and sprint-based lists, with flexible workflows for moving tickets through different stages and statuses.",
    outcome: "Project management and ticketing platform.",
    stack: ["React", "Typescript", "Supabase", "REST APIs"],
    href: "https://os.unstucklabs.app/",
    linkLabel: "Visit os.unstucklabs.app",
  },
  {
    index: "03",
    name: "Summon a Dev",
    type: "AI-powered code generator",
    tone: "cyan",
    description:
      "You describe what you want in plain English, and it generates a working application. A competitor of lovable, and a user can summon a dev to help them build their idea.",
    outcome: "A web application that generates working code based on the user's description.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN", "Vercel AI SDK", "Supabase", "Sprites Dev"],
    href: "https://summon.dev",
    linkLabel: "Visit summon.dev",
  },
];

const experiences = [
  {
    period: "2025 — NOW",
    company: "UnstuckLabs",
    role: "Software Engineer · Full Stack",
    summary:
      "Owning customer-facing features from Figma handoff through production for products serving more than 500K users.",
    proof: [
      "Shared React and TypeScript architecture across product surfaces",
      "Real-time views, identity flows, and data-heavy interfaces",
      "95%+ release stability through automated delivery pipelines",
      "Mentorship for 2 engineers and frontend architecture reviews",
    ],
  },
  {
    period: "2025",
    company: "Hybrid MediaWorks",
    role: "Software Engineer · Full Stack",
    summary:
      "Delivered client products end-to-end, with a focus on resilient data flows and performance in real-world conditions.",
    proof: [
      "Offline-first persistence with IndexedDB and Dexie.js",
      "Lazy loading, render tuning, and asynchronous data flows",
      "Cross-functional delivery with design, product, and QA",
    ],
  },
  {
    period: "2022 — 2024",
    company: "EliteIT Team",
    role: "Software Engineer · React & Full Stack",
    summary:
      "Built, tested, and deployed full-stack products across distributed teams and cloud environments.",
    proof: [
      "Reusable React interfaces with Tailwind and ShadCN",
      "AWS delivery with EC2, S3, and IAM access control",
      "Automated GitHub Actions workflows and release validation",
    ],
  },
];

const capabilities = [
  {
    number: "01",
    title: "Product interfaces",
    copy: "Responsive, accessible experiences built to keep complex workflows understandable.",
    skills: ["React", "Next.js", "TypeScript", "Astro", "GSAP", "WCAG 2.1"],
  },
  {
    number: "02",
    title: "Application systems",
    copy: "Reliable APIs, state architecture, and real-time data flows that hold up in production.",
    skills: ["Node.js", "NestJS", "Express", "REST", "WebSockets", "Offline-first"],
  },
  {
    number: "03",
    title: "Data & delivery",
    copy: "Practical persistence, automated quality, and cloud delivery from commit to customer.",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "AWS", "GitHub Actions", "Testing"],
  },
];

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {down ? <path d="M12 3v17m0 0 7-7m-7 7-7-7" /> : <path d="M5 19 19 5M8 5h11v11" />}
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 8.6H3.3V19h3.3V8.6ZM4.95 3.4a1.91 1.91 0 1 0 0 3.82 1.91 1.91 0 0 0 0-3.82ZM20.2 13.04c0-3.14-1.68-4.6-3.92-4.6a3.4 3.4 0 0 0-3.07 1.68V8.6H9.92V19h3.29v-5.14c0-1.36.26-2.68 1.95-2.68 1.67 0 1.69 1.56 1.69 2.77V19h3.29l.06-5.96Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>

      <ThreeCanvas />

      <div className={styles.scrollProgress} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.page}>
        <header className={styles.header}>
          <a className={styles.brand} href="#top" aria-label="Khaqan Aamir, back to top">
            <span className={styles.brandMark}>K/A</span>
            <span>
              <strong>Khaqan Aamir</strong>
              <small>Full-stack engineer</small>
            </span>
          </a>

          <nav className={styles.nav} aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#capabilities">Stack</a>
          </nav>

          <a className={styles.navCta} href="mailto:khaqanaamir92@gmail.com">
            Start a project
            <Arrow />
          </a>
        </header>

        <main id="main">
          <section className={styles.hero} id="top" aria-labelledby="hero-title">
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <div className={styles.eyebrow}>
                  <span className={styles.liveDot} />
                  <span>Available for meaningful work</span>
                  <i />
                  <span>2026</span>
                </div>

                <h1 id="hero-title">
                  Digital products
                  <span>with a pulse.</span>
                </h1>

                <p className={styles.heroIntro}>
                  I&apos;m <strong>Khaqan Aamir</strong>—a full-stack engineer turning
                  complex systems into fast, accessible experiences people can actually
                  enjoy using.
                </p>

                <div className={styles.heroActions}>
                  <a className={styles.primaryButton} href="#work">
                    Enter selected work
                    <Arrow down />
                  </a>
                  <a className={styles.inlineLink} href="mailto:khaqanaamir92@gmail.com">
                    Let&apos;s talk
                    <Arrow />
                  </a>
                </div>
              </div>

              <div className={styles.sceneHud} aria-hidden="true">
                <span className={styles.hudTop}>Interactive developer core</span>
                <span className={styles.hudRight}>React / Node / Data</span>
                <div className={styles.hudCrosshair}>
                  <i />
                  <i />
                </div>
                <span className={styles.hudBottom}>Move your pointer · Scroll to navigate</span>
              </div>
            </div>

            <div className={styles.heroFoot}>
              <div>
                <span>Specialized in</span>
                <strong>Product engineering · Data-rich UI · Scalable systems</strong>
              </div>
              <a href="#signal" aria-label="Scroll to career highlights">
                Scroll to explore
                <Arrow down />
              </a>
            </div>
          </section>

          <section className={styles.signal} id="signal" aria-label="Career highlights">
            <div className={styles.signalIntro}>
              <span>Proof, not promises</span>
              <p>
                Production experience measured in real users, stable releases, and stronger
                teams.
              </p>
            </div>
            <div className={styles.metric}>
              <strong>4+</strong>
              <span>years shipping products</span>
            </div>
            <div className={styles.metric}>
              <strong>500K+</strong>
              <span>users reached</span>
            </div>
            <div className={styles.metric}>
              <strong>95%+</strong>
              <span>release stability</span>
            </div>
            <div className={styles.metric}>
              <strong>2</strong>
              <span>engineers mentored</span>
            </div>
          </section>

          <section className={styles.statement} aria-label="Engineering philosophy">
            <span className={styles.verticalLabel}>Design × Engineering</span>
            <p>
              I bridge the gap between a polished interface and{" "}
              <em>the system that makes it reliable.</em>
            </p>
            <div className={styles.statementNote}>
              <span>01 — Perspective</span>
              <p>
                Good software should feel obvious to use—even when the engineering behind
                it is anything but.
              </p>
            </div>
          </section>

          <section className={styles.section} id="work" aria-labelledby="work-title">
            <div className={styles.sectionHead}>
              <div>
                <span className={styles.kicker}>02 / Selected work</span>
                <h2 id="work-title">
                  Complex underneath.
                  <br />
                  <em>Effortless on the surface.</em>
                </h2>
              </div>
              <p>
                Selected products across AI, healthcare, and mobile—built around high-signal
                interfaces and dependable application architecture.
              </p>
            </div>

            <div className={styles.projectList}>
              {projects.map((project) => (
                <article
                  className={`${styles.projectCard} ${styles[project.tone]}`}
                  key={project.name}
                >
                  <div className={styles.projectIndex}>
                    <span>{project.index}</span>
                    <small>{project.type}</small>
                  </div>
                  <div className={styles.projectMain}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <strong>{project.outcome}</strong>
                    <ul aria-label={`${project.name} technologies`}>
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.projectOrb} aria-hidden="true">
                    <span>{project.name.slice(0, 2).toUpperCase()}</span>
                    <i />
                    <i />
                  </div>
                  {project.href ? (
                    <a
                      className={styles.projectLink}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.linkLabel} (opens in a new tab)`}
                    >
                      {project.linkLabel}
                      <Arrow />
                    </a>
                  ) : (
                    <span className={styles.projectLink}>
                      {project.linkLabel}
                      <span className={styles.storeDot} />
                    </span>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.experienceSection}`}
            id="experience"
            aria-labelledby="experience-title"
          >
            <div className={styles.sectionHead}>
              <div>
                <span className={styles.kicker}>03 / Experience</span>
                <h2 id="experience-title">
                  Building. Shipping.
                  <br />
                  <em>Raising the bar.</em>
                </h2>
              </div>
              <p>
                Four years working across product delivery, architecture, performance,
                quality, and mentorship.
              </p>
            </div>

            <div className={styles.timeline}>
              {experiences.map((experience, index) => (
                <article className={styles.timelineItem} key={experience.company}>
                  <div className={styles.timelineNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className={styles.timelinePeriod}>{experience.period}</div>
                  <div className={styles.timelineRole}>
                    <h3>{experience.company}</h3>
                    <span>{experience.role}</span>
                    <p>{experience.summary}</p>
                  </div>
                  <ul>
                    {experience.proof.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.capabilitySection}`}
            id="capabilities"
            aria-labelledby="capabilities-title"
          >
            <div className={styles.sectionHead}>
              <div>
                <span className={styles.kicker}>04 / Capabilities</span>
                <h2 id="capabilities-title">
                  Full-stack range.
                  <br />
                  <em>Product-minded depth.</em>
                </h2>
              </div>
              <p>
                The tools change. The goal does not: understand the problem, build the right
                system, and make every interaction count.
              </p>
            </div>

            <div className={styles.capabilityGrid}>
              {capabilities.map((capability) => (
                <article className={styles.capabilityCard} key={capability.title}>
                  <div>
                    <span>{capability.number}</span>
                    <i />
                  </div>
                  <h3>{capability.title}</h3>
                  <p>{capability.copy}</p>
                  <ul>
                    {capability.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className={styles.toolRail} aria-label="Additional tools and practices">
              <span>Design systems</span>
              <i>✦</i>
              <span>Accessibility</span>
              <i>✦</i>
              <span>Performance</span>
              <i>✦</i>
              <span>Testing</span>
              <i>✦</i>
              <span>CI/CD</span>
              <i>✦</i>
              <span>Mentorship</span>
            </div>
          </section>

          <section className={styles.contact} id="contact" aria-labelledby="contact-title">
            <span className={styles.kicker}>05 / Start a conversation</span>
            <h2 id="contact-title">
              Have a hard problem?
              <br />
              <em>Let&apos;s make it feel simple.</em>
            </h2>
            <p>
              I&apos;m open to product engineering roles and collaborations where thoughtful
              interfaces meet serious technical challenges.
            </p>
            <div className={styles.contactActions}>
              <a className={styles.contactButton} href="mailto:khaqanaamir92@gmail.com">
                khaqanaamir92@gmail.com
                <Arrow />
              </a>
              <a
                className={styles.socialButton}
                href="https://www.linkedin.com/in/khaqan-aamir-9a9469210/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <a className={styles.brand} href="#top" aria-label="Back to the top">
            <span className={styles.brandMark}>K/A</span>
            <span>
              <strong>Khaqan Aamir</strong>
            </span>
          </a>
          <p></p>
          <a className={styles.backTop} href="#top">
            Back to top
            <Arrow />
          </a>
        </footer>
      </div>
    </>
  );
}
