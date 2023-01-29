const snackbarReducer = (state = {}, action) => {
    switch (action.type) {
      case 'OPEN_SNACKBAR':
        return {...action.payload};
      case 'CLOSE_SNACKBAR':
        return {...action.payload};
      default:
        return state;
    }
};
  
export default snackbarReducer;
  