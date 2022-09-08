//Toggle bookmark on/off
const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');
const bookMarkIcon = document.querySelector('[data-js="bookmarkIcon"]');
console.log(bookmarkButton);

bookmarkButton.addEventListener("click", () => {
  bookMarkIcon.classList.toggle("bookmark--active");
});

//Show / hide question & toggle button text
const answerButton = document.querySelector('[data-js="answerButton"]');
const answer = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");
  if (answer.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }
});
