import { Link } from "react-router-dom";

const UserKartica = ({ user }) => {
  return (
    <div className="card shadow-md compact side bg-base-100 text-center">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <img
            src={user.avatar_url}
            alt={user.login}
            className="inline-block h-24 w-24 rounded-full ring-2 ring-white"
          />
        </div>
        <div>
          <p className="mt-4">{user.login}</p>
          <Link
            to={`/user/${user.login}`}
            className="underline inline-block py-4"
          >
            Idi na profil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserKartica;
