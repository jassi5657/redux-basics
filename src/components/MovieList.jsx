import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectMovieAction } from '../actions'

const MovieList = () => {
    const {movies} = useSelector((state) => state )
    const dispatch = useDispatch()
    const handleDetails = (movie)=>{
        dispatch(selectMovieAction(movie))
        

    }
  return (
    <div className='list-container'>
    {
        movies.map((movie)=>(
            <div key={movie.id} className="mov-col">
                <p>{movie.id}</p>
                <h5>{movie.title}</h5>
                <strong>{movie.lead}</strong>
                <p>{movie.year}</p>
                <button onClick={() => {handleDetails(movie)}}>View</button>
        </div>
        ))
    }
    </div>
  )
}

export default MovieList