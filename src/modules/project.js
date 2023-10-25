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
    if (foundTask === undefined) {
      tasks.push(newTask);
    }
  };

  const removeTask = (taskTitle) => {
    tasks = tasks.filter((task) => task.getTitle() !== taskTitle);
  };

  const toJSONString = () => {
    const taskList = [];
    tasks.forEach((task) => {
      const taskString = task.toStorageObj();
      taskList.push(taskString);
    });

    return JSON.stringify(taskList);
  };

  return {
    getTitle,
    getTasks,
    setTitle,
    setTasks,
    addTask,
    removeTask,
    toJSONString,
  };
};
export default Project;
