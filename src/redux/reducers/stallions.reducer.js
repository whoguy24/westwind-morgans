const stallionsReducer = (state = [], action) => {
    switch (action.type) {
      case 'LOAD_STALLIONS':
        return action.payload;
      default:
        return state;
    }
};
  
export default stallionsReducer;
  