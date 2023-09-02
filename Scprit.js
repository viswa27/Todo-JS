var popup = document.getElementById("popup");
var taskname = document.getElementById("taskname");
var bodySubcontainer = document.getElementById("body-Subcontainer");
var isOpen = true;
function show() {
  if (isOpen) {
    isOpen = false;
    popup.style.display = "block";
    bodySubcontainer.style.filter = "blur(8px)";
    taskname.value = "";
  } else {
    isOpen = true;
    popup.style.display = "none";
    bodySubcontainer.style.filter = "none";
  }
}
function hide() {
  popup.style.display = "none";
  bodySubcontainer.style.filter = "none";
  isOpen = true;
}


var popup2 = document.getElementById("popup2");
var taskname2 = document.getElementById("taskname2");
var isOpen2 = true;
function show2(id) {
  if (isOpen2) {
    isOpen2 = false;
    popup2.style.display = "block";
    bodySubcontainer.style.filter = "blur(8px)";
    taskname2.value = "";
  } else {
    isOpen2 = true;
    popup2.style.display = "none";
    bodySubcontainer.style.filter = "none";
  }
  cardId = id;
}
function hide2() {
  popup2.style.display = "none";
  bodySubcontainer.style.filter = "none";
  isOpen2 = true;
}

//
var todoCount = 0;
var taskCount = 0;
var todos = document.getElementById("todos");

function createPopup() {
  back();
  var todonoItems = document.getElementById("todo-noItems");
  var taskname = document.getElementById("taskname");
  todonoItems.style.display = "none";
  todoCount++;

  var newTodo = document.createElement("div");
  var todoHeading = document.createElement("h2");
  var todoDes = document.createElement("div");
  var todoButtons = document.createElement("div");
  var deleteTodo = document.createElement("img");
  var newItemTodo = document.createElement("img");
  var newItembtn = document.createElement("div");

  if (taskname.value === "") {
    todoHeading.innerText = `Task ${todoCount}`;
    popup.style.display = "none";
    bodySubcontainer.style.filter = "none";
    isOpen = true;
  } else {
    todoHeading.innerText = taskname.value;
    popup.style.display = "none";
    bodySubcontainer.style.filter = "none";
    isOpen = true;
  }
  newTodo.classList.add("todocard");
  newTodo.id = `newTodo${todoCount}`;
  todoDes.classList.add("todoDes");
  todoDes.id = `todoDes${todoCount}`;
  todoHeading.id = `todoHeading${todoCount}`;

  todoHeading.classList.add("todoHeadings");
  todoButtons.classList.add("todoButtons");
  deleteTodo.classList.add("deleteTodo");
  newItemTodo.classList.add("newItemTodo");
  newItembtn.classList.add("newItembtn");
  newItemTodo.src = "plus.svg";
  deleteTodo.src = "./trash.png";
  newItembtn.setAttribute("onclick", `show2(${todoCount})`);
  todoHeading.setAttribute("onclick", `showThis(${todoCount})`);
  //adding to parent
  todos.appendChild(newTodo);
  newTodo.appendChild(todoHeading);
  newTodo.appendChild(todoDes);
  newTodo.appendChild(todoButtons);
  todoButtons.appendChild(newItembtn);
  newItembtn.appendChild(newItemTodo);
  todoButtons.appendChild(deleteTodo);
  deleteTodo.addEventListener("click", function () {
    newTodo.remove();
  });
}

function createPopup2() {
  const contentListId = `todoDes${cardId}`;
  var Ul = document.getElementById(contentListId);
  taskCount++;

  var taskItem = document.createElement("div");
  var newTask = document.createElement("p");
  var markDone = document.createElement("button");

  if (taskname2.value === "") {
    newTask.innerText = `Item ${taskCount}`;
    popup2.style.display = "none";
    bodySubcontainer.style.filter = "none";
    isOpen2 = true;
  } else {
    newTask.innerText = taskname2.value;
    popup2.style.display = "none";
    bodySubcontainer.style.filter = "none";
    isOpen2 = true;
  }

  markDone.innerText = `Done`;

  taskItem.classList.add("taskItem");
  Ul.appendChild(taskItem);
  taskItem.appendChild(newTask);
  taskItem.appendChild(markDone);

  markDone.addEventListener("click", function () {
    newTask.style.textDecoration = "line-through";
    newTask.style.color = "red";
    markDone.style.display = "none";
  });
}
function showThis(id) {
  var todocard = document.querySelectorAll(".todocard");
  var navbar11 = document.getElementById("navbar11");
  var navbar22 = document.getElementById("navbar22");
  var headerName = document.getElementById("headerName");

  const todoListId = `newTodo${id}`;
  var selectedTodo = document.getElementById(todoListId);
  const todoHeading = `todoHeading${id}`;
  var selectedTodoHeading = document.getElementById(todoHeading);
  console.log(selectedTodoHeading.innerText);

  todocard.forEach((allCards) => {
    allCards.style.display = "none";
    navbar11.style.display = "none";
    navbar22.style.display = "flex";
  });
  selectedTodo.style.display = "block";
  headerName.innerText = selectedTodoHeading.innerText;
}
function back() {
  var todocard = document.querySelectorAll(".todocard");
  var navbar11 = document.getElementById("navbar11");
  var navbar22 = document.getElementById("navbar22");
  todocard.forEach((allCards) => {
    allCards.style.display = "block";
    navbar11.style.display = "flex";
    navbar22.style.display = "none";
  });
}
