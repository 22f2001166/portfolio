import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(section);
        }
      }

      if (window.scrollY < 100) {
        setActive("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-white/10 shadow-lg rounded-full px-4 sm:px-6 md:px-10 py-2 sm:py-3 z-50">
      <nav className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-10 text-sm sm:text-base">
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <a
          key={section}
          onClick={(e) => {
            e.preventDefault();
            setActive(section);
            const el = document.getElementById(section);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={`cursor-pointer font-medium transition duration-300 ${
            active === section ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
          }`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
        ))}
      </nav>
    </div>
  );
}
