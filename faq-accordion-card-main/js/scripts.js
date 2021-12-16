const accordion = document.getElementById("accordion");
console.log(accordion);
accordion.addEventListener("click", (e) => {
  if (e.target.classList.contains("faq-card__question")) {
    e.target.nextElementSibling.classList.toggle("faq-card__answer--visible");
    e.target.nextElementSibling.classList.toggle("faq-card__answer--grow");
    e.target.firstElementChild.firstElementChild.classList.toggle(
      "icon-arrow--rotate"
    );
  } else if (e.target.classList.contains("icon-arrow")) {
    e.target.parentElement.parentElement.nextElementSibling.classList.toggle(
      "faq-card__answer--visible"
    );
    e.target.parentElement.parentElement.nextElementSibling.classList.toggle(
      "faq-card__answer--grow"
    );
    e.target.classList.toggle("icon-arrow--rotate");
  }
});
