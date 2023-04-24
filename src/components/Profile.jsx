import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

export default function Profile() {
  const auth = useAuth();

  const navigate = useNavigate();
  return (
    <div>
      <h2>Welcome {auth.user} </h2>
      <button
        onClick={() => {
          auth.logout();
          navigate("/");
         
        }}
      >
        Logout
      </button>
    </div>
  );
}
