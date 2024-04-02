let nextTaskId = 0;

export const addTask = (text) => ({
  type: 'ADD_TASK',
  id: nextTaskId++,
  text
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  id
});

export const setTasks = (tasks) => ({
  type: 'SET_TASKS',
  tasks
});