import { useState, useEffect } from 'react'
import { Container, Jumbotron, Button, Form } from 'react-bootstrap'
import '../styles/home.css'
import MovieRow from './MovieRow'

const Favorite = () => {
  const [movieRow1, setMovieRow1] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    const response = await fetch(
      'https://www.omdbapi.com/?apikey=fc9ce628&s=kill',
    )
    if (response.ok) {
      const data = await response.json()
      console.log(data.Search)
      setMovieRow1(data.Search)
    }
  }

  return (
    <>
      <MovieRow title="Movies you liked" movies={movieRow1} />
    </>
  )
}

export default Favorite
