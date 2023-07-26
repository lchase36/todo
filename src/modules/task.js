const Task = (title, date = "", desc = "", priority = 0) => {
  let taskTitle = title;
  let taskDate = date;
  let taskDesc = desc;
  let taskPriority = priority;

  const getTitle = () => taskTitle;
  const getDate = () => taskDate;
  const getDescription = () => taskDesc;
  const getPriority = () => taskPriority;

  const setTitle = (newTitle) => {
    taskTitle = newTitle;
  };

  const setDate = (newDate) => {
    taskDate = newDate;
  };

  const setDescription = (newDesc) => {
    taskDesc = newDesc;
  };

  const setPriority = (newPriority) => {
    taskPriority = newPriority;
  };

  return {
    getTitle,
    getDate,
    getDescription,
    getPriority,
    setTitle,
    setDate,
    setDescription,
    setPriority,
  };
};

export default Task;
