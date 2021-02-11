import React, {Component} from 'react';

import UserCard from "./components/UserCard";

import {users} from './database/users';

class App extends Component {
    render() {
        return (
            <div>
                {
                    users.map((user) => {
                        return(
                            <UserCard key={user.id} user={user}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default App