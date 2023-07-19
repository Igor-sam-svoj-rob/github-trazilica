import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initalState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initalState);

  const fetchUsers = async (text) => {
    setLoading();
    const response = await fetch(
      `https://api.github.com/search/users?q=${text}`
    );
    const { items } = await response.json();
    dispatch({
      type: "GET_USERS",
      users: items,
    });
  };

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
