import "../../index.css"
import { LOGO_url } from "../utils/constant"
import { UncontrolledExample } from "./Carousal";
import { useSelector } from "react-redux";

export const Header= ()=>{
    const cartItems= useSelector(store=>store.cart.items);

    return (
        <>
            <div className="header">
                <div className="logo"> 
                    <img src={LOGO_url}></img>
                    </div>
                <div className="navitems">
                    <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Login</li>
                    <li>Cart<span style={{color:'red'}}>  {cartItems.length}</span></li>
                    </ul>
                </div>
            </div>
            <div className="banner">
            < UncontrolledExample></UncontrolledExample>
            </div>
        </>
    )
}