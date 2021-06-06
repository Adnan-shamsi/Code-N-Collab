import { useContext } from "react";
import NavItem from "./NavItems";
import "./NavItem.css";
import { useHistory , Route } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import axios from "../../Axios/axios"

export default function () {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const loginHandler = async() => {
    try{
      const req = await axios.get("/Oauth/googleOauth");
      window.location.href = req.data
    }catch(e){
      console.log(e);
    }
  };
  const logoutHandler = () => {
    history.push("/logout");
  };

  const aboutHandler = () => {
    history.push("/about");
  };

  const updateUserHandler = () => {
    history.push("/updateUser");
  };

  return (
    <div className="headerss">
      {auth.isLoggedIn === false ? (
        <>
          <NavItem Name="login" clicked={loginHandler} />
        </>
      ) : (<>
        <NavItem Name="logout" clicked={logoutHandler} />
      </>)}
      <NavItem Name="about" clicked={aboutHandler} />
    </div>
  );
}