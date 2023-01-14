const error = (state = {}, action) => {
  switch (action.type) {
    case 'ERROR_CLEAR':
      return {};
    case 'ERROR_BAD_REQUEST':
      return { code : 400, message : 'Please enter a username and password.' };
    case 'ERROR_UNAUTHORIZED':
      return { code : 401, message : "Invalid username and password combination. Please try again." };
    case 'ERROR_NOT_FOUND':
        return { code : 404, message : "Could not connect to server. Please contact your administrator." };
    case 'ERROR_SERVER':
      return { code : 500,  message : "There was a problem communicating with the server. Please contact your administrator." };
    default:
      return state;
  }
};

export default error;
