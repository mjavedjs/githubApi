import { useState, useEffect } from "react";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav
      style={{
        backgroundColor: darkMode ? "#1a202c" : "#ffffff",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "16px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* GitHub Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "20px",
            fontWeight: "bold",
            color: darkMode ? "#ffffff" : "#1a202c",
            textDecoration: "none",
          }}
        >
          <FaGithub style={{ fontSize: "24px", marginRight: "8px" }} />
          GitHub Jsx
        </a>

     

        {/* Navigation Links */}
        <ul
          style={{
            display: "flex",
            gap: "24px",
            listStyleType: "none",
          }}
        >
          {["Pull Requests", "Issues", "Marketplace", "Explore"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href="#"
                  style={{
                    color: darkMode ? "#ffffff" : "#1a202c",
                    textDecoration: "none",
                    fontSize: "16px",
                  }}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "8px",
            borderRadius: "50%",
            backgroundColor: darkMode ? "#2d3748" : "#e2e8f0",
            border: "none",
            cursor: "pointer",
          }}
        >
          {darkMode ? (
            <FaSun style={{ color: "#facc15" }} />
          ) : (
            <FaMoon style={{ color: "#1a202c" }} />
          )}
        </button>
      </div>
    </nav>
  );
}
