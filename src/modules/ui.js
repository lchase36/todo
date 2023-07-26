import Project from "./project";
import Task from "./task";
import Todo from "./todo";

const userInterface = () => {
  const todo = Todo();
  const project = document.querySelector("#tasks");
  const projectList = document.querySelector("#project-list");

  const renderTask = (task) => {
    const taskDiv = document.createElement("div");
    const priority = document.createElement("h2");
    priority.textContent = task.getPriority();
    const title = document.createElement("h3");
    title.textContent = task.getTitle();
    const date = document.createElement("span");
    date.textContent = title.getDate();

    taskDiv.append(priority, title, date);
    project.appendChild(taskDiv);
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

  const addProject = (projTitle) => {
    todo.addProject(projTitle);
    renderTodo();
  };
};

export default userInterface;
