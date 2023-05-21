import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    // console.log(friend);
    const { id, name, phone, email } = friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p><Link to={`/friend/${id}`}>Show me detail</Link></p>
        </div>
    );
};

export default Friend;