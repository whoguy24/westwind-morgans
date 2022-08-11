const stallionReducer = (state = {}, action) => {
    switch (action.type) {
      case 'LOAD_STALLION':
        return {...action.payload};
      default:
        return state;
    }
};
  
export default stallionReducer;
  