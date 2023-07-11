import { useParams } from "react-router-dom"

export const ProjectDetails=()=>{

    const params= useParams()
    return (
        <div>
            <h1>Project Details Page {params.id}</h1>
        </div>
    )
}