import "../../index.css"
import { LOGO_url } from "../utils/constant"
export const Header= ()=>{
    return (
        <div className="header">
            <div className="logo"> 
                <img src={LOGO_url}></img>
                </div>
            <div className="navitems">
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
                <li>Login</li>
                </ul>
            </div>
        </div>
    )
}