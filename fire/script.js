// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(0, 0, 0, 0.98)";
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.95)";
  }
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Add animation classes to elements
document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in animation to cards
  const cards = document.querySelectorAll(
    ".about-card, .feature-item, .pricing-card, .team-member, .characteristic-item, .certification-card, .roadmap-phase"
  );
  cards.forEach((card) => {
    card.classList.add("fade-in");
    observer.observe(card);
  });

  // Add slide animations to sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    if (index % 2 === 0) {
      section.classList.add("slide-in-left");
    } else {
      section.classList.add("slide-in-right");
    }
    observer.observe(section);
  });

  // Add scale animation to hero content
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.classList.add("scale-in");
    observer.observe(heroContent);
  }
});

// Form handling
const applicationForm = document.getElementById("applicationForm");
if (applicationForm) {
  applicationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Show success message
    showNotification(
      "Application submitted successfully! We will contact you soon.",
      "success"
    );

    // Reset form
    this.reset();

    // In a real application, you would send this data to your server
    console.log("Form data:", data);
  });
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "success" ? "#00ff88" : "#ff6b6b"};
        color: ${type === "success" ? "#000" : "#fff"};
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;

  // Add to page
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Close button functionality
  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.addEventListener("click", () => {
    notification.style.transform = "translateX(400px)";
    setTimeout(() => notification.remove(), 300);
  });

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.transform = "translateX(400px)";
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Counter animation for feature numbers
function animateCounters() {
  const counters = document.querySelectorAll(".feature-number");
  counters.forEach((counter) => {
    const target = parseInt(counter.textContent);
    const increment = target / 100;
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current).toString().padStart(2, "0");
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toString().padStart(2, "0");
      }
    };

    updateCounter();
  });
}

// Trigger counter animation when features section is visible
const featuresSection = document.querySelector(".features");
if (featuresSection) {
  const featuresObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          featuresObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  featuresObserver.observe(featuresSection);
}

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 50);
    }, 1000);
  }
});

// Hover effects for interactive elements
document.addEventListener("DOMContentLoaded", () => {
  // Add hover sound effect (optional)
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-2px) scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0) scale(1)";
    });
  });

  // Add ripple effect to buttons
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

// Add CSS for ripple animation
const style = document.createElement("style");
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Lazy loading for images (if you add real images later)
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
  // Scroll-based animations and effects
}, 10);

window.addEventListener("scroll", debouncedScrollHandler);

// Add loading animation
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Close mobile menu
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

    // Close notifications
    const notifications = document.querySelectorAll(".notification");
    notifications.forEach((notification) => notification.remove());
  }
});

// Accessibility improvements
document.addEventListener("DOMContentLoaded", () => {
  // Add focus indicators
  const focusableElements = document.querySelectorAll(
    "a, button, input, select, textarea"
  );
  focusableElements.forEach((element) => {
    element.addEventListener("focus", () => {
      element.style.outline = "2px solid #00ff88";
      element.style.outlineOffset = "2px";
    });

    element.addEventListener("blur", () => {
      element.style.outline = "none";
    });
  });

  // Add ARIA labels for better screen reader support
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button, index) => {
    if (!button.getAttribute("aria-label")) {
      button.setAttribute("aria-label", button.textContent.trim());
    }
  });
});

