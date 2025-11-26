import "../styles/Portfolio.css";
import ProjectBox from "./ProjectBox";

import img1 from "../assets/projects/project1.webp";
import img2 from "../assets/projects/project2.webp";
import img3 from "../assets/projects/project3.webp";
import img4 from "../assets/projects/project4.webp";
import img6 from "../assets/projects/project6.webp"


const projects = [
  {
    image: img6,
    title: "Uptime Pulse",
    skills: [
      "Next Js", "Shadcn-UI", "Tailwind", "Node Js",
      "MongoDB", "JWT", "Rest Apis", "node-cron"
    ],
    description:
      "Built a URL uptime tracker with 5-minute automated pings, live status updates, secure dashboard access, and full CRUD control for monitored endpoints.",
    link: "https://uptime-pulse-zeeshan.vercel.app/",
  },
  {
    image: img4,
    title: "Expense Tracker",
    skills: [
      "React Js", "Tailwind", "Firebase", "react-icon",
      "TypeScript", "localStorage", "auth", "vercel"
    ],
    description:
      "Built a responsive expense tracker with Firebase auth, real-time updates, budget control, and intuitive UI using React, TypeScript, and Tailwind CSS.",
    link: "https://expense-tracker-firebase-eosin.vercel.app/",
  },
  {
    image: img1,
    title: "Image Format Converter",
    skills: [
      "React Js", "Node Js", "Express", "Sharp",
      "Multer", "Render", "Cors", "CSS"
    ],
    description:
      "Built a web app for image format conversion with real-time processing, secure file upload, downloads, and error handling.",
    link: "https://image-converter-tkkn.onrender.com/",
  },
  {
    image: img2,
    title: "Coffee Bean Shop",
    skills: ["React Js", "CSS", "AOS", "Bootstrap", "figma"],
    description:
      "Built an animated coffee shop website with React and CSS, featuring smooth UI, interactive user experience, and modern design aesthetics.",
    link: "https://bean-scene-xi.vercel.app/",
  },
  {
    image: img3,
    title: "E-Commerce Website",
    skills: ["HTML", "CSS", "JavaScript", "JSON", "Bootstrap"],
    description:
      "Built a responsive e-commerce site with filtering, LocalStorage data handling, and WhatsApp/email order messaging using HTML, CSS, JS, and JSON.",
    link: "https://kasana-watches.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section className="project-section">
      <h1 className="portfolio-heading">Portfolio</h1>

      <div className="project-container">
        {projects.map((project, index) => (
          <ProjectBox
            key={index}
            image={project.image}
            title={project.title}
            skills={project.skills}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
