import React from 'react';


class Profile extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        console.warn("called life cycle");
    }

    render() {
        return (
            <div>
                <h1>Profile Component</h1>
                <h1>{this.props.data}</h1>
                <h1>{this.props.text.name}</h1>
            </div>
        )
    }
}

export default Profile;