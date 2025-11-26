import "../styles/HeroSection.css";
import linkedin from "../assets/images/linkedin.webp";
import instagram from "../assets/images/instagram.webp";
import fiverr from "../assets/images/fiverr.webp";
import github from "../assets/images/github.webp";
import BlogImage from "../assets/images/Blob-Image.webp";
import arrow from "../assets/images/arrow.webp";
import TypingAnimation from "../components/TypingAnimation";

export default function HeroSection() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/m-zeeshan-haider-606bb3284/",
      img: linkedin,
      alt: "LinkedIn",
      title: "LinkedIn profile",
    },
    {
      href: "https://github.com/mzeeshanh-dev/",
      img: github,
      alt: "GitHub",
      title: "GitHub profile",
    },
    {
      href: "https://www.instagram.com/zh012948",
      img: instagram,
      alt: "Instagram",
      title: "Instagram profile",
    },
    {
      href: "https://www.fiverr.com/s/1qpNyak",
      img: fiverr,
      alt: "Fiverr",
      title: "Fiverr profile",
    },
  ];

  return (
    <section className="hero-section">
      {/* Social Icons */}
      <div className="social-icons">
        {socialLinks.map(({ href, img, alt, title }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
          >
            <img src={img} alt={alt} title={title} loading="lazy" />
          </a>
        ))}
      </div>

      {/* Hero Container */}
      <div className="hero-container">
        {/* Text Content */}
        <div className="content-container">
          <p className="hello-text">Hello, I'm</p>
          <p className="name-animation">M. Zeeshan Haider</p>
          <div className="job-title">
            <TypingAnimation />
          </div>
          <p className="briefing">
            Strong expertise in full-stack MERN dev. Building scalable,
            responsive, and user-friendly web applications from frontend to backend.
          </p>
          <div className="btnContact">
            <a href="#contact">
              Contact Me <img src={arrow} alt="arrow icon" loading="lazy" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="blob-image">
          <img
            src={BlogImage}
            alt="Profile"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
