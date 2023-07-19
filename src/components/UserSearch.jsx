import { useContext, useState } from "react";
import GithubContext from "../context/GithubContext";

const UserSearch = () => {
  const { users, fetchUsers, clearUsers } = useContext(GithubContext);
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      alert("Molimo unesite nešto u pretragu.");
    } else {
      fetchUsers(text);
      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center lg:justify-end">
            <input
              type="text"
              className="w-1/2 pr-40 bg-gray-300 text-black input-lg"
              placeholder="Upiši usera"
              value={text}
              onChange={handleChange}
            />
            <button>Pretraži</button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div className="flex justify-center lg:justify-start">
          <button onClick={clearUsers}>Resetiraj</button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
