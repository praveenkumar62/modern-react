import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [adding, setAdding] = useState(false);
    const [names, setNames] = useState('');
    const [age, setAge] = useState('');
    const [rating, setRating] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        setAdding(true);

        const data = {
            name: names,
            age: age,
            rating: rating
        }
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(() => {
            console.log('success');
            setAdding(false);
            // history.go(-1);
            history.push('/blog');
        })
        .catch((err) => {
            console.log(err.message);
            setAdding(false);
        })

        setNames('');
        setAge('');
        setRating('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" name="name" value={names} onChange={(e) => setNames(e.target.value)} required />
            <label>Age: </label>
            <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} required />
            <label>Rating: </label>
            <input type="number" name="rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
            {!adding && <button className="form-btn">Add</button>}
            {adding && <button className="form-btn">Adding to Blog...</button>}
        </form>
    )
}

export default Create