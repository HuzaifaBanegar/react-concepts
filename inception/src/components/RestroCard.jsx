import "../../index.css"
import { CDN_url } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem , removeItem} from "../utils/cartSlice";



export const RestroCard=(props)=>{
    const {resData}=props;

    // console.log(resData)
    const dispatch= useDispatch()
    
    const handleCart=()=>{
        alert("added item")
        dispatch(addItem(resData))
    }
    const removeCart=()=>{
        alert("removed item")
        
    }
    return(
        <div className="restroCard">
            <div className="thumbnail">
                <img src={CDN_url+resData.cloudinaryImageId}></img>
            </div>
            <div className="restroDetails">
                <div className="about_restro">
                    <strong>{resData.name}</strong>
                </div>
                <div className="feat_restro">
                    <p>Cuisine: {resData.cuisines[0]}</p>
                    <p>Price For Two: {resData.costForTwo/100} Rs</p>
                </div>
                <div className="rating_Del">
                <p>Rating: {resData.avgRating} </p>
                <p>Delivers in: {resData.maxDeliveryTime} mins</p>
                </div>
                
            </div>
            <button onClick={handleCart}>Add To Cart</button>
            <button onClick={removeCart}>Remove from Cart</button>
        </div>
    )
}