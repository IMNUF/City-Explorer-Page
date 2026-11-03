// Let visitors give the grouse a quick shake with a click or keyboard.
const bird = document.querySelector(".bird");

function shakeBird() {
  bird.classList.remove("is-shaking");
  // Reading the offset restarts the animation if someone activates it again quickly.
  void bird.offsetWidth;
  bird.classList.add("is-shaking");
}

bird.addEventListener("click", shakeBird);
bird.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    shakeBird();
  }
});
bird.addEventListener("animationend", () => {
  bird.classList.remove("is-shaking");
});

// Keep added likes in this page session only. Nothing is saved to the device.
const form = document.querySelector("#likes-form");
const input = document.querySelector("#like-input");
const list = document.querySelector("#likes-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const like = input.value.trim();

  if (!like) {
    input.focus();
    return;
  }

  const item = document.createElement("li");
  const text = document.createElement("span");
  text.textContent = like;

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Remove";
  removeButton.setAttribute("aria-label", `Remove ${like}`);
  removeButton.addEventListener("click", () => item.remove());

  item.append(text, removeButton);
  list.append(item);
  input.value = "";
  input.focus();
});
