const serverReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_SERVER':
        return {...action.payload};
      default:
        return state;
    }
};
  
export default serverReducer;
  