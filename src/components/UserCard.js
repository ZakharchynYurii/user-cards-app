import React, {Component} from 'react';
import './UserCard.css'

class UserCard extends Component {
    render() {
        let {user, cls} = this.props;
        let {id, name, username, email, phone, address} = user;
        let {street, suite, city} = address;
        return (
            <div className={cls}>
                <h2>User: {id} <span>{name}</span> <span>{username}</span></h2>
                <div>
                    <div>
                        <h4>Contact</h4>
                        <div>email: {email}</div>
                        <div>phone: {phone}</div>
                    </div>
                    <div>
                        <h4>User address</h4>
                        <div>City: {city}</div>
                        <div>Street: {street}</div>
                        <div>Suite: {suite}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;