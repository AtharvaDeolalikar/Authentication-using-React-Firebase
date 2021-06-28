import React from "react";
import { Redirect} from "react-router";
//import {signInWithGoogle} from "./firebase";
import {useAuth} from "./contexts/AuthContext";
import "./login.css";

function Login() {
    const context = useAuth();
    if(context.user.email){
        return (
            <Redirect to="/" />
        )}else{
        return (
        <>
            <div className="login-full-screen flexible-center">
                <div className="login-form flexible-center">
                    <div className="form-content">
                        <h1>Login</h1>
                        <button onClick={context.LoginWithGoogle}><i className="fab fa-google"></i>Continue with Google</button><br />
                        <button onClick={context.HideError}><i className="fab fa-facebook-f"></i>Continue with Facebook</button><br />
                        <button onClick={context.LoginWithGitHub}><i className="fab fa-github"></i>Continue with GitHub</button>
                    </div>
                </div>  
            </div>
        </>
        )
    } 
}

export default Login


