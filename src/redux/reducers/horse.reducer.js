const horseReducer = (state = {}, action) => {
    switch (action.type) {
      case 'LOAD_HORSE':
        return {...action.payload};
      default:
        return state;
    }
};
  
export default horseReducer;
  