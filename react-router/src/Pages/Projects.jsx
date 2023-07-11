import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { ProjectDetails } from "./ProjectDetails";
export const Projects=()=>{
    const [id, setId]=useState(123)
    return (
        <div>
            <Link to={`/project/:${id}`} >Project Page</Link>
        </div>
    )
}