import { useEffect, useState } from "react";
import {
  ArrowRight, CheckCircle2, Cloud, Code2, Container, Download,
  Github, Linkedin, Mail, Menu, Server, ShieldCheck, Terminal,
  X, MapPin, Phone, Send, ExternalLink
} from "lucide-react";
import "./styles.css";

const skills = [
  {
    icon: Cloud, number: "01", title: "AWS Cloud",
    text: "EC2, S3, VPC, IAM, CloudWatch, SNS, RDS, EBS, AMI, CloudFront, Security Groups, Elastic IP.",
    tags: ["EC2", "S3", "VPC", "IAM", "CloudWatch"]
  },
  {
    icon: Container, number: "02", title: "DevOps & Deployment",
    text: "Docker, Git, GitHub, CI/CD basics, Terraform, Jenkins, Kubernetes, application deployment and Bash.",
    tags: ["Docker", "Git", "CI/CD", "Terraform", "Jenkins"]
  },
  {
    icon: Terminal, number: "03", title: "Linux & Cloud Support",
    text: "Linux administration, permissions, processes, services, disk management, networking and troubleshooting.",
    tags: ["Linux", "Networking", "Monitoring", "Troubleshooting"]
  },
  {
    icon: Code2, number: "04", title: "Software Engineering",
    text: "Java, Spring Boot, REST APIs, MySQL, JWT, React.js, JavaScript, HTML, CSS and responsive web development.",
    tags: ["Java", "Spring Boot", "React", "MySQL", "REST"]
  }
];

const projects = [
  {
    category: "AWS / DevOps", date: "2026", featured: true,
    title: "Java Spring Boot Application Deployment on AWS EC2",
    text: "Built a RESTful Spring Boot backend with MySQL, containerized it with Docker, and deployed it on an AWS EC2 Linux instance with VPC and Security Group configuration.",
    tags: ["Java", "Spring Boot", "Docker", "EC2", "VPC", "Linux"]
  },
  {
    category: "AWS", date: "May 2026",
    title: "AWS Static Website Hosting & Content Delivery",
    text: "Designed and deployed a static website using Amazon S3 and configured CloudFront for content delivery, with IAM and bucket policy access controls.",
    tags: ["S3", "CloudFront", "IAM", "HTML", "CSS"]
  },
  {
    category: "Monitoring", date: "June 2026",
    title: "AWS Cloud Infrastructure Monitoring & Alerting",
    text: "Monitored EC2 infrastructure with CloudWatch, created CPU utilization alarms and configured SNS notifications for threshold-based alerts.",
    tags: ["EC2", "CloudWatch", "SNS", "IAM", "Linux"]
  },
  {
    category: "Full Stack", date: "2025",
    title: "Java Full Stack Billing Application",
    text: "Developed a billing application using Spring Boot, REST APIs, React.js and MySQL, including customer, product, billing and transaction operations.",
    tags: ["Spring Boot", "React", "MySQL", "REST API"]
  }
];

