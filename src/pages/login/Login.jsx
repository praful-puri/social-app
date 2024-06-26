import "./login.css";
import {useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";

export default function Login() {

  const navigate = useNavigate();

  const collectdata = () => {
    navigate("/register")
  }

  const homepage = () => {
    toast.success("Login Succesfully");
    navigate("/")
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Friendlies</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" placeholder="Email" className="loginInput" />
            <input type="password" placeholder="Password" className="loginInput" />
            <button  onClick={homepage} className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button onClick={collectdata} className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
