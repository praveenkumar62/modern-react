import React from 'react';

const BlogList = (props) => {
    // Method - 1
    // const {passList} = props;    

    // Method - 2
    const blogs = props.passList;
    const blogTitle = props.passTitle;
    const blogDelete = props.passDelete;

    let listing;
    if (blogTitle === 'Blog') {
        listing = blogs.map((item) => (
            <div className="list-item" key={item.id}>
                <li>{item.id}</li>
                <li>{item.name}</li>
                <li>{item.rating}</li>
                <li><button className="btn" onClick={() => blogDelete(item.id)}>Delete</button></li>
            </div>
        ));
    } else {
        listing = blogs.map((item) => (
            <div className="list-item" key={item.id}>
                <li>{item.id}</li>
                <li>{item.name}</li>
                <li>{item.rating}</li>
            </div>
        ));
    }
    return(
        <div className="lists">
            <h2 style={{textAlign: 'center'}}>{blogTitle}</h2>
            {listing}
        </div>
    )
}

export default BlogList;