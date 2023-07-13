import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "./src/components/Footer";
import { Header } from "./src/components/Header";
import { Body } from "./src/components/Body";

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
import { Provider } from "react-redux";
import store from "./src/utils/store";

  const AppLayout=()=>{
    return (
        <Provider store={store}>
            <div className="app">
                <Header/>
                <Body></Body>
                <Footer/>
            </div>
        </Provider>
    )
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)


