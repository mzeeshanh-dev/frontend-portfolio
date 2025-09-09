import { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hideNavbar, setHideNavbar] = useState(false);

  const canvasRef = useRef(null);
  const lastScrollY = useRef(0);
  const navbarHeight = 60;

  // 🎨 Star Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let stars = [];
    let gradient;
    let animationFrameId;

    const createGradient = (w, h) => {
      const g = ctx.createLinearGradient(0, 0, w, h);
      if (darkMode) {
        g.addColorStop(0, "#0a0c1f");
        g.addColorStop(0.5, "#191627");
        g.addColorStop(1, "#2c1a3d");
      } else {
        g.addColorStop(0, "#ffffff");
        g.addColorStop(1, "#f0f0f0");
      }
      return g;
    };

    const generateStars = (count, w, h) =>
      Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.5,
        alpha: Math.random() * 0.5 + 0.2,
      }));

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.fill();
      });
    };

    const twinkle = () => {
      stars.forEach((s) => (s.alpha = Math.random() * 0.5 + 0.2));
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight + navbarHeight;
      gradient = createGradient(canvas.width, canvas.height);
      stars = generateStars(200, canvas.width, canvas.height);
      drawStars();
    };

    const animate = () => {
      twinkle(); // Instant update for smoother toggle
      drawStars();
      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  // 🌗 Apply Dark Mode Styles Instantly
  useEffect(() => {
    const bg = darkMode ? "transparent" : "#fff";
    const color = darkMode ? "#fff" : "#000";
    document.body.style.backgroundColor = bg;
    document.body.style.color = color;
    document.documentElement.style.backgroundColor = bg;
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  // 📜 Hide Navbar on Scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHideNavbar(y > lastScrollY.current && y > 50);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🎯 Nav Items
  const navItems = [
    { icon: "bx-home-circle", label: "Home", to: "#home" },
    { icon: "bx-user-circle", label: "About", to: "#about" },
    { icon: "bx-file", label: "Skills", to: "#skills" },
    { icon: "bx-briefcase-alt-2", label: "Services", to: "#services" },
    { icon: "bx-image", label: "Portfolio", to: "#portfolio" },
    { icon: "bx-send", label: "Contact Me", to: "#contact" },
  ];

  const navbarBg = darkMode ? "rgba(25,22,39,0.8)" : "#fff";
  const linkColor = darkMode ? "#fff" : "#191627";
  const hoverColor = "#6E57E0";

  return (
    <>
      <canvas ref={canvasRef} className="star-canvas" />
      <div
        className={`navbar ${darkMode ? "dark-mode" : ""} ${
          hideNavbar ? "hidden" : ""
        }`}
        style={{
          backgroundColor: navbarBg,
          borderTop: `1px solid ${darkMode ? "#444" : "#ccc"}`,
          height: `${navbarHeight}px`,
          transition: "background-color 0.3s ease, transform 0.3s ease",
        }}
      >
        {/* Logo */}
        <div className="logo">Zeeshan</div>

        {/* Nav Links */}
        <div
          className={`navlinks ${menuOpen ? "active" : ""} ${
            darkMode ? "dark-mode" : ""
          }`}
          style={{ backgroundColor: navbarBg, transition: "0.3s ease" }}
        >
          <ul>
            {navItems.map(({ icon, label, to }, i) => (
              <li key={i}>
                <a
                  href={to}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: hoveredIndex === i ? hoverColor : linkColor,
                    transition: "color 0.2s ease",
                  }}
                >
                  <i
                    className={`bx ${icon}`}
                    style={{
                      fontSize: 24,
                      color: hoveredIndex === i ? hoverColor : linkColor,
                      transition: "color 0.2s ease",
                    }}
                  ></i>
                  <br />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Icons */}
        <div className="icons">
          <div className="display-mode" onClick={() => setDarkMode(!darkMode)}>
            <i
              className={`bx ${darkMode ? "bx-moon" : "bxs-sun"}`}
              style={{ color: darkMode ? "#fff" : "#6E57E0" }}
            ></i>
          </div>

          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`bx ${menuOpen ? "bx-x" : "bx-grid"}`}></i>
          </div>
        </div>
      </div>
    </>
  );
}
