const Project = (title) => {
  const projectTitle = title;
  let tasks = [];

  const getTitle = () => projectTitle;
  const getTasks = () => tasks;

  const setTitle = (newTitle) => {
    projectTitle = newTitle;
  };
  const setTasks = (newTasks) => {
    tasks = newTasks;
  };

  const addTask = (newTask) => {
    const foundTask = tasks.find((task) => {
      return task.getTitle() === newTask.getTitle();
    });
    if (foundtask === undefined) {
      tasks.push(newTask);
    }
  };

  const removeTask = (taskTitle) => {
    tasks = tasks.filter((task) => task.getTitle() !== taskTitle);
  };

  return {
    getTitle,
    getTasks,
    setTitle,
    setTasks,
    addTask,
    removeTask,
  };
};
export default Project;
