import React from "react";
import ReactDOM from "react-dom";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import { resData } from "./Jsondata";


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img id="banner_img"
          className="d-block w-100"
          src="https://i.pinimg.com/originals/ec/39/b7/ec39b7e310db6498bc447e796061b097.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="banner_img"
          className="d-block w-100"
          src="https://i.fbcd.co/products/original/8d5f8dde27a4b74b2270e56f92435f1afd42d96735cf5e1ba3299b7e6c720b78.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="banner_img"
          className="d-block w-100"
          src="https://i.pinimg.com/originals/18/57/c3/1857c3f70ce5b9a9e6be0244274809a2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}




/*
*Header
-Logo
NavItems
*Body
-Search
-Slider/Carousal
-RestroContainer
    -Cards
        -image
        -Name
        -star
        -cuisine
        -delivery time
        -button
*Footer
-CopyRights
-Links
-Address
-Contacts
*/ 


const RestroCard=(props)=>{
    const {resData}=props;
    console.log(resData)
    return(
        <div className="restroCard">
            <div className="thumbnail">
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+resData.cloudinaryImageId}></img>
            </div>
            <div className="restroDetails">
                <div className="about_restro">
                    <h6>{resData.name}</h6>
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

const Body=()=>{
    return (
        <div className="mainbody" >
            
            <div className="banner">
                < UncontrolledExample></UncontrolledExample>
            </div>
            <div className="searchBar">
                <input type="text"></input>
                <button>Search</button>
            </div>
            <div className="restroContainer">
                {
                  resData.map(e=>{
                    return <RestroCard key={e.data.id} resData={e.data}></RestroCard>
                  }) 
                }
            </div>
        </div>
    )
}








const Header= ()=>{
    return (
        <div className="header">
            <div className="logo"> 
                <img src="https://i.pinimg.com/564x/a7/88/07/a788073bd8d00588d777abc11f6902bf.jpg"></img>
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

const Footer=()=>{
    return(
        <div className="footer">
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="subscription">
                <h5>Subscibe to our News Letter</h5>
                <input type="email"></input>
                <button>Subscibe</button>
            </div>
            <div className="copyright">
                <h5>© CopyRights by Huzaifa 😉</h5>
                <p>Contact: banegarhuzzi1010@gmail.com</p>
            </div>
        </div>
    )
}

const AppLayout=()=>{
    return (
        <div className="app">
            {Header()}
            <Body></Body>
            <Footer/>
            
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)


