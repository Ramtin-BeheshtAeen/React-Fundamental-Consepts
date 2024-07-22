import {React, useRef} from 'react';

function UseRef_Caching() {

    let data = useRef(null)
    const pTag = useRef()

    async function fetchData(){
        try 
        {
            const response = await  fetch('https://dummyjson.com/carts/1')
            // Replace with your API endpoint

            if (!response.ok)
            {
            throw new Error('Network response was not ok.');
            }

            data = await response.json();

        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
       
    }

    function showData(){
        pTag.current.innerHTML = JSON.stringify(data)
    }

    return (
        <div>
            <h1>UseRef_Caching</h1>
            <p ref={pTag} >Data will be shown here</p>
            <button onClick={fetchData}> FetchData </button>
            <br/>
            <button onClick={showData}> ShowData </button>
        </div>
    );
};


export default UseRef_Caching;