const btn = document.getElementById("btn"),
  overlay = document.querySelector(".overlay");

// let i = 0;
const deleteElement = (e) => {
  console.log(e.target);
  console.log(e.type);

  //   i++;
  //   if (i == 1) {
  //     btn.removeEventListener("click", deleteElement);
  //   }
};

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

const link = document.querySelector("a");
link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
});

const button = document.querySelectorAll("button");
button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hello");
  });
});
