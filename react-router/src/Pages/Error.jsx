import { useRouteError } from "react-router-dom";

export const Error=()=>{
    const error= useRouteError();
    return (
        <div>Oop Something went wrong
            <h1>{error}</h1>
        </div>

    )
}