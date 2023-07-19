import React, { useContext, useEffect } from "react";
import GithubContext from "../context/GithubContext";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import RepoList from "../components/RepoList";

const User = () => {
  const { user, getUser, loading, getRepos, repos } = useContext(GithubContext);
  const { name, avatar_url, bio, login, html_url } = user;
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
    getRepos(params.login);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/">Nazad</Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card">
              <figure>
                <img src={avatar_url} alt={login} />
              </figure>
              <div className="flex items-center flex-col">
                <h2 className="card-title mb-0">{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl">{name}</h2>
              <p>{bio}</p>
              <a href={html_url} target="_blank">
                Github stranica profila
              </a>
            </div>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default User;
