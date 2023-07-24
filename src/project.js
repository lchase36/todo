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
    const isInTasks = () => {
      return tasks.find((task) => {
        task.getTitle() === newTask.getTitle();
      });
    };
    if (!isInTasks) {
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
