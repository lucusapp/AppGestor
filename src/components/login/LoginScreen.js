import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const LoginScreen = () => {
  const {login}=useContext(AuthContext)
  const navegate =useNavigate()

const handleLogin = () => {
  login('Marcelo');
  console.log(login)
  navegate('/', { replace: true });
}

    return (
      <div className="container mt-5">
          <h1>LoginScreen</h1>
          <hr/>

          <button 
              className="btn btn-primary"
              onClick={handleLogin}
              >
                Login
          </button>
          
      </div>
    )
  }
  