const makeApiRequest = async (url, method, requestBody = {}) => {
  try {
    const options = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const extendedOptions = method === 'POST' ? {...options, body: JSON.stringify(requestBody)} : options;
    const response = await fetch(`api/v1/${url}`, extendedOptions);

    return await response.json();
  } catch (error) {
    return error;
  }
}

export default makeApiRequest;
