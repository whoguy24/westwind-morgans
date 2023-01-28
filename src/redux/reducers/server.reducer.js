const server = (state = {}, action) => {
  switch (action.type) {
    case 'SERVER_200':
      return {status:200,timeout: 1000};
    case 'SERVER_201':
      return {status:201,timeout: 1000};
    case 'SERVER_400':
      return {status:400,timeout: 1000};
    case 'SERVER_401':
      return {status:401,timeout: 1000};
    case 'SERVER_404':
      return {status:404,timeout: 1000};
    case 'SERVER_500':
      return {status:500,timeout: 1000};
    default:
      return state;
  }
};

export default server;
