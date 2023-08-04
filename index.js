let count = 0;

const countHeader = document.getElementById("count");
countHeader.innerText = count;

const countAddBtn = document.getElementById("add");

const countSubtractBtn = document.getElementById("subtract");

countAddBtn.addEventListener("click", () => {
  count++;
  countHeader.innerText = count;
});

countSubtractBtn.addEventListener("click", () => {
  count--;
  countHeader.innerText = count;
});
