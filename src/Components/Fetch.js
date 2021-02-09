import { useState, useEffect } from 'react';

const Fetch = (url) => {

    const [data, setData] = useState(false);
    const [loadStatus, setLoadStatus] = useState(true);
    const [errorStatus, setErrorStatus] = useState(false);
    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error('Issues from the Server')
            }
            return res.json();
        })
        .then(res => {
            setData(res);
            setLoadStatus(false);
        })
        .catch(err => {
            setLoadStatus(false)
            setErrorStatus(err.message);
        })
        // If any change in URL will render again by passing [passUrl]
    }, [url])
    return {data, loadStatus, errorStatus}
}

export default Fetch;