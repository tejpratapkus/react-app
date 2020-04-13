import React from 'react';


class Profile extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'Tejpratap',
            email: 'tej@gmail.com',
            show: true
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
                {
                    this.state.show ? <h1>Profile Component</h1> : null
                }
                 <button onClick={()=>{this.setState({show: !this.state.show})}}>Toggle Me</button>
                <h1>{this.props.data}</h1>
                <h1>State : {this.state.name}</h1>
                <h1>Email : {this.state.email}</h1>
                <button onClick={()=>{this.updateName()}}>Update Name</button>
            </div>
        )
    }
}

export default Profile;