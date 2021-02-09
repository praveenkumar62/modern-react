import React from 'react';
import {Link} from 'react-router-dom';
import Fetch from './Fetch';

const Blog = () => {

    const {data, loadStatus} = Fetch('https://jsonplaceholder.typicode.com/posts');
    return(
        <div>
            { loadStatus && 
            <p>{loadStatus}</p>
            }
            { data && data.map((item) => {
                return(
                    <div key={item.id} style={{padding: '20px 0', margin: '20px', borderBottom: '1px solid #ccc'}}>
                        <Link to={'/blogs/' + item.id}>{item.title}</Link>
                    </div>
                )
            }) }
        </div>
    )
}

export default Blog;