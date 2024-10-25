let form = document.querySelector("form");
let ul = document.querySelector("ul");
let select = document.querySelector("select");
let textarea = document.querySelector("textarea");

const addFeedback = (event) => {
  event.preventDefault();

  let li = document.createElement("li");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let btn = document.createElement("btn");

  select.value > 3
    ? (li.className = "list-group-item bg-success")
    : (li.className = "list-group-item bg-warning");

  h1.className = "display-5";
  btn.className = "btn btn-sm btn-danger rounded-0";

  h1.innerText = `You Rated ${select.value}⭐`;
  p.innerText = `Your review: ${textarea.value}`;
  btn.innerText = "Delete";

  li.appendChild(h1);
  li.appendChild(p);
  li.appendChild(btn);
  ul.appendChild(li);

  form.reset();
};

form.addEventListener("submit", addFeedback);

ul.addEventListener("click", (e) => {
  if (e.target.className.includes("btn-danger")) {
    let li = e.target.parentElement;
    if (window.confirm("Are you sure!")) {
      ul.removeChild(li);
    }
  }
});
