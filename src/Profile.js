import React from 'react';


class Profile extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'Tejpratap',
            email: 'tej@gmail.com'
        }
    }

    componentDidMount() {
        console.warn("called life cycle");
    }

    updateName() {
        this.setState({
            name: 'Tej'
        })
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>Profile Component</h1>
                <h1>{this.props.data}</h1>
                <h1>State : {this.state.name}</h1>
                <h1>Email : {this.state.email}</h1>
                <button onClick={()=>{this.updateName()}}>Update Name</button>
            </div>
        )
    }
}

export default Profile;