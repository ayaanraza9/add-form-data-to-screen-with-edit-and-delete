const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

let tasks = [];

const renderTasks = () => {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = task;
    taskList.appendChild(li);
  });
};

const addTask = () => {
  let task = taskInput.value;
  if (task) {
    tasks.push(task);
    taskInput.value = "";
    renderTasks();
    updateLocalStorage();
  }
};

const updateLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getTasksFromLocalStorage = () => {
  let storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
  }
};

addTaskBtn.addEventListener("click", addTask);

document.addEventListener("DOMContentLoaded", getTasksFromLocalStorage);