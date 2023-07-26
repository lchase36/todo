import Project from "./project";

const Todo = () => {
  let projects = [];

  const getProjects = () => projects;

  const setProjects = (newProjects) => {
    projects = newProjects;
  };

  const addProject = (newProject) => {
    const foundProject = projects.find((project) => {
      return project.getTitle() === newProject.getTitle();
    });
    if (foundProject === undefined) {
      projects.push(newProject);
    }
  };
  const removeProject = (projectTitle) => {
    projects = projects.filter((project) => {
      project.getTitle() !== projectTitle;
    });
  };

  const defaultProject = Project("Tasks");
  addProject(defaultProject);

  return {
    getProjects,
    setProjects,
    addProject,
    removeProject,
  };
};
export default Todo;