// Drone Characteristics Modal System
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("characteristicModal");
  const modalContent = document.getElementById("modalContent");
  const closeBtn = document.querySelector(".close");
  const characteristicBtns = document.querySelectorAll(".characteristic-btn");

  // Characteristic data
  const characteristicData = {
    flight: {
      title: "Flight Performance",
      description:
        "Our advanced drone technology delivers exceptional flight performance with precision control and stability.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video URL
      specs: {
        "Max Speed": "72 km/h",
        "Max Altitude": "4000m",
        "Wind Resistance": "Up to 50 km/h",
        "Flight Time": "45 minutes",
        Range: "10km",
        "Payload Capacity": "2.5kg",
      },
    },
    camera: {
      title: "Advanced Camera System",
      description:
        "Multi-spectral imaging system with thermal detection capabilities for comprehensive fire monitoring.",
      video: "drone-footage.mp4", // Placeholder video URL
      specs: {
        "Thermal Resolution": "640x512",
        "Visible Light": "4K Ultra HD",
        "Zoom Capability": "30x Optical",
        "Night Vision": "Yes",
        "Image Stabilization": "3-axis Gimbal",
        "Data Transmission": "Real-time HD",
      },
    },
    battery: {
      title: "Power & Endurance",
      description:
        "Long-lasting battery technology with quick swap capability for continuous operation.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video URL
      specs: {
        "Battery Type": "LiPo 6S",
        Capacity: "6000mAh",
        Voltage: "22.2V",
        "Charging Time": "90 minutes",
        "Cycle Life": "500+ cycles",
        "Quick Swap": "Yes",
      },
    },
    safety: {
      title: "Safety Features",
      description:
        "Advanced collision avoidance and fail-safe systems ensure safe operation in all conditions.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video URL
      specs: {
        "Obstacle Avoidance": "360° sensors",
        "Return to Home": "GPS + Vision",
        "Emergency Landing": "Automatic",
        "Signal Loss": "Auto return",
        "Low Battery": "Auto landing",
        "Weather Protection": "IP67 rated",
      },
    },
  };

  // Open modal when characteristic button is clicked
  characteristicBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const characteristic = btn.closest(".characteristic-item").dataset
        .characteristic;
      const data = characteristicData[characteristic];

      if (data) {
        modalContent.innerHTML = `
                    <div class="modal-video">
                        <i class="fas fa-play-circle"></i>
                        <span>Video demonstration of ${data.title.toLowerCase()}</span>
                    </div>
                    <div class="modal-details">
                        <h3>${data.title}</h3>
                        <p>${data.description}</p>
                        <div class="modal-specs">
                            <h4>Technical Specifications</h4>
                            <ul>
                                ${Object.entries(data.specs)
                                  .map(
                                    ([key, value]) =>
                                      `<li><span>${key}</span><span class="spec-value">${value}</span></li>`
                                  )
                                  .join("")}
                            </ul>
                        </div>
                    </div>
                `;

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Close modal when close button is clicked
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  }

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});

// Roadmap Timeline Functionality
document.addEventListener("DOMContentLoaded", () => {
  const timelineBtns = document.querySelectorAll(".timeline-btn");
  const roadmapPhases = document.querySelectorAll(".roadmap-phase");

  // Timeline filtering functionality
  timelineBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      timelineBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      const selectedPhase = btn.dataset.phase;

      // Show/hide phases based on selection
      roadmapPhases.forEach((phase) => {
        if (selectedPhase === "all" || phase.dataset.phase === selectedPhase) {
          phase.style.display = "block";
          // Add animation delay for staggered effect
          setTimeout(() => {
            phase.classList.add("visible");
          }, 100);
        } else {
          phase.style.display = "none";
          phase.classList.remove("visible");
        }
      });
    });
  });

  // Initialize roadmap animations
  const roadmapObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  // Observe roadmap phases for animation
  roadmapPhases.forEach((phase) => {
    roadmapObserver.observe(phase);
  });

  // Add hover effects to phase markers
  const phaseMarkers = document.querySelectorAll(".phase-marker");
  phaseMarkers.forEach((marker) => {
    marker.addEventListener("mouseenter", () => {
      marker.querySelector(".marker-icon").style.transform = "scale(1.1)";
      marker.querySelector(".marker-icon").style.boxShadow =
        "0 0 30px rgba(0, 255, 136, 0.5)";
    });

    marker.addEventListener("mouseleave", () => {
      marker.querySelector(".marker-icon").style.transform = "scale(1)";
      marker.querySelector(".marker-icon").style.boxShadow =
        "0 0 20px rgba(0, 255, 136, 0.3)";
    });
  });

  // Add click functionality to phase content for more details
  const phaseContents = document.querySelectorAll(".phase-content");
  phaseContents.forEach((content) => {
    content.addEventListener("click", () => {
      // Add a subtle pulse animation
      content.style.animation = "pulse 0.6s ease";
      setTimeout(() => {
        content.style.animation = "";
      }, 600);
    });
  });
});

console.log("FireGuard AI website loaded successfully! 🚁🔥");

