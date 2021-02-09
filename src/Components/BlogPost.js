import React from 'react';
import { useParams } from 'react-router-dom';
import Fetch from './Fetch';

const BlogPost = () => {
    const { id } = useParams();
    const {data: blog, loadStatus, errorStatus} = Fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    return(
        <div>
            <h1>{loadStatus && <div>Loading...</div>}</h1>
            <h1>{errorStatus && errorStatus}</h1>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
        </div>
    )
}

export default BlogPost;