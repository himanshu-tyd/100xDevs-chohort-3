const divEl = document.querySelector("div");

const addList = () => {
  console.log("click");
  const inputElval = document.querySelector("input").value;
  const listDiv = document.querySelector('#list')
  console.log("controle rich here");
  listDiv.innerHTML = `<div>${inputElval} <button>Delete</button></div>`;
};

const startTime = () => {
  let count = 0;

  setTimeout(() => {
    console.log(count++);
  }, 1000);
};

let count = 0;

function IncreseCount() {
  const h2El = (document.querySelectorAll("h2")[1].innerHTML = count);
  count++;
}

setInterval(IncreseCount, 1000);

function deleteTodo(index) {
  const element = document.getElementById("todo-" + index);
  element.parentNode.removeChild(element);
}