// Operating Principle Animated Line System
document.addEventListener("DOMContentLoaded", () => {
  const operatingLine = document.querySelector(".operating-line");
  const lineSegments = document.querySelectorAll(".line-segment");
  const droneContainer = document.querySelector(".drone-container");
  const drone = document.querySelector(".drone");

  let animationInProgress = false;
  let currentStep = 0;
  let hasPlayedOnce = false;

  // Initialize animation
  function initializeAnimation() {
    lineSegments.forEach((segment) => {
      segment.classList.remove("animate");
    });
    if (droneContainer) droneContainer.classList.remove("visible");
    currentStep = 0;
    animationInProgress = false;
  }

  // Animate line segments sequentially
  async function animateLineSegments() {
    for (let i = 0; i < lineSegments.length; i++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          lineSegments[i].classList.add("animate");
          currentStep = i + 1;
          resolve();
        }, 800);
      });
    }
  }

  // Animate drone flying across the line
  async function animateDrone() {
    if (!droneContainer || !drone) return;

    // Show drone
    droneContainer.classList.add("visible");

    // Animate drone movement
    droneContainer.style.transition = "left 4s cubic-bezier(0.4, 0, 0.2, 1)";
    droneContainer.style.left = "calc(100% - 80px)";

    // Wait for drone to complete flight
    await new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
  }

  // Play full animation sequence
  async function playFullAnimation() {
    if (animationInProgress || hasPlayedOnce) return;

    animationInProgress = true;

    try {
      // Reset first
      initializeAnimation();

      // Start line segment animations
      await animateLineSegments();

      // Start drone animation
      await animateDrone();

      // Mark as played once
      hasPlayedOnce = true;
    } catch (error) {
      console.error("Animation error:", error);
      showNotification(
        "Animation encountered an error. Please try again.",
        "error"
      );
    } finally {
      animationInProgress = false;
    }
  }

  // Auto-play animation when section comes into view
  const aboutSection = document.querySelector(".about");
  if (aboutSection) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedOnce && !animationInProgress) {
            // Auto-play with a slight delay
            setTimeout(() => {
              if (!hasPlayedOnce && !animationInProgress) {
                playFullAnimation();
              }
            }, 1000);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    sectionObserver.observe(aboutSection);
  }

  // Add hover effects to line segments
  lineSegments.forEach((segment, index) => {
    segment.addEventListener("mouseenter", () => {
      if (!animationInProgress) {
        segment.style.transform = "translateY(-5px) scale(1.05)";
        segment.style.transition = "transform 0.3s ease";
      }
    });

    segment.addEventListener("mouseleave", () => {
      segment.style.transform = "";
      segment.style.transition = "";
    });

    // Click to advance to specific step (only if animation hasn't played yet)
    segment.addEventListener("click", () => {
      if (!animationInProgress && !hasPlayedOnce) {
        // Reset to current step
        lineSegments.forEach((seg, i) => {
          if (i <= index) {
            seg.classList.add("animate");
          } else {
            seg.classList.remove("animate");
          }
        });
        currentStep = index + 1;
        showNotification(
          `Advanced to step ${currentStep} of ${lineSegments.length}`,
          "info"
        );
      }
    });
  });

  // Initialize on page load
  initializeAnimation();

  // Add intersection observer for performance optimization
  const segmentObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.willChange = "transform, opacity";
        } else {
          entry.target.style.willChange = "auto";
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  lineSegments.forEach((segment) => {
    segmentObserver.observe(segment);
  });

  console.log("Operating Principle animation system initialized! 🚁✨");
});

