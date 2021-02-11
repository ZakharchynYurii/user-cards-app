import React, {Component} from 'react';

import UserCard from "./components/UserCard";

import {users} from './database/users';

class App extends Component {
    render() {
        return (
            <div>
                {
                    users.map((user,index) => {
                        let cls = index % 2 ? 'even' : 'odd';
                        return(
                            <UserCard cls={cls} key={user.id} user={user}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default App