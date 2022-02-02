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