// Specifications (Tabbed) System
document.addEventListener("DOMContentLoaded", () => {
  const tabContainer = document.querySelector(".specs");
  if (!tabContainer) return;

  const tabs = tabContainer.querySelectorAll(".specs-tab");
  const main = tabContainer.querySelector(".specs-main");
  const imgEl = tabContainer.querySelector("#specsImage");
  const titleEl = tabContainer.querySelector("#specsTitle");
  const descEl = tabContainer.querySelector("#specsDescription");
  const ctaEl = tabContainer.querySelector("#specsCta");

  const TAB_CONTENT = {
    // Flight - drone image
    flight: {
      image: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'><rect width='800' height='450' fill='%23111111'/><g fill='none' stroke='%2300ff88' stroke-width='16' stroke-linecap='round' stroke-linejoin='round'><rect x='350' y='200' width='100' height='50' rx='8' fill='%2300ff88' stroke='none'/><line x1='180' y1='225' x2='350' y2='225'/><line x1='450' y1='225' x2='620' y2='225'/><circle cx='180' cy='225' r='34'/><circle cx='620' cy='225' r='34'/><circle cx='270' cy='140' r='20' fill='%2300ff88' stroke='none'/><circle cx='530' cy='140' r='20' fill='%2300ff88' stroke='none'/><circle cx='270' cy='310' r='20' fill='%2300ff88' stroke='none'/><circle cx='530' cy='310' r='20' fill='%2300ff88' stroke='none'/></g></svg>`,
      title: "Летные характеристики",
      description:
        "Высокая устойчивость, точность управления и маневренность в условиях переменного ветра с продолжительностью полета до 1 час 15 минут.",
      cta: { label: "Посмотреть характеристики полета", href: "#contact" },
    },
    // Camera - drone camera image
    camera: {
      image: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'><rect width='800' height='450' fill='%23111111'/><g><rect x='140' y='140' width='520' height='230' rx='18' fill='%23222222' stroke='%23444444' stroke-width='4'/><rect x='170' y='110' width='120' height='60' rx='8' fill='%23222222' stroke='%23444444' stroke-width='4'/><circle cx='400' cy='255' r='90' fill='none' stroke='%2300ff88' stroke-width='14'/><circle cx='400' cy='255' r='52' fill='%2300ff88'/><rect x='560' y='190' width='60' height='30' rx='6' fill='%2300ff88'/></g></svg>`,
      title: "Усовершенствованная система камер",
      description:
        "Видимое изображение + тепловизионная съемка, 8-кратный оптический зум и стабилизированный 3-осевой подвес для кристально четкой ситуационной осведомленности.",
      cta: { label: "Исследуйте визуализацию", href: "#contact" },
    },
    // Power - battery image
    power: {
      image: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'><rect width='800' height='450' fill='%23111111'/><g><rect x='180' y='150' width='420' height='160' rx='18' fill='%23222222' stroke='%23444444' stroke-width='4'/><rect x='600' y='190' width='30' height='80' rx='6' fill='%23222222' stroke='%23444444' stroke-width='4'/><rect x='220' y='180' width='340' height='100' rx='10' fill='%2300ff88'/><polygon points='360,175 320,255 380,255 340,335' fill='%23222222'/></g></svg>`,
      title: "Заряд & Емкость",
      description:
        "Высокоемкие LiPo-аккумуляторы с быстрозаменяемой конструкцией, интеллектуальной телеметрией и длительным сроком службы для непрерывной работы.",
      cta: { label: "Информация об аккумуляторе", href: "#contact" },
    },
    // Safety - drone image with case
    safety: {
      image: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'><rect width='800' height='450' fill='%23111111'/><g><rect x='220' y='220' width='360' height='150' rx='16' fill='%23222222' stroke='%23444444' stroke-width='4'/><rect x='260' y='190' width='120' height='50' rx='8' fill='%23222222' stroke='%23444444' stroke-width='4'/><rect x='420' y='190' width='120' height='50' rx='8' fill='%23222222' stroke='%23444444' stroke-width='4'/><g fill='none' stroke='%2300ff88' stroke-width='10' stroke-linecap='round'><line x1='290' y1='260' x2='380' y2='260'/><line x1='420' y1='260' x2='510' y2='260'/><circle cx='290' cy='260' r='18'/><circle cx='510' cy='260' r='18'/></g></g></svg>`,
      title: "Функции безопасности",
      description:
        "Обнаружение препятствий на 360°, возврат домой с помощью GPS+Vision и автоматизированные отказоустойчивые системы для надежного выполнения миссий в любых условиях.",
      cta: { label: "Прочитайте «Технологии безопасности»", href: "#contact" },
    },
  };

  function switchTab(key) {
    // Tabs visual state
    tabs.forEach((t) => {
      const isActive = t.dataset.tab === key;
      t.classList.toggle("active", isActive);
      t.setAttribute("aria-selected", String(isActive));
    });

    const data = TAB_CONTENT[key];
    if (!data) return;

    // Animate content container (300–500ms)
    main.classList.add("fade-enter");
    requestAnimationFrame(() => {
      main.classList.add("fade-enter-active");
    });

    // Image cross-fade
    imgEl.classList.remove("visible");
    imgEl.addEventListener(
      "load",
      () => {
        imgEl.classList.add("visible");
      },
      { once: true }
    );

    // Update content after a small delay to sync with fade
    setTimeout(() => {
      imgEl.src = data.image;
      imgEl.alt = data.title;
      titleEl.textContent = data.title;
      descEl.textContent = data.description;
      ctaEl.textContent = data.cta.label;
      ctaEl.href = data.cta.href;
    }, 120);

    // Cleanup animation classes
    setTimeout(() => {
      main.classList.remove("fade-enter", "fade-enter-active");
    }, 420);
  }

  // Initialize with default tab
  const initial =
    tabContainer.querySelector(".specs-tab.active")?.dataset.tab || "flight";
  switchTab(initial);

  // Events
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => switchTab(tab.dataset.tab));
    tab.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        switchTab(tab.dataset.tab);
      }
    });
  });
});
