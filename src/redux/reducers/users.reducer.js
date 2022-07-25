const usersReducer = (state = [], action) => {
    switch (action.type) {
      case 'LOAD_USERS':
        return action.payload;
      case 'UNLOAD_USERS':
        return [];
      default:
        return state;
    }
};
  
export default usersReducer;