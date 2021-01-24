    // Parallax Effect
    parallax = (element, distance, speed) => {
        const item = document.querySelector(element);
        item.style.transform = `translateY(${distance * speed}px)`;
    }

    window.addEventListener("scroll", () => {
        parallax(".header-img", window.scrollY, 0.5);
        parallax(".header-text", window.scrollY, 0.6)
    });