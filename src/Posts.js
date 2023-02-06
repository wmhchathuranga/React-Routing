import React, { useEffect, useState } from 'react'
import Spinner from './components/Spinner';
import MyTable from './components/MyTable';

export default function Posts() {

    const [posts, SetPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(
        GetPosts, []
    )

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (

                <MyTable data={posts} />

            )}
        </>
    )

    function GetPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts").then(
            (res) => res.json()
        ).then(
            (response) => {
                SetPosts(response);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1700);
            }
        ).catch(
            (error) => console.log(error)
        )
    }
}
