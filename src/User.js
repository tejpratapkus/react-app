import React, {Component, PureComponent} from 'react';

class User extends Component {

    componentWillUnmount() {
        alert("User details has been deleted!")
    }

    render() {
        return (<div>
            <ul>
                <li>Name: Tej</li>
                <li>Email: tej@gmail.com</li>
                <li>Mob. No: 89798685757</li>
            </ul>
        </div>);
    }

}

export default User;