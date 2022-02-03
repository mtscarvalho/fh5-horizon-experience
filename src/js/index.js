import './gsap.min.js';
import './scrollTrigger.min.js';

/**
 * GSAP Animation
 */

gsap.set("#hero-background", {scale: 1, y: 0});
gsap.to("#hero-background", {
  scale: 1.5,
  y: 0,
  scrollTrigger: {
    trigger: "#hero-background",
    pin: "#hero-background",
    scrub: true
  }
})

ScrollTrigger.matchMedia({
  "(min-width: 1048px)": function() {
    gsap.to("#hero-content", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "center bottom",
        scrub: true
      }, 
    });
  },
})

gsap.from("[data-number]", {
  textContent: 0,
  duration: 2,
  snap: {
    textContent: 1
  },
  scrollTrigger: {
    trigger: ".about-the-program",
    start: "30rem center",
  },
  stagger: {
    each: 1.0,
    onUpdate: function() {
      this.targets()[0].innerHTML = this.targets()[0].textContent;
    },
  }
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".selective-process",
    start: "center bottom"
  }
});

gsap.set(".teste", {opacity: 0});
tl.to(".teste-1", {opacity: 1})
  .to(".teste-2", {opacity: 1})
  .to(".teste-3", {opacity: 1})
  .to(".teste-4", {opacity: 1})



/**
 * Video Lazy Loading
 */

const startVideoOnViewport = () => {
  const videos = document.querySelectorAll('[data-video-lazy]');  
  
  videos.forEach(video => {
    const halfWindow = window.innerHeight * 1;
    const isSectionVisible = (video.getBoundingClientRect().bottom - halfWindow) < 0.5;
    if (isSectionVisible) video.play();
  });  
}

window.addEventListener('scroll', startVideoOnViewport);


/**
 * Accordion
 */

function initAccordion() {
  const
    accordionButton = document.querySelectorAll(".accordion-button"),
    accordionContent = document.querySelectorAll(".accordion-content");

  function toggleAccordion() {
    closeOthers(this);
  
    if(this.getAttribute("aria-expanded") === "false") {
      this.setAttribute("aria-expanded", "true");
      this.nextElementSibling.setAttribute("aria-hidden", "false");
    } else {
      this.setAttribute("aria-expanded", "false");
      this.nextElementSibling.setAttribute("aria-hidden", "true");
    }
  }
  
  function closeOthers(target) {
    accordionButton.forEach(item => {
      if(item != target) {
        item.setAttribute("aria-expanded", "false");
        item.nextElementSibling.setAttribute("aria-hidden", "true");
      }
    });
  }

  for (let i = 0; i < accordionContent.length; i++) {
    accordionContent[i].setAttribute("aria-hidden", "true");
    accordionContent[i].setAttribute("aria-labelledby", `accordion-id-${i}`);
    accordionContent[i].setAttribute("id", `accordion-sect-${i}`);
  }

  for (let i = 0; i < accordionButton.length; i++) {
    accordionButton[i].setAttribute("aria-expanded", "false");
    accordionButton[i].setAttribute("aria-controls", `accordion-sect-${i}`);
    accordionButton[i].setAttribute("id", `accordion-id-${i}`);
    accordionButton[i].addEventListener("click", toggleAccordion);
  }
}

initAccordion()