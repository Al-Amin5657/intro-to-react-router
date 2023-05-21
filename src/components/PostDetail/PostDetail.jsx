import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    console.log(post)
    const { id, title, body } = post;
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h3>Details about your post: {id}</h3>
            <h2>Title:{post.title}</h2>
            <p><small>{post.body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;