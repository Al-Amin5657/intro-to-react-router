import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h3>EveryThing about this person is here.</h3>
            <h3>{friend.name}</h3>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;