import "../styles/About.css";
import AboutBox from "./AboutBox";
import html from "../assets/images/html.webp";
import briefcase from "../assets/images/briefcase.webp";
import user from "../assets/images/user.webp";

export default function About() {
  return (
    <section className="about-section" id="about">
      <h1 className="about-heading">About Me</h1>

      <div className="about-container">

        <div className="about-content">
          <p className="role">Passionate Web Developer</p>

          <p className="content">
            I’m a fast-learning MERN stack developer with expertise in both front-end development using React and back-end services with Node.js, Express, and MongoDB. I thrive in collaborative environments and enjoy solving real-world challenges with clean, efficient, and scalable solutions.
            <br /><br />
            My goal is to build user-friendly, performance-optimized web applications that combine seamless UI/UX with modern development best practices.
            <br /><br />
            Whether it’s designing intuitive interfaces, building robust APIs, or optimizing performance, I’m dedicated to delivering high-quality results while continuously learning, adapting, and improving my craft.
          </p>

          <div className="about-buttons">
            <button className="btnGetInTouch">Get in Touch</button>

            <a
              className="btnResume"
              href="/assets/Muhammad_Zeeshan_Haider_Resume.pdf"
              download="Muhammad_Zeeshan_Haider_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Resume
            </a>
          </div>
        </div>

        {/* About Boxes */}
        <div className="about-boxes">
          <AboutBox
            image={html}
            title="Web Development"
            description="Developing modern, full-stack web applications with a focus on performance, scalability, and user accessibility."
          />
          <AboutBox
            image={briefcase}
            title="UI/UX Design"
            description="Crafting clean, user-centered interfaces that balance aesthetics with usability to deliver smooth user experiences."
          />
          <AboutBox
            image={user}
            title="Project Management"
            description="Managing and delivering end-to-end solutions using agile workflows, from ideation and design to deployment and iteration."
          />
        </div>
      </div>
    </section>
  );
}
