import React from 'react'
import { useSelector } from 'react-redux'

const MovieDetails = () => {
    const {selectedMovie} = useSelector(state => state)
  return (
    <div>
        <h3>movie detail</h3>
        {
            selectedMovie ? 
            <>
            <h5>{selectedMovie.title}</h5>
            <strong>{selectedMovie.lead}</strong>
            <p>{selectedMovie.title}</p>
            
            </> : "please enter movie"
        } 

        

    </div>
  )
}

export default MovieDetails