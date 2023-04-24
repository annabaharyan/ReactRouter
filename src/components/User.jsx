import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((userData) => setUser(userData));
    } catch (error) {
      return <p>Something went wrong</p>;
    }
  }, [id]);
  return (
    <div>
      {user && (
        <div>
          <h3>{user.name}</h3>
          <h3>{user.surname}</h3>
          <p>{user.phone}</p>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default User;
