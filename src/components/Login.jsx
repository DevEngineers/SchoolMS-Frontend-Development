import React, {useEffect, useState,} from "react";
import '../styles/Login.css';
import {toast, ToastContainer} from "material-react-toastify";
import UserService from "../services/UserService";
import {useHistory} from "react-router-dom";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

//Toast Message Configuration
const options = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
};

const Login = () => {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password ,setPassword] = useState('');

    useEffect(() =>{
        localStorage.setItem('headerValue', 'value');
        localStorage.setItem('footerValue', 'value');

        return () => {
            localStorage.removeItem('headerValue');
            localStorage.removeItem('footerValue');
        }
    },[]);


    const userLogin = (event) =>{
        event.preventDefault()

        if(email === ''){
            toast.warning(`Enter Email Address`, options);
        }else if (password === ''){
            toast.warning(`Enter Password`, options);
        }else{
            UserService.userLogin({email,password})
            .then(response => {
                if (response.status === 200){
                    localStorage.setItem("branch",response.branch)
                    localStorage.setItem("userID",response.userID)
                    localStorage.setItem("userToken",response.token);
                    localStorage.setItem("userType",response.userType);
                    localStorage.removeItem("headerValue");
                    localStorage.removeItem("footerValue");
                    localStorage.setItem("homeValue", "value");
                    history.push("/home");
                }else{
                    toast.warning(`Username or Password Incorrect`, options);
                }
            })
        }
    }

    return (
      <div className="login">
          <ToastContainer/>
          <div className="login_box">
              <div className="left">
                  <div className="contact">
                      <form>
                          <h3>SIGN IN</h3>
                          <input type="text" placeholder="EMAIL" onChange={event => setEmail(event.target.value)}/>
                          <input type="password" placeholder="PASSWORD" onChange={event => setPassword(event.target.value)}/>
                          <label className={'forgotText'}>Forgot Password?</label><br/>
                          <label className={'forgotText'}>Please Contact Administrator Through <a href={'/about-us'} id={"aboutUsLink"}>About us</a></label>
                          <button className="submit" onClick={event => userLogin(event)}>LOGIN</button>
                      </form>
                  </div>
              </div>
              <div className="right">
                  <div className="right-text">
                      <h2>Welcome to Gateway International Collage</h2>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Login;

