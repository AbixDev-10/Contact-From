import ContactForm from "./components/ContactForm";

const socialLinks = {
  github: "https://github.com/your-github-username",
  linkedin: "https://www.linkedin.com/in/your-linkedin-username"
};

function SocialIcon({ href, label, children }) {
  return (
    <a
      className="social-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <span className="brand__badge">AS</span>
        <div>
          <p className="brand__title">Abishek S</p>
          <p className="brand__subtitle">Contact</p>
        </div>
      </div>

      <nav className="navbar__links">
        <a href="#contact">Contact</a>
        <div className="navbar__socials">
          <SocialIcon href={socialLinks.github} label="GitHub profile">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.699-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.092-.647.349-1.088.635-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.857 0 1.34-.012 2.421-.012 2.751 0 .269.18.58.688.481A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z"
                fill="currentColor"
              />
            </svg>
          </SocialIcon>

          <SocialIcon href={socialLinks.linkedin} label="LinkedIn profile">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-7.28H5.92v7.28h2.42ZM7.13 10.06c.77 0 1.4-.64 1.4-1.43 0-.79-.63-1.43-1.4-1.43-.78 0-1.41.64-1.41 1.43 0 .79.63 1.43 1.41 1.43Zm11.21 8.28v-4.16c0-2.23-1.19-3.27-2.77-3.27-1.28 0-1.85.7-2.17 1.19v-1.02h-2.42c.03.68 0 7.26 0 7.26h2.42v-4.05c0-.22.02-.43.08-.59.17-.43.56-.88 1.22-.88.86 0 1.21.66 1.21 1.62v3.9h2.43Z"
                fill="currentColor"
              />
            </svg>
          </SocialIcon>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>Let&apos;s connect and build something useful together.</p>

      <div className="footer__socials">
        <SocialIcon href={socialLinks.github} label="GitHub profile">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.699-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.092-.647.349-1.088.635-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.857 0 1.34-.012 2.421-.012 2.751 0 .269.18.58.688.481A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z"
              fill="currentColor"
            />
          </svg>
        </SocialIcon>

        <SocialIcon href={socialLinks.linkedin} label="LinkedIn profile">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-7.28H5.92v7.28h2.42ZM7.13 10.06c.77 0 1.4-.64 1.4-1.43 0-.79-.63-1.43-1.4-1.43-.78 0-1.41.64-1.41 1.43 0 .79.63 1.43 1.41 1.43Zm11.21 8.28v-4.16c0-2.23-1.19-3.27-2.77-3.27-1.28 0-1.85.7-2.17 1.19v-1.02h-2.42c.03.68 0 7.26 0 7.26h2.42v-4.05c0-.22.02-.43.08-.59.17-.43.56-.88 1.22-.88.86 0 1.21.66 1.21 1.62v3.9h2.43Z"
              fill="currentColor"
            />
          </svg>
        </SocialIcon>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="app">
        <section className="hero" id="home">
          <div className="hero__content">
            <h1 className="hero__title">Contact Me</h1>
            <p className="hero__text">
              Use the form below to send your message directly to my email.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
