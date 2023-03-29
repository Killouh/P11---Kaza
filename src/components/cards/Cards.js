import React from 'react'
import {useParams} from "react-router-dom"



export default function Cards() {
    const params = useParams()
    console.log(params);
  return (
    <div>
        <h1>Cards</h1>
        </div>
  )
}
