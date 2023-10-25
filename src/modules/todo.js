const Todo = () => {
  let projects = [];
  let activeProject;

  const getProjects = () => projects;

  const setProjects = (newProjects) => {
    projects = newProjects;
  };

  const getProject = (projectTitle) => {
    return projects.find((project) => {
      return project.getTitle() === projectTitle;
    });
  };

  const addProject = (newProject) => {
    const foundProject = getProject(newProject.getTitle());
    if (foundProject === undefined) {
      projects.push(newProject);
    }
  };
  const removeProject = (projectTitle) => {
    projects = projects.filter((project) => {
      return project.getTitle() !== projectTitle;
    });
  };

  const getActiveProject = () => activeProject;

  const setActiveProject = (projectTitle) => {
    const newActiveProject = getProject(projectTitle);
    if (newActiveProject !== undefined) {
      activeProject = newActiveProject;
    }
  };

  return {
    getProjects,
    setProjects,
    addProject,
    removeProject,
    getActiveProject,
    setActiveProject,
  };
};
export default Todo;
