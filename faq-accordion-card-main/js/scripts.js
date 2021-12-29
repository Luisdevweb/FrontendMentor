const faqItems = document.querySelectorAll(".faq-card__content");

faqItems.forEach((item) => {
  const question = item.children[0];
  const answer = item.children[1];
  const icon = item.children[0].firstElementChild.firstElementChild;
  item.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("faq-card__question--active") ||
      e.target.classList.contains("icon-arrow--rotate")
    ) {
      answer.classList.remove("faq-card__answer--visible");
      answer.classList.remove("faq-card__answer--grow");
      icon.classList.remove("icon-arrow--rotate");
      question.classList.remove("faq-card__question--active");
    } else {
      question.classList.add("faq-card__question--active");
      answer.classList.add("faq-card__answer--visible");
      answer.classList.add("faq-card__answer--grow");
      icon.classList.add("icon-arrow--rotate");
    }
  });
});
