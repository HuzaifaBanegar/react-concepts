import { useState } from "react";
import { AuthContext } from "../Components/AuthContext";
import { useContext } from "react";
export const Home=()=>{
    const {handleToken}=useContext(AuthContext); 
    const [formData, setFormData]=useState({
        email:"",
        password: ""
    })

    const handleChange=(e)=>{
        const {name, value}=e.target;
        setFormData({...formData, [name]:value});
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        let login_data= formData;
        let loginData= JSON.stringify(login_data);
        let res= await fetch('https://reqres.in/api/login',{
            method:"POST",
            body:loginData,
            headers:{'Content-type':'application/json'}
        });
        let data=await res.json();
        // console.log(data);
        if(data.token){
            handleToken(data.token);
            alert('Login successful')
        }else{
            alert('Authentication failed')
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="email" placeholder="email" onChange={handleChange}></input>
                <input name="password" placeholder="password" onChange={handleChange}></input>
                <input name="submit" type="submit"></input>
            </form>
        </div>
    )
}