import React, {useState, useEffect, useContext} from 'react';
import {auth, signInWithGoogle, signInWithGitHub} from "../firebase"
import Loader from "../Loader"
import Error from "../Error";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

function AuthContextProvider({ children }){
  const [user, setUser] = useState();
  const [error, setError] = useState();
  //const [isAuthed, setIsAuthed] = useState();

  function LoginWithGoogle(){
    signInWithGoogle()
  }

  function HideError(){
    setError()
  }

  function LoginWithGitHub(){
    signInWithGitHub()
  }

  function LogOut(){
    auth.signOut()
      .then(/* window.location = "/login" */)
      .catch((error) => {console.log(error)});
  }

  auth.getRedirectResult()
  .then(() => {}).catch((error) => {
    setError(error.message)
  });

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      }else{
        setUser({})
      }
      console.log(user)
    });
  }, [])
  
  const values={
    user,
    LoginWithGoogle,
    LoginWithGitHub,
    LogOut,
    HideError
  }
  
  return (
    <AuthContext.Provider value={values}>
      {error && <Error error={error} />}
      {typeof(user)!=="object" ? <Loader /> : <></>}
      {typeof(user)=="object" && children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;