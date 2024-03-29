const Task = (title, date = "", priority = 0) => {
  let taskTitle = title;
  let taskDate = date;
  let taskPriority = priority;

  const getTitle = () => taskTitle;
  const getDate = () => taskDate;
  const getPriority = () => taskPriority;

  const setTitle = (newTitle) => {
    taskTitle = newTitle;
  };

  const setDate = (newDate) => {
    taskDate = newDate;
  };

  const setPriority = (newPriority) => {
    taskPriority = newPriority;
  };

  const toStorageObj = () => {
    return {
      title: taskTitle,
      date: taskDate,
      priority: taskPriority,
    };
  };

  return {
    getTitle,
    getDate,
    getPriority,
    setTitle,
    setDate,
    setPriority,
    toStorageObj,
  };
};

export default Task;
