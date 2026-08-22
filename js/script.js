// ================================
// PORTFOLIO JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // MOBILE NAVBAR
    // ================================

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {

            if (navbarCollapse.classList.contains("show")) {
                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }

        });
    });


    // ================================
    // ACTIVE NAVIGATION
    // ================================

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    });


    // ================================
    // SCROLL REVEAL ANIMATION
    // ================================

    const animatedElements = document.querySelectorAll(
        ".skill-card, .project-card, .service-card, .about-box > div"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach(function (element) {
        element.classList.add("scroll-hidden");
        observer.observe(element);
    });

});