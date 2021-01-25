const HttpCode = {
  UNAUTHORIZED: 401,
};

const setupApiInterceptors = (api, onUnauthorized) => {
  const onSuccess = response => response;

  const onFail = err => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);
};

export default setupApiInterceptors;
