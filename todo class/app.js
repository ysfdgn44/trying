//?  ELEMENTS***
const todoInput = document.getElementById("todo-input");
const addBtn = document.querySelector("#todo-button");
const todoUl = document.querySelector("#todo-ul");
// let todoList = JSON.stringify();
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

//? load event vs. DomContentLoaded
window.addEventListener("load", () => {
  getTodoListFromLocalStorage();
});
const getTodoListFromLocalStorage = () => {
  //? *** get todolist from localStorage and load to UI */

  todoList.forEach((todo) => {
    createTodo(todo);
  });
};

//form=> submit event vs. button=> click event
// form.addEventListener('submit',()=>{
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (todoInput.value.trim() === "") {
    alert("plece, enter new todo");
    return;
  }
  console.log(todoList);

  const newTodo = {
    id: new Date().getTime(), //?unique id width ms of now
    completed: false, //?status
    text: todoInput.value, //?userInput
  };

  createTodo(newTodo);
  todoList.push(newTodo);
  //?localStorage todoList Update
  //! localStorage vs sessionsStorage vs cookies farkları ve özellikleri
  //!!!!!! Stringify !!!!
  localStorage.setItem("todoList", JSON.stringify(todoList));
  //! event.target vs event.currentTarget
  e.target.closest("form").reset();
});
const createTodo = (newTodo) => {
  //? todo item creation
  // alert("new todo added");
  //? obj. dest.(ES6=>JS'e kazandırılan yapılar)
  const { id, completed, text } = newTodo;

  //?creat li
  const li = document.createElement("li");
  li.setAttribute("id", id);

  //! add class with completed(status)
  completed ? li.classList.add("checked") : "";

  //? creat check icon
  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-check");
  //?append vs appenChild
  li.append(icon);

  //?creat item text
  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  //? creat remove icon
  const removeIcon = document.createElement("i");
  removeIcon.setAttribute("class", "fas fa-trash");
  li.append(removeIcon);
  console.log(li);

  // todoUl.append(li);
  todoUl.prepend(li);
};
//!    Capturing vs Bubling
todoUl.addEventListener("click", (e) => {
  const idAttr = e.target.closest("li").getAttribute("id");
  if (e.target.classList.contains("fa-check")) {
    // alert("check clicked");
    e.target.parentElement.classList.toggle("checked");
    //!update array
    todoList.map((todo) => {
      if (todo.id == idAttr) {
        todo.completed = !todo.completed;
      }
    });
    //? add updated array to local storage
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else if (e.target.classList.contains("fa-trash")) {
    //! remove from ul
    e.target.parentElement.remove();
    //? remove from array
    //! id si ile silinmeyenleri filtrele array iupdate et silineni arrayden remove
    // alert("remove clicked");

    todoList = todoList.filter((todo) => todo.id != idAttr);
    //? add updated array to lacalStorage
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else {
    // alert("others clicked");
  }
});
