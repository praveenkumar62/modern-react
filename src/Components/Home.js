import React from 'react';
import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import Fetch from './Fetch';

const Home = () => {
    const [stateBtn, setStateBtn] = useState('Check Date');
    const handle = () => {
        let date = new Date();
        setStateBtn(date.toDateString());
    }

    // --------------------------------------------------------------------

    // useEffect runs every time
    useEffect(() => {
        console.log('use effect runs evertime');
    });

    // useEffect runs only once
    useEffect(() => {
        console.log('use effect running once');
    }, []);

    // useEffect runs only when specific state changes
    useEffect(() => {
        console.log('use effect runs only when specific state changes');
    }, [stateBtn]);

    // --------------------------------------------------------------------

    // If we are passing data as API
    // const [list, setUpdatedList] = useState([
    //     { id: 1, name: 'Praveen', age: 23, rating: 4 },
    //     { id: 2, name: 'Gokul', age: 24, rating: 4.5 },
    //     { id: 3, name: 'Sree', age: 25, rating: 2 },
    //     { id: 4, name: 'Ram', age: 20, rating: 4.3 },
    //     { id: 5, name: 'Sarath', age: 27, rating: 3 }
    // ]);
    const [list, setUpdatedList] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then((res) => {
            if(!res.ok) {
                throw new Error('Server doesn\'t respond. Please try again later');
            }
            return res.json();
        })
        .then(data => {
            setUpdatedList(data)
            setLoadingState(false)
        })
        .catch(err => {
            const error = err.message;
            setUpdatedList( [{name: error}] )
            setLoadingState(false)
        })
    }, []);

    // if list is not null then execute
    const popularBlog = list && list.filter(item => {
        return item.rating >= 4;
    });

    const blogDelete = (e) => {
        // Delete in Frontend
        const blogDeleted = list.filter((item) => e !== item.id);
        setUpdatedList(blogDeleted);

        // Deleting from JSON 
        fetch('http://localhost:8000/blogs/' + e, {
            method: 'DELETE'
        })
        .then(() => {
            console.log('deleted')
        })
        .catch(() => {
            console.log('unable to delete due to server issue')
        })
    }

    // --------------------------------------------------------------------

    const [isLoading, setLoadingState] = useState(true);
    //Hiding loading screen when API shows data in above useEffect

    // --------------------------------------------------------------------

    // To LEARN ONLY - Just check the Fetch.js on How to reuse & Check in Console for data
    const {data, loadStatus, errorStatus} = Fetch('http://localhost:8000/blogs');
    console.log(data,loadStatus,errorStatus);

    // --------------------------------------------------------------------

    return(
        <div>
            <div className="home-container">
                <h1>Welcome
                    <button className="float-right btn" onClick={handle}>{stateBtn}</button>
                    <div className="clearfix"></div>
                </h1>
                {/* if list is not null then execute */}
                {isLoading && <div style={{textAlign:'center'}}>Loading... Please wait</div>}
                {list && <BlogList passList={list} passTitle="Blog" passDelete={blogDelete} />}
                
            </div>
            <div className="sidebar-container">
                {/* if list is not null then execute */}
                {list && <BlogList passList={popularBlog} passTitle="Popular Blog" />}
            </div>
        </div>
    )
}

export default Home;