import { useState } from 'react'

import './App.css'
import MovieDetails from './components/MovieDetails'
import MovieList from './components/MovieList'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <MovieList/>
      <MovieDetails/>

    </>
  )
}

export default App
