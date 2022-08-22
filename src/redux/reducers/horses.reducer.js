const horsesReducer = (state = [], action) => {
    switch (action.type) {
      case 'LOAD_HORSES':
        return action.payload;
      default:
        return state;
    }
};
  
export default horsesReducer;
  