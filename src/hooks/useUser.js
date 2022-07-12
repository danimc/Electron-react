import React, { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";

export default function useUser() {
  const { token, setToken } = useContext(Context);
  const [state, setState] = useState({
    loading: false,
    error: false,
    windowLogin: false,
  });

  const login = useCallback(
    ({ email, password }) => {
      //setState({ loading: true, error: false });

      const tkn = 'aZsdaswe234'

      window.localStorage.setItem("token", tkn);
      setToken(tkn);


     

      /* conecta a la API
      loginService({ email, password })
        .then((token) => {
          window.localStorage.setItem("token", token);
          setState({ loading: false, error: false });
          setToken(token);
        })
        .catch((err) => {
          window.localStorage.removeItem("token");
          setState({ loading: false, error: true });
          console.error(err);
        });
        */
    },
    [setToken]
  );

  const logout = useCallback(() => {
    window.localStorage.removeItem("token");
    setToken(null);
  }, [setToken]);

  const changeLoginWindow = () => {
    if (!state.windowLogin) {
      window.api.getLoginWindow();
      setState({ windowLogin: true });
    }
  };

  const changeSystemWindow = () => {
    window.api.openViewSystem();
  };

  return {
    isLogged: Boolean(token),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    //isWindowLogin: state.windowLogin,
    changeLoginWindow,
    changeSystemWindow,
    login,
    logout,
  };
}
