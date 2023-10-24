import Task from "./task";
import Project from "./project";
import Todo from "./todo";

const userInterface = () => {
  const todo = Todo();
  const projectElem = document.querySelector("#tasks");
  const projectList = document.querySelector("#project-list");
  const addProjectBtn = document.querySelector("#add-project");

  const addTaskBtn = projectElem.querySelector("#add-task");
  const newTaskForm = projectElem.querySelector("#new-task");

  const priorityElem = newTaskForm.querySelector("#priority");
  const nameElem = newTaskForm.querySelector("#name");
  const dateElem = newTaskForm.querySelector("#date");
  const createTaskBtn = newTaskForm.querySelector("#create-task");
  const cancelTaskBtn = newTaskForm.querySelector("#cancel-task");

  const renderTask = (task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    const priority = document.createElement("h2");
    priority.textContent = task.getPriority();
    const title = document.createElement("h3");
    title.textContent = task.getTitle();
    const date = document.createElement("span");
    date.textContent = task.getDate();

    taskDiv.append(priority, title, date);
    projectElem.insertBefore(taskDiv, addTaskBtn);
  };

  const clearProjectElem = () => {
    const taskElems = projectElem.querySelectorAll(".task");
    taskElems.forEach((elem) => elem.remove());
  };

  const renderProjectTasks = (project) => {
    clearProjectElem();
    const tasks = project.getTasks();
    tasks.forEach((task) => {
      renderTask(task);
    });
  };

  const highlightActiveProject = (selectedProject, projList) => {
    projList.forEach((item) => {
      item.classList.remove("active");
    });
    selectedProject.classList.add("active");
  };

  const activateProject = (projectName) => {
    const id = projectName.replace(/\s+/g, "-").toLowerCase();
    const proj = projectList.querySelector(`#${id}`);
    todo.setActiveProject(projectName);
    const projectNodes = [...projectList.children];
    highlightActiveProject(proj, projectNodes);
    renderProjectTasks(todo.getActiveProject());
  };

  const renderProject = (project) => {
    const projItem = document.createElement("li");
    const title = project.getTitle();
    const id = title.replace(/\s+/g, "-").toLowerCase();
    projItem.id = id;
    const itemTitle = document.createElement("span");
    itemTitle.textContent = project.getTitle();
    const removeButton = document.createElement("button");
    removeButton.classList.add("icon-button");
    const symbol = document.createElement("span");
    symbol.classList.add("material-symbols-outlined");
    symbol.textContent = "close";
    removeButton.appendChild(symbol);

    removeButton.addEventListener("click", (e) => {
      const currentActiveProj = todo.getActiveProject();
      todo.removeProject(project.getTitle());
      console.log(todo.getProjects());
      if (currentActiveProj === project) {
        const projects = todo.getProjects();
        if (projects[0]) {
          activateProject(projects[0].getTitle());
        } else {
          clearProjectElem();
        }
      }
      projItem.remove();

      e.stopPropagation();
    });

    projItem.addEventListener("click", () => {
      activateProject(title);
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

  const resetTaskForm = () => {
    priorityElem.value = "";
    nameElem.value = "";
    dateElem.value = "";
  };

  const toggleTaskCreator = () => {
    addTaskBtn.classList.toggle("active");
    newTaskForm.classList.toggle("active");
  };

  const cancelTaskCreation = () => {
    toggleTaskCreator();
    resetTaskForm();
  };

  const addTask = () => {
    const priority = priorityElem.value;
    const name = nameElem.value;
    const date = dateElem.value;
    if (name === "") {
      alert("Task must have a name.");
      return;
    }
    resetTaskForm();

    const newTask = Task(name, date, priority);
    const activeProject = todo.getActiveProject();
    activeProject.addTask(newTask);
    renderProjectTasks(activeProject);
    toggleTaskCreator();
  };

  addTaskBtn.addEventListener("click", toggleTaskCreator);
  cancelTaskBtn.addEventListener("click", cancelTaskCreation);
  createTaskBtn.addEventListener("click", addTask);

  const defaultProjName = "Default Tasks";
  todo.addProject(Project(defaultProjName));
  todo.addProject(Project("a thing"));
  renderTodo();
  activateProject(defaultProjName);
};

export default userInterface;
