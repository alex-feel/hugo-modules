// accordion script
(function () {
  "use strict";

  const accordions = document.querySelectorAll("[data-accordion]");

  if (accordions.length > 0) {
    accordions.forEach((header) => {
      header.addEventListener("click", () => {
        const clickedAccordionItem = header.parentElement;

        accordions.forEach((otherHeader) => {
          const otherAccordionItem = otherHeader.parentElement;

          if (otherHeader !== header) {
            otherAccordionItem.classList.remove('active');
            otherAccordionItem.querySelector('.accordion-content').style.maxHeight = null;
          }
        });

        clickedAccordionItem.classList.toggle("active");

        const content = clickedAccordionItem.querySelector('.accordion-content');
        if (clickedAccordionItem.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  }
})();
