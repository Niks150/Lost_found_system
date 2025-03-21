
// Function to load login.html into the modal
function openLoginModal() {
    const modal = document.getElementById('login-modal');
    const modalBody = document.getElementById('modal-body');

    // Load login.html content
    fetch('login.html')
        .then(response => response.text())
        .then(data => {
            modalBody.innerHTML = data;
            modal.style.display = 'flex';
        })
        .catch(err => console.error('Error loading login.html:', err));
}

// Close the modal
function closeModal() {
    const modal = document.getElementById('login-modal');
    modal.style.display = 'none';
}

// Attach event listeners to images
document.querySelectorAll('.image').forEach(image => {
    image.addEventListener('click', (e) => {
        e.preventDefault();
        openLoginModal();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image");

    images.forEach(image => {
        image.addEventListener("click", function () {
            window.location.href = "buy_sell.html";
        });
    });
});


/*Scroll effect using GSAP*/
// First, import ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Initialize GSAP animations for charts
    gsap.from(".charts", {
        opacity: 0,
        duration: 1,
        y: 50,
        ease: "power2.out"
    });

    // Animate main container from left
    gsap.from(".box-container-main", {
        scrollTrigger: {
            trigger: ".box-container-main",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power2.out"
    });

    // Animate second container from right
    gsap.from(".box-container-2", {
        scrollTrigger: {
            trigger: ".box-container-2",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power2.out"
    });

    // Animate third container from left
    gsap.from(".box-container-3", {
        scrollTrigger: {
            trigger: ".box-container-3",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power2.out"
    });

    // Animate box4-5-container
    gsap.from(".box4-5-container", {
        scrollTrigger: {
            trigger: ".box4-5-container",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
    });

    // Animate box-container-4 from left
    gsap.from(".box-container-4", {
        scrollTrigger: {
            trigger: ".box-container-4",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power2.out"
    });

    // Animate box-container-5 from right
    gsap.from(".box-container-5", {
        scrollTrigger: {
            trigger: ".box-container-5",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power2.out"
    });

    // Animate the image boxes
    gsap.utils.toArray(".box").forEach(box => {
        gsap.from(box, {
            scrollTrigger: {
                trigger: box,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 30,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    // Animate footer
    gsap.from("footer", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 90%",
            end: "top 70%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".feature-box", {
        scrollTrigger: {
            trigger: ".features-container",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Animate statistics with counter effect
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        gsap.from(stat, {
            scrollTrigger: {
                trigger: ".stats-container",
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse"
            },
            textContent: 0,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            stagger: 0.25,
            onUpdate: function () {
                if (stat.textContent.indexOf('%') !== -1) {
                    stat.textContent = Math.round(this.targets()[0].textContent) + '%';
                } else {
                    stat.textContent = Math.round(this.targets()[0].textContent) + '+';
                }
            }
        });
    });

    // Animate testimonials
    gsap.from(".testimonial-box", {
        scrollTrigger: {
            trigger: ".testimonials-container",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
    });

    // Animate info cards
    gsap.from(".info-card", {
        scrollTrigger: {
            trigger: ".info-cards-container",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: index => index % 2 === 0 ? -100 : 100,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
    });
    gsap.from(".category-container", {
        scrollTrigger: {
            trigger: ".category-container",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
    });

    // Animate Category Boxes
    gsap.from(".category-box", {
        scrollTrigger: {
            trigger: ".category-grid",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });

    // Animate Recent Container
    gsap.from(".recent-container", {
        scrollTrigger: {
            trigger: ".recent-container",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power2.out"
    });

    // Animate Recent Boxes
    gsap.from(".recent-box", {
        scrollTrigger: {
            trigger: ".recent-grid",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: index => index % 2 === 0 ? -50 : 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Animate Trending Container
    gsap.from(".trending-container", {
        scrollTrigger: {
            trigger: ".trending-container",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power2.out"
    });

    // Animate Trending Boxes
    gsap.from(".trending-box", {
        scrollTrigger: {
            trigger: ".trending-grid",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });

    const vectorTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".vector-main",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse"
        }
    });

    // Add animations to the timeline
    vectorTimeline
        // Animate the image
        .from(".image-section", {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
        // Animate the main title
        .from(".main-title", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)"
        }, "-=0.5")
        // Animate service sections
        .from(".service-section", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        }, "-=0.3");

    // Add hover animations for service sections
    gsap.utils.toArray(".service-section").forEach(section => {
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            duration: 0.3,
            scale: 1,
            opacity: 1
        });

        // Hover effect
        section.addEventListener("mouseenter", () => {
            gsap.to(section, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        section.addEventListener("mouseleave", () => {
            gsap.to(section, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });

    });
});
function toggleMenu() {
    document.querySelector('.hamburger').classList.toggle('open');
    document.getElementById('sideNav').classList.toggle('open');
}

function toggleDropdown(element) {
    element.parentElement.classList.toggle('active');
    // Prevent the default behavior
    event.preventDefault();
}

// Function to check if the screen is mobile size and update the menu
function checkScreenSize() {
    const mobileBreakpoint = 768;
    if (window.innerWidth <= mobileBreakpoint) {
        // Mobile view - hamburger is already shown by CSS
    } else {
        // Desktop view - make sure side nav is closed
        document.getElementById('sideNav').classList.remove('open');
        document.querySelector('.hamburger').classList.remove('open');
    }
}

// Check screen size on load
window.addEventListener('load', checkScreenSize);
// Check screen size on resize
window.addEventListener('resize', checkScreenSize);