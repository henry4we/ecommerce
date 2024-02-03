const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.response;
};

export default getError;
