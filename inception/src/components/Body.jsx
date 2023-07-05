import { useState } from "react";
import "../../index.css"
import { resData } from '../utils/Jsondata.js'
import { UncontrolledExample } from "./Carousal";
import { RestroCard } from "./RestroCard";
export const Body=()=>{

    const [listOfRestaurants, setListOfRestaurant]= useState(resData);
    console.log(listOfRestaurants)

    return (
        <div className="mainbody" >
            
            <div className="banner">
                < UncontrolledExample></UncontrolledExample>
            </div>
            <div className="searchBar">
                <input type="text" placeholder="Search By Restaurant Or Cuisine"></input>
                <button>Search</button>
            </div>
            <div className="restroContainer">
                {
                  listOfRestaurants.map(e=>{
                    return <RestroCard key={e.data.id} resData={e.data}></RestroCard>
                  }) 
                }
            </div>
        </div>
    )
}
