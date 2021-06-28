import React from "react"
import { Redirect } from "react-router"
import {useAuth} from "./contexts/AuthContext"

function Home() {
    const context = useAuth();
    if(context.user.email){
       return (
        <>
            <h1>Hi, {context.user.displayName}</h1>
            <button onClick={context.LogOut}>Logout</button>
        </>
    )}else{
       return(
           <Redirect to="/login" />
       )
   }   
  }
export default Home;