const trainings = [
  ["AWS Cloud Training", "2026", "Cloud fundamentals, EC2, S3, VPC, IAM, CloudWatch, RDS, EBS & infrastructure"],
  ["Java Full Stack Developer — IT Vedant", "Feb 2025 — Aug 2025", "Java, Spring Boot, REST APIs, SQL and web development"],
  ["IBM Training", "Training", "Java Programming, SQL Fundamentals and Web Designing"],
  ["TCS iON Career Edge — Young Professional", "Training", "Professional skills and career development"]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="header">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}><span>KR</span>Karan Ranawade</a>
          <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <div className={`navLinks ${menuOpen ? "open" : ""}`}>
            {["about", "skills", "experience", "projects", "education", "contact"].map((id) =>
              <a key={id} href={`#${id}`} onClick={closeMenu}>{id[0].toUpperCase() + id.slice(1)}</a>
            )}
            <a className="navCta" href="#contact" onClick={closeMenu}>Let's Talk</a>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="hero section">
          <div className="container heroGrid">
            <div className="heroCopy reveal">
              <p className="eyebrow"><span className="statusDot" /> Open to immediate joining *****</p>
              <h1>Cloud. DevOps.<br /><em>Software Engineering.</em></h1>
              <p className="heroText">
                AWS Cloud and Cloud Support focused engineer with practical experience in
                Linux, Docker, networking, security, monitoring and application deployment.
              </p>
              <div className="actions">
                <a className="button primary" href="#contact">Let's Connect <ArrowRight size={17} /></a>
                <a className="button secondary" href="/Karan_Ranawade_Resume.pdf" download>
                  <Download size={17} /> Download Resume
                </a>
              </div>
              <div className="heroMeta">
                <a href="mailto:karanranawade54@gmail.com"><Mail size={14}/> karanranawade54@gmail.com</a>
                <span>•</span><span><MapPin size={14}/> Pune, Maharashtra, India</span>
              </div>
            </div>

            <div className="portraitWrap reveal">
              <div className="portraitGlow" />
              <div className="portrait">
                <img src="/profile.png" alt="Professional portrait of Karan Ranawade" />
              </div>
              <div className="floating">
                <Cloud size={23} />
                <div><strong>AWS Cloud</strong><small>Cloud • DevOps • Support</small></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section soft">
          <div className="container twoCol">
            <div className="sectionHead reveal">
              <p className="eyebrow">01 / About</p>
              <h2>Building reliable systems with a <em>cloud-first mindset.</em></h2>
            </div>
            <div className="aboutText reveal">
              <p>I work across AWS infrastructure, Linux administration, application deployment, monitoring, troubleshooting and backend development. I enjoy understanding how applications move from code to a reliable running service.</p>
              <p>My practical work includes Dockerized Spring Boot deployment on AWS EC2, static website hosting with S3 and CloudFront, and CloudWatch monitoring with SNS alerting.</p>
              <div className="stats">
                {[
                  ["AWS", "Cloud Infrastructure"], ["Linux", "Administration & Support"],
                  ["Docker", "Containers & Deployment"], ["Java", "Spring Boot & REST APIs"]
                ].map(([a,b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="sectionHead center reveal">
              <p className="eyebrow">02 / Technical Skills</p>
              <h2>Tools I use to <em>build & support.</em></h2>
            </div>
            <div className="skillGrid">
              {skills.map(({icon: Icon, number, title, text, tags}) =>
                <article className="skillCard reveal" key={title}>
                  <div className="skillTop"><span>{number}</span><Icon size={22}/></div>
                  <h3>{title}</h3><p>{text}</p>
                  <div className="tags">{tags.map(t => <span key={t}>{t}</span>)}</div>
                </article>
              )}
            </div>
          </div>
        </section>

        <section id="experience" className="section soft">
          <div className="container">
            <div className="sectionHead reveal"><p className="eyebrow">03 / Experience</p><h2>Professional <em>experience.</em></h2></div>
            <div className="timeline reveal">
              <div className="date">May 2026 — Present</div>
              <div className="line"><i /></div>
              <div className="timelineBody">
                <h3>Associate II — Operations</h3><p className="company">Mervice Infotech Pvt. Ltd. · Pune</p>
                <ul>
                  <li>Manage daily operational activities and coordinate with internal teams.</li>
                  <li>Handle application-related processes, issue tracking, reporting and operational workflows.</li>
                  <li>Monitor assigned activities and maintain accurate records and daily reports.</li>
                  <li>Identify operational issues and coordinate with relevant teams for timely resolution.</li>
                  <li>Maintain process documentation and communicate with cross-functional teams.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="sectionHead center reveal"><p className="eyebrow">04 / Projects</p><h2>Practical work, from <em>code to cloud.</em></h2></div>
            <div className="projectGrid">
              {projects.map((p) =>
                <article className={`projectCard reveal ${p.featured ? "featured" : ""}`} key={p.title}>
                  <div className="projectTop"><span>{p.category}</span><span>{p.date}</span></div>
                  <h3>{p.title}</h3><p>{p.text}</p>
                  <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                </article>
              )}
            </div>
          </div>
        </section>

        <section id="education" className="section soft">
          <div className="container twoCol">
            <div>
              <div className="sectionHead reveal"><p className="eyebrow">05 / Education</p><h2>Education & <em>training.</em></h2></div>
              <div className="education reveal">
                <div><span>2022 — 2025</span><h3>BBA (Computer Application)</h3><p>ISB&M College of Commerce · CGPA 6.75 / Grade A · Pune</p></div>
                <div><span>2020 — 2022</span><h3>HSC — Commerce with Computer Science</h3><p>Lokseva E-School & Junior College · Pune</p></div>
              </div>
            </div>
            <div className="training reveal">
              <p className="eyebrow">Certifications & Training</p>
              {trainings.map(([a,b,c]) => <div className="trainingRow" key={a}><strong>{a}</strong><span>{b}</span><small>{c}</small></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contactGrid">
            <div className="contactCopy reveal">
              <p className="eyebrow">06 / Contact</p>
              <h2>Let's build something <em>reliable.</em></h2>
              <p>Open to AWS Cloud Engineer, Cloud Support Engineer, DevOps Engineer, Cloud Engineering, Application Support and related software roles. Available for immediate joining.</p>
              <div className="contactList">
                <a href="mailto:karanranawade54@gmail.com"><Mail/><span><b>Email</b>karanranawade54@gmail.com</span></a>
                <a href="tel:+918888371073"><Phone/><span><b>Phone</b>+91 88883 71073</span></a>
                <a href="https://www.linkedin.com/in/karan-ranawade" target="_blank" rel="noreferrer"><Linkedin/><span><b>LinkedIn</b>linkedin.com/in/karan-ranawade</span><ExternalLink/></a>
                <a href="https://github.com/karanranawade13" target="_blank" rel="noreferrer"><Github/><span><b>GitHub</b>github.com/karanranawade13</span><ExternalLink/></a>
              </div>
            </div>

            <form className="contactForm reveal"
              action="https://formsubmit.co/karanranawade54@gmail.com"
              method="POST"
              onSubmit={() => setSent(true)}>
              <input type="hidden" name="_subject" value="New Portfolio Contact — Karan Ranawade" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <label>Name<input name="name" required placeholder="Your name" /></label>
              <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
              <label>Subject<input name="subject" required placeholder="Job opportunity / Collaboration / Message" /></label>
              <label>Message<textarea name="message" rows="6" required placeholder="Write your message..." /></label>
              <button className="button primary send" type="submit"><Send size={17}/> Send Message</button>
              {sent && <p className="formSuccess"><CheckCircle2 size={15}/> Opening secure email form…</p>}
              <small className="formNote">Messages are routed to Karan's email using FormSubmit. The first submission may require one-time email activation.</small>
            </form>
          </div>
        </section>
      </main>

      <footer><div className="container footerInner"><span>© {new Date().getFullYear()} Karan Ranawade</span><span>AWS Cloud • DevOps • Software Engineering</span><a href="#home">Back to top ↑</a></div></footer>
    </div>
  );
}

export default App;
