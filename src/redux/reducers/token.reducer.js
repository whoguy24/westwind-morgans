const tokenReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_RESET_TOKEN':
      return action.payload;
    case 'CLEAR_RESET_TOKEN':
      return {};
    default:
      return state;
  }
};

export default tokenReducer;
export const tokenStore = state => state.token