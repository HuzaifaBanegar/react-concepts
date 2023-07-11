import React from 'react';
import './About.css'
export class About extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            count:0
        }
    }
    render(){
        const {name, age}= this.props.data;
        const {count}= this.state;
        return (
            <div id='about'>
                <h1>About Us</h1>
                <h1>Count: {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    })
  
                }}>Increaste Count</button>
                <h1>Name: {name}</h1>
                <h1>Age: {age}</h1>
            </div>
        )
    }
}

//How to take props

// export class About extends React.Component{
    // constructor(props){
    //     super(props){
    //         console.log(this.props)
                // this.state={
                //     count:0
                // }
    //     }
    // }
//     render(){
//         return (
//             <div id='about'>
//                 <h1>About Us</h1>
//             </div>
//         )
//     }
// }