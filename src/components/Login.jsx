import { useState } from "react";
import { useAuth } from "../utils/auth";
import {  useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();
  const location=useLocation()
  const redirectPath=location.state?.path||"/";
  console.log(location);
  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath,{replace:true});
  };
  return (
    <div>
      <label>
        Username:
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </label>
    </div>
  );
}
