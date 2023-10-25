import Task from "./task";
import Project from "./project";
import Todo from "./todo";

const userInterface = () => {
  const todo = Todo();
  const storedProjects = { ...localStorage };
  const projectElem = document.querySelector("#tasks");
  const projectList = document.querySelector("#project-list");
  const addProjectBtn = document.querySelector("#add-project");

  const newProjForm = document.querySelector("#new-project");
  const projNameInput = newProjForm.querySelector("#project-name");
  const cancelProjBtn = newProjForm.querySelector("#cancel-project");
  const createProjBtn = newProjForm.querySelector("#create-project");

  const addTaskBtn = projectElem.querySelector("#add-task");
  const newTaskForm = projectElem.querySelector("#new-task");

  const priorityElem = newTaskForm.querySelector("#priority");
  const nameElem = newTaskForm.querySelector("#name");
  const dateElem = newTaskForm.querySelector("#date");
  const createTaskBtn = newTaskForm.querySelector("#create-task");
  const cancelTaskBtn = newTaskForm.querySelector("#cancel-task");
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("keypress", (e) => {
      const key = e.charChode || e.keyCode || 0;
      if (key == 13) {
        e.preventDefault();
      }
    });
  });

  const clearProjectElem = () => {
    const taskElems = projectElem.querySelectorAll(".task");
    taskElems.forEach((elem) => elem.remove());
  };

  const toggleProjCreator = () => {
    addProjectBtn.classList.toggle("active");
    newProjForm.classList.toggle("active");
  };

  const toggleTaskCreator = () => {
    addTaskBtn.classList.toggle("active");
    newTaskForm.classList.toggle("active");
  };

  const resetTaskForm = () => {
    priorityElem.value = "";
    nameElem.value = "";
    dateElem.value = "";
  };

  const resetProjForm = () => {
    projNameInput.value = "";
  };

  const revertTaskCreation = () => {
    toggleTaskCreator();
    resetTaskForm();
  };

  const revertProjCreation = () => {
    toggleProjCreator();
    resetProjForm();
  };

  const renderTask = (task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    const priority = document.createElement("h2");
    priority.textContent = String(task.getPriority());
    const title = document.createElement("h3");
    title.textContent = task.getTitle();
    const date = document.createElement("span");
    date.textContent = task.getDate();

    taskDiv.append(priority, title, date);
    projectElem.insertBefore(taskDiv, addTaskBtn);
  };

  const saveProjectToStorage = (project) => {
    localStorage.setItem(project.getTitle(), project.toJSONString());
  };

  const removeProjectFromStorage = (project) => {
    localStorage.removeItem(project.getTitle());
  };

  const addTask = () => {
    const priority = priorityElem.value || 0;
    const name = nameElem.value;
    const date = dateElem.value;
    if (name === "") {
      alert("Task must have a name.");
      return;
    }
    resetTaskForm();

    const newTask = Task(name, date, parseInt(priority));
    const activeProject = todo.getActiveProject();
    console.log(activeProject);
    activeProject.addTask(newTask);
    renderProjectTasks(activeProject);
    toggleTaskCreator();
    saveProjectToStorage(activeProject);
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
    const activeProject = todo.getActiveProject();
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

    const removeProject = () => {
      const currentActiveProj = todo.getActiveProject();
      const remProjectTitle = project.getTitle();
      const currentProjects = todo.getProjects();
      if (currentProjects.length === 1) {
        alert("Cannot remove last project.");
        return;
      }
      removeProjectFromStorage(project);
      todo.removeProject(remProjectTitle);
      if (currentActiveProj === project) {
        const projects = todo.getProjects();
        activateProject(projects[0].getTitle());
      }
      projItem.remove();
    };

    removeButton.addEventListener("click", (e) => {
      removeProject();
      e.stopPropagation();
    });

    projItem.addEventListener("click", () => {
      activateProject(title);
    });

    projItem.append(itemTitle, removeButton);
    projectList.appendChild(projItem);
  };

  const renderTodo = () => {
    projectList.replaceChildren();
    const projects = todo.getProjects();
    projects.forEach((project) => {
      renderProject(project);
    });
  };

  const createNewProject = () => {
    const projectName = projNameInput.value;
    if (projectName === "") {
      alert("Project must have a name.");
      return;
    }
    const newProject = Project(projectName);
    todo.addProject(newProject);
    const projects = todo.getProjects();
    renderTodo();
    activateProject(projectName);
    revertProjCreation();
    saveProjectToStorage(newProject);
  };

  const retrieveLocalStorage = () => {
    for (const projectTitle in storedProjects) {
      const newProject = Project(projectTitle);
      todo.addProject(newProject);
      const tasks = JSON.parse(storedProjects[projectTitle]);
      tasks.forEach((task) => {
        const newTask = Task(task.title, task.date, task.priority || 0);
        newProject.addTask(newTask);
      });
    }
  };

  createProjBtn.addEventListener("click", createNewProject);

  addProjectBtn.addEventListener("click", toggleProjCreator);
  cancelProjBtn.addEventListener("click", revertProjCreation);

  addTaskBtn.addEventListener("click", toggleTaskCreator);
  cancelTaskBtn.addEventListener("click", revertTaskCreation);
  createTaskBtn.addEventListener("click", addTask);

  if (Object.keys(storedProjects).length) {
    retrieveLocalStorage();
    renderTodo();
    const firstProject = todo.getProjects()[0];
    activateProject(firstProject.getTitle());
  } else {
    const defaultProjName = "Default Tasks";
    const defaultProject = Project(defaultProjName);
    todo.addProject(defaultProject);
    renderTodo();
    activateProject(defaultProjName);
  }
};

export default userInterface;
