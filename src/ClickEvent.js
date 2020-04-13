import React from 'react';

// class
/*export default class ClickEvent extends React.Component {

    testFun() {
        alert('Test Fun');
    }

    render() {
        return(
            <div>
                <h1>Click Event</h1>
                <button onClick={()=>this.testFun()}>Click Me</button>
                or
                <button onClick={this.testFun.bind()}>Click Me</button>
            </div>
        )
    }
} */

// function
export default function ClickEvent() {

    function testFun() {
        alert('Test Fun');
    }

    const testFun1 = ()=>{
        alert('Test fun1'); // better way
    }

        return(
            <div>
                <h1>Click Event</h1>
                <button onClick={testFun}>Click Me</button>
                <button onClick={testFun1}>Click Me</button>
            </div>
        )
}