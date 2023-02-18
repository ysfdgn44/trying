const input = document.getElementById("todo-input");
const addButton = document.querySelector("#todo-button");
const ul = document.createElement("ul");
const sectionTodo = document.querySelector(".todos");
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

window.addEventListener("load", () => {
  getTodoListFromLocalStorage();
});

const getTodoListFromLocalStorage = () => {
  todoList.forEach((todo) => {
    createTodo(todo);
  });
};

sectionTodo.append(ul);
ul.id = "todo-ul";
addButton.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    if (input.value == "") {
      alert("invalid syntax please enter li name");
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      text: input.value,
      comleted: false,
    };
    createTodo(newTodo);
    todoList.push(newTodo);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    e.target.closest("form").reset();
  }
  //   createTodo();
);

const createTodo = (newTodo) => {
  const { id, text, completed } = newTodo;

  const li = document.createElement("li");
  li.setAttribute("id", id);
  const i = document.createElement("i");
  i.className = "fas fa-check";
  li.appendChild(i);
  completed ? li.classList.add("checked") : "";

  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  const remove = document.createElement("i");
  remove.className = "fas fa-trash";
  li.appendChild(remove);
  console.log(li);
  ul.append(li);
};

ul.addEventListener("click", (e) => {
  //   alert("yes");
  const idLi = e.target.closest("li").getAttribute("id");
  if (e.target.className == "fas fa-check") {
    // alert("yesI");
    e.target.parentElement.classList.toggle("checked");
  } else if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();

    todoList = todoList.filter((todo) => todo.id != idLi);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else {
    alert("other clicked");
  }
});
