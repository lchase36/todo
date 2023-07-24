import Project from "./project";

const Todo = () => {
  let projects = [];
  projects.push(Project("Tasks"));

  const getProjects = () => projects;

  const setProjects = (newProjects) => {
    projects = newProjects;
  };

  const addProject = (newProject) => {
    const isInProjects = () => {
      return projects.find((project) => {
        project.getTitle() === newProject.getTitle();
      });
    };
    if (!isInProjects) {
      tasks.push(task);
    }
  };
  const removeProject = (projectTitle) => {
    projects = projects.filter((project) => {
      project.getTitle() !== projectTitle;
    });
  };

  return {
    getProjects,
    setProjects,
    addProject,
    removeProject,
  };
};
export default Todo;
