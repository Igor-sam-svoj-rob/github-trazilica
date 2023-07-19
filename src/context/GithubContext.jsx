import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initalState = {
    users: [],
    user: {},
    repos: [],
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

  const getUser = async (login) => {
    setLoading();
    const response = await fetch(`https://api.github.com/users/${login}`);
    const data = await response.json();
    dispatch({
      type: "GET_USER",
      data: data,
    });
  };

  const getRepos = async (login) => {
    setLoading();
    const response = await fetch(`https://api.github.com/users/${login}/repos`);
    const data = await response.json();
    dispatch({
      type: "GET_REPOS",
      data: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        getRepos,
        fetchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
