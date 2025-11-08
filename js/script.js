document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const toggle = document.getElementById("menuToggle");
  const links = document.querySelectorAll(".nav-links a");
  const logo = document.querySelector("header h1");
  const nav = document.querySelector(".nav");

  // --- Toggle mobile nav ---
  if (toggle && header && nav) {
    const closeMenu = () => {
      header.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      nav.style.transform = "translateX(100%)";
      nav.style.opacity = "0";
    };

    const openMenu = () => {
      header.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
      nav.style.transform = "translateX(0)";
      nav.style.opacity = "1";
    };

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = header.classList.contains("open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu if clicking outside nav or header
    document.addEventListener("click", (event) => {
      if (header.classList.contains("open")) {
        const isClickInside = header.contains(event.target) || nav.contains(event.target);
        if (!isClickInside) {
          closeMenu();
        }
      }
    });

    // Close menu when clicking a nav link
    links.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Close menu with ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  // --- Make header title clickable to go home ---
  if (logo) {
    logo.style.cursor = "pointer";
    logo.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  console.log("Broadhead Buddy site initialized");
});