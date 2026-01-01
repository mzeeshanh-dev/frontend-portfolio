import React, { useState, useEffect } from "react";
import "../styles/Portfolio.css";
import ProjectBox from "./ProjectBox";
import ProjectSkeleton from "./ProjectSkeleton";

import img1 from "../assets/projects/project1.webp";
import img2 from "../assets/projects/project2.webp";
import img3 from "../assets/projects/project3.webp";
import img4 from "../assets/projects/project4.webp";
import img6 from "../assets/projects/project6.webp";
import img7 from "../assets/projects/project7.webp";

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
    codeLink: "https://github.com/mzeeshanh-dev/UptimePulse",
  },
  {
    image: img7,
    title: "DriveX",
    skills: [
      "React Js", "Framer", "Tailwind", "Node Js",
      "Express", "Cloudinary", "MongoDB", "Mongoose"
    ],
    description:
      "Built a full-stack car rental platform with dynamic car listings, seamless booking flow, secure admin dashboard, and complete CRUD control for cars, bookings, and earnings management.",
    link: "https://drive-x-git.vercel.app/",
    codeLink: "https://github.com/mzeeshanh-dev/driveX-Frontend/",
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
    codeLink: "https://github.com/mzeeshanh-dev/expense-tracker-firebase",
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
    codeLink: "https://github.com/mzeeshanh-dev/image-converter",
  },
  {
    image: img2,
    title: "New Year Vibes",
    skills: ["React Js", "CSS", "canvas-confetti", "react-snowfall", "Vercel Analytics", "Vite"],
    description:
      "A modern New Year countdown app with React, featuring live countdown to January 1, 2026, snowfall animation, fullscreen mode, confetti celebration, and responsive glassmorphism UI.",
    link: "https://newyearvibes.vercel.app/",
    codeLink: "https://github.com/mzeeshanh-dev/newyearvibes",
  }
  ,
  {
    image: img3,
    title: "E-Commerce Website",
    skills: ["HTML", "CSS", "JavaScript", "JSON", "Bootstrap"],
    description:
      "Built a responsive e-commerce site with filtering, LocalStorage data handling, and WhatsApp/email order messaging using HTML, CSS, JS, and JSON.",
    link: "https://kasana-watches.vercel.app/",
    codeLink: "https://github.com/mzeeshanh-dev/eccomerce",
  },
];

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This simulates the time it takes for images/data to load
    // 2500ms (2.5 seconds) is usually the sweet spot for a smooth feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="project-section">
      <h1 className="portfolio-heading">Portfolio</h1>

      <div className="project-container">
        {loading
          ?
          Array(6)
            .fill(0)
            .map((_, index) => <ProjectSkeleton key={`skeleton-${index}`} />)
          :
          projects.map((project, index) => (
            <ProjectBox
              key={index}
              image={project.image}
              title={project.title}
              skills={project.skills}
              description={project.description}
              link={project.link}
              codeLink={project.codeLink}
            />
          ))}
      </div>
    </section>
  );
}