import React from 'react';
import FriendsList from './FriendsList';
import { Link } from 'react-router-dom';

const FriendsPage = () => {
    return (
        <div>
            <h2>Protected route to friend's page</h2>
            <FriendsList />
            <Link to='/protected/addfriend'><button>Add Friend</button>
            </Link>
        </div>
    )
}

export default FriendsPage;