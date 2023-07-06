import "../../index.css"
import { CDN_url } from "../utils/constant";

export const RestroCard=(props)=>{
    const {resData}=props;
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
            <button>Add To Cart</button>
        </div>
    )
}