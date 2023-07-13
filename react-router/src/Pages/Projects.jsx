import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../Components/AuthContext";
import { useContext } from "react";

export const Projects=()=>{
    const {token}=useContext(AuthContext)
    const [id, setId]=useState(123);

    if(!token){
        return (<div><h1>Login first Bhadwya</h1></div>)
    }
    return (
        <div>
            <Link to={`/project/:${id}`} >Project Page</Link>
        </div>
    )
}