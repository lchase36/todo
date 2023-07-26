import Task from "./task";
import Project from "./project";
import Todo from "./todo";

const userInterface = () => {
  const todo = Todo();
  const project = document.querySelector("#tasks");
  const projectList = document.querySelector("#project-list");
  const addProjectBtn = document.querySelector("#add-project");

  const addTaskBtn = project.querySelector("#add-task");
  const newTaskForm = project.querySelector("#new-task");

  const priorityElem = newTaskForm.querySelector("#priority");
  const nameElem = newTaskForm.querySelector("#name");
  const dateElem = newTaskForm.querySelector("#date");
  const createTaskBtn = newTaskForm.querySelector("#create-task");
  const cancelTaskBtn = newTaskForm.querySelector("#cancel-task");

  const renderTask = (task) => {
    const taskDiv = document.createElement("div");
    const priority = document.createElement("h2");
    priority.textContent = task.getPriority();
    const title = document.createElement("h3");
    title.textContent = task.getTitle();
    const date = document.createElement("span");
    date.textContent = task.getDate();

    taskDiv.append(priority, title, date);
    project.insertBefore(taskDiv, addTaskBtn);
  };

  const renderProjectTasks = (project) => {
    const tasks = project.getTasks();
    tasks.forEach((task) => {
      renderTask(task);
    });
  };

  const renderProject = (project) => {
    const projItem = document.createElement("li");
    const itemTitle = document.createElement("span");
    itemTitle.textContent = project.getTitle();
    const removeButton = document.createElement("button");
    removeButton.classList.add("icon-button");
    const symbol = document.createElement("span");
    symbol.classList.add("material-symbols-outlined");
    symbol.textContent = "close";
    removeButton.appendChild(symbol);
    removeButton.addEventListener("click", () => {
      todo.removeProject(project);
      projItem.remove();
    });
    projItem.append(itemTitle, removeButton);
    projectList.appendChild(projItem);
  };

  const renderTodo = () => {
    const projects = todo.getProjects();
    projects.forEach((project) => {
      renderProject(project);
    });
  };

  const showTaskCreator = () => {
    addTaskBtn.classList.toggle("active");
    newTaskForm.classList.toggle("active");
  };

  addTaskBtn.addEventListener("click", showTaskCreator);

  const resetTaskForm = () => {
    priorityElem.value = "";
    nameElem.value = "";
    dateElem.value = "";
  };

  const addTask = () => {
    const priority = priorityElem.value;
    const name = nameElem.value;
    const date = dateElem.value;

    resetTaskForm();

    const newTask = Task(name, date, priority);
    const activeProject = todo.getActiveProject();
    activeProject.addTask(newTask);
    renderTask(newTask);
  };

  createTaskBtn.addEventListener("click", addTask);

  todo.addProject(Project("Tasks"));
  todo.addProject(Project("Anotha One"));
  todo.setActiveProject("Tasks");
  renderTodo();
};

export default userInterface;
