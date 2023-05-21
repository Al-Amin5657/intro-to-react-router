import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();


    const handlenavigate = () => {
        navigate(`/post/${id}`);

    }

    return (
        <div className='post'>
            <h5>Id: {id}</h5>
            <h3>Title: {post.title}</h3>
            <Link to={`/post/${id}`}> Show Details</Link>
            <Link to={`/post/${id}`}><button>Show post details</button></Link>
            <button onClick={handlenavigate}>With Button Handler</button>

        </div>
    );
};

export default Post;