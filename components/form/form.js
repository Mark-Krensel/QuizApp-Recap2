//form button ->
const form = document.querySelector('[data-js="form"]');
const newList = document.querySelector('[data-js="newList"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const createNewLi = document.createElement("li");
  // createNewLi(); /*the second is for the tag*/

  const createNewArticle = document.createElement("article");
  createNewArticle.classList.add("card");

  const createNewH2 = document.createElement("h2");
  createNewArticle.classList.add("card__question");
  createNewH2.textContent = data.question;

  const createNewButton = document.createElement("button");
  createNewButton.classList.add("card__button-answer");
  createNewButton.textContent = "Show answer";

  const createNewP = document.createElement("p");
  createNewP.classList.add(
    "card__answer--active"
  ); /* <-- need to remmove "active" later on*/
  createNewP.textContent = data.answer;

  //new bookmark
  const createNewBookmarkDiv = document.createElement("div");
  createNewBookmarkDiv.classList.add("card__button-bookmark");

  const createNewBookmarkButton = document.createElement("button");
  createNewBookmarkButton.classList.add("bookmark", "bookmark--active");
  createNewBookmarkButton.setAttribute("type", "button");

  //new svg
  const createNewSvg = document.createElement("svg");
  createNewSvg.setAttribute("height", "24px");
  createNewSvg.setAttribute("viewbox", "0 0 24 24");
  createNewSvg.setAttribute("width", "24px");
  createNewSvg.setAttribute("fill", "#000000");

  const createNewPath1 = document.createElement("path");
  createNewPath1.setAttribute("d", "M0 0h24v24H0V0z");
  createNewPath1.setAttribute("fill", "none");

  const createNewPath2 = document.createElement("path");
  createNewPath2.setAttribute(
    "d",
    "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
  );

  createNewSvg.append(createNewPath1, createNewPath2);
  createNewBookmarkButton.append(createNewSvg);

  createNewBookmarkDiv.append(createNewBookmarkButton);

  const createNewUl = document.createElement("ul");
  createNewUl.classList.add("card__tag-list");
  const createNewTag = document.createElement("li");
  createNewTag.classList.add("card__tag-list-item");
  createNewTag.textContent = data.tag;

  createNewUl.append(createNewTag);

  newList.append(createNewLi);
  createNewLi.append(createNewArticle);
  createNewArticle.append(
    createNewH2,
    createNewButton,
    createNewP,
    createNewUl,
    createNewBookmarkDiv
  );

  console.log(data);
});
