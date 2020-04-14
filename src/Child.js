import React from 'react';

export default class Child extends React.Component {

    sendData = () => {
        this.props.parentCallback("Hey Popsie, How’s it going?");
    }

    render() {
        //you can call function sendData whenever you'd like to send data from child component to Parent component.
   
        return <div>
            <button onClick={this.sendData}>Click</button>
        </div>

    }
};