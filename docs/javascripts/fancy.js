//slideshow -->
let slideIndex = 0;
let timer;
let isMouseOver = false; // New variable to track if the mouse is over the slideshow

function changeSlide(n) {
  clearTimeout(timer);
  slideIndex += n;
  showSlide();
  startAutoChangeSlide();
}

function showSlide() {
  const slides = document.getElementsByClassName("slide");

  slideIndex = (slideIndex + slides.length) % slides.length;

  Array.from(slides).forEach((slide, i) => {
    if (i === slideIndex) {
      slide.classList.add("fade");
    } else {
      slide.classList.remove("fade");
    }
  });

  updateActiveDot();
}

function startAutoChangeSlide() {
  clearTimeout(timer); // Clear any existing timer before setting a new one
  if (!isMouseOver) { // Check if the mouse is not over the slideshow before setting a new timer
    timer = setTimeout(() => {
      slideIndex++;
      showSlide();
      startAutoChangeSlide();
    }, 4000);
  }
}

createDots();
startAutoChangeSlide();

function createDots() {
  const slides = document.getElementsByClassName("slide");
  const dotContainer = document.querySelector(".dot-container");

  Array.from(slides).forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.addEventListener("click", () => {
      clearTimeout(timer);
      slideIndex = i;
      showSlide();
      startAutoChangeSlide();
    });
    dotContainer.appendChild(dot);
  });

  updateActiveDot(); // Call updateActiveDot() after creating the dots
}

function updateActiveDot() {
  const dots = document.getElementsByClassName("dot");

  Array.from(dots).forEach((dot, i) => {
    if (i === slideIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Pause and resume slideshow on mouse enter and leave
const slideshowWrapper = document.querySelector(".slideshow-wrapper");
slideshowWrapper.addEventListener("mouseenter", () => {
  isMouseOver = true;
  clearTimeout(timer);
});
slideshowWrapper.addEventListener("mouseleave", () => {
  isMouseOver = false;
  startAutoChangeSlide();
});

// Pause and resume slideshow when the document's visibility changes
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearTimeout(timer);
  } else {
    startAutoChangeSlide();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const imageButtons = document.querySelectorAll(".image-button");
  imageButtons.forEach(button => {
    button.addEventListener("click", () => {
      const link = button.getAttribute("data-link");
      window.location.href = link;
    });
  });
});


// Counter -->
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  const options = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -20% 0px',
  };

  function startCounter(counter) {
    const countElement = counter.querySelector('.count');
    const max = parseInt(counter.getAttribute('data-target'), 10);
    const speed = 1000 / max;
    let current = 0;

    const updateCounter = () => {
      current += 1;
      countElement.textContent = current;

      if (current < max) {
        setTimeout(updateCounter, speed);
      }
    };

    updateCounter();
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

// custom buttons -->
window.addEventListener('DOMContentLoaded', (event) => {
  const buttons = document.querySelectorAll('.custom-button');
  buttons.forEach(button => {
      button.addEventListener('mouseover', function() {
          this.querySelector('.custom-description').style.display = "block";
      });
      button.addEventListener('mouseout', function() {
          this.querySelector('.custom-description').style.display = "none";
      });
  });
});


//Animated Keywords -->
document.addEventListener("DOMContentLoaded", function() {
  let element = document.getElementById("type-animation");

  let keywords = element.textContent.split("|"); // Extract keywords
  element.textContent = ""; // Clear initial text

  let keywordIndex = 0;
  let letterIndex = 0;
  let isTyping = true;
  let isFading = false;

  function typeAnimation() {
    if (isFading) {
      return;  // Don't do anything if it's currently fading
    } else if (isTyping) {
      if (letterIndex < keywords[keywordIndex].length) {
        element.textContent += keywords[keywordIndex].charAt(letterIndex++);
      } else {
        // Done typing. Start fading after 1 second, and then change to the next keyword
        isFading = true;
        setTimeout(() => { 
          element.style.opacity = 0; 
          setTimeout(() => { 
            element.style.opacity = 1; 
            element.textContent = ""; 
            isFading = false;
            isTyping = true;
            keywordIndex = (keywordIndex + 1) % keywords.length;
            letterIndex = 0;
            typeAnimation();
          }, 500);
        }, 1000);
      }
    }

    if (!isFading) {
      setTimeout(typeAnimation, 100);
    }
  }

  let observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
      typeAnimation();
      observer.disconnect();
    }
  }, {threshold: 0.1});

  observer.observe(element);
});
