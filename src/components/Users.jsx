import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import s from "../styles/users.module.scss";
export default function Users() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((usersData) => setUsers(usersData));
    } catch (error) {
      return <h2>{error.message}</h2>;
    }
  }, []);
  return (
    <div className={s.wrapper}>
      <div>
        {users ? (
          users.map((user) => (
            <Link to={"/users/" + user.id} key={user.id}>
              <h2>{user.name}</h2>
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Outlet />
    </div>
  );
}
