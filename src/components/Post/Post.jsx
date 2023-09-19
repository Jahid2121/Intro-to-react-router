import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;
    const postStyle =  {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        
    }
    return (
        <div style={postStyle}>
            <h4>id: {post.id}</h4>
            <p style={{flexGrow:1}}>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button className='btn'>Show Details</button></Link>
            <button>Click to see detaills</button>
        </div>
    );
};

export default Post;