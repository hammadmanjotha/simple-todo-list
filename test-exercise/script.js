let form = document.querySelector("#form");
let input = document.querySelector(".input");
let list = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let element = document.createElement("h1");
  element.innerText = input.value;
  element.classList.add("list-items");
  list.appendChild(element);
  input.value = "";

  element.addEventListener("click", () => {
    element.remove();
  });
});
