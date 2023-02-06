import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from './components/Spinner';
import MyTable from './components/MyTable';

export default function SinglePost() {

  const { id } = useParams(1);
  const [post, SetPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => (GetPost(id)), []
  )

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <MyTable data={post}/>
      )}
    </>
  )




  function GetPost(id) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id).then(
      (res) => res.json()
    ).then(
      (response) => {
        SetPost(response);
        setTimeout(() => {
          setIsLoading(false);
        }, 1700);
      }
    )
  }
}
