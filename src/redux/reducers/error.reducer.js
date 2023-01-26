const error = (state = {}, action) => {
  switch (action.type) {
    case 'ERROR_CLEAR':
      return {};
    case 'ERROR_400':
      return {code:400};
    case 'ERROR_401':
      return {code:401};
    case 'ERROR_404':
      return {code:404};
    case 'ERROR_500':
      return {code:500};
    case 'SUCCESS_201':
      return {code:201};
    default:
      return state;
  }
};

export default error;
