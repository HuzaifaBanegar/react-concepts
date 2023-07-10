import React from "react";
import './Navbar.css'
// import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

export const Navbar=()=>{

    const navbar=[
        {title:'Home', to:'/about'},
        {title:'Skills', to:'/skills'},
        {title:'Project', to:'/project'},
        {title:'Testimonials', to:'/testimonials'},
        {title:'Contact', to:'/contact'}
    ]

    return(
        <div id="Navbar" >
            <h2>Huzaifa Banegar</h2>
            <div className="navigation">
                {
                    navbar.map((e)=>{
                         return <Link to={e.to}>{e.title}</Link>
                    })
                   
                }
                
            </div>
            
        </div>
    )
}