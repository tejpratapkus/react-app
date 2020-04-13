import React from 'react';

//export default function FunctionalProfile() {
export default function FunctionalProfile(props) {

    const red = () => {
        alert("red function called");
    }

   // return <div onClick={red}><h1>FunctionalProfile Component</h1></div>
    return <div onClick={red}>
            <h1>{props.text.name}</h1>
            <h1>{props.data}</h1>
        </div>

}