import { useEffect, useState } from "react";
import "../../index.css"
import { Shimmer } from "./Shimmer";
import { RestroCard } from "./RestroCard";
export const Body=()=>{

    const [listOfRestaurants, setListOfRestaurant]= useState([]);
    const [filteredList, setFilteredList]=useState([]);
    const [searchText, setSearchtext]=useState('');
    // console.log(searchText)


    useEffect(()=>{
        fetchData();
    },[])

    const handleSubmit=()=>{
        
        let filteredList = listOfRestaurants.filter(e=>{
            return e.data.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setFilteredList(filteredList);
    }

    const fetchData=async()=>{
        let res= await fetch (`https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING`);
        let data= await res.json();
        let finalData = data?.data?.cards[2]?.data?.data?.cards
        setListOfRestaurant(finalData);
        setFilteredList(finalData);
    }

   if(listOfRestaurants.length===0){
    return (
        <div className="mainbody" > 
            <div className="searchBar">
                <input type="text"  placeholder="Search By Restaurant Or Cuisine" ></input>
                <button>Search</button>
            </div>
            <div className="restroContainer">
                <Shimmer></Shimmer>
                    
            </div>
        </div>
        
    )
   }

    return (
        <div className="mainbody" > 
            <div className="searchBar">
                <input type="text" placeholder="Search By Restaurant Or Cuisine" value={searchText} onChange={(e)=>{
                    setSearchtext(e.target.value);
                }}></input>
                <button onClick={
                    handleSubmit
                }>Search</button>
            </div>
            <div className="restroContainer">
                {
                    filteredList.map(e=>{
                        return <RestroCard key={e.data.id} resData={e.data}></RestroCard>
                    }) 
                    
                }
            </div>
        </div>
    )
}
