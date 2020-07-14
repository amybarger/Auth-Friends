import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'

const FriendsList = () => {

const [friends, setFriends] = useState([]);

useEffect(() => {
    axiosWithAuth()
        .get('/api/friends')
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
}, [])

console.log("Friends state available", friends)

return (
    <div>
        {friends.map(friend => {
            return(
                <div key={friend.id}>
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            )
        })}
    </div>
    )
}

export default FriendsList;

