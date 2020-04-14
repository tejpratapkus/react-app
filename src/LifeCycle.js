import React from 'react';

export default class LifeCycle extends React.Component {

    constructor() {
        super();
        this.state = {
            data:null
        }
        console.warn("constructor1");
    }

    componentDidMount() {
        console.warn("componentDidMount1");
    }

    render() {
        console.warn("render1");

        return(
            <div>
                <h1>Life Cycle Class</h1>
            </div>
        )
    }

}