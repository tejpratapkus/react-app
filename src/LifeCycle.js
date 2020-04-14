import React from 'react';

export default class LifeCycle extends React.Component {

    constructor() {
        super();
        this.state = {
            active: null,
            who: null

        }
        console.warn("constructor1");
    }

    componentDidMount() {
        console.warn("componentDidMount1");
    }

    componentDidUpdate() {
        console.warn("Update state")
        if (this.state.who == null) {
            this.setState({ who: "Tej" })
        }
    }

    render() {
        console.warn("render1");

        return (
            <div>
                <h1>Life Cycle Class {this.state.who}</h1>
                <button onClick={() => { this.setState({ active: "Yes" }) }}>Activate</button>
            </div>
        )
    }

}