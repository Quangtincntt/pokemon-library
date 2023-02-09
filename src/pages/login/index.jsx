import GoogleButton from "react-google-button";
import { UserAuth } from "../../Context/AuthenContext";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const { googleSignIn } = UserAuth();
  const handleLogin = async () => {
    try {
      await googleSignIn();
      setInterval(() => {
        navigate("/seeLibrary");
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <p className="text">Pokemon Library</p>
          <GoogleButton onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
}

export default Login;
