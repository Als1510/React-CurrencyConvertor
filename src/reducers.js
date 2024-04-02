const initialState = {
  tasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: action.id,
            text: action.text
          }
        ]
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id)
      };
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.tasks
      };
    default:
      return state;
  }
};

export default reducer;
