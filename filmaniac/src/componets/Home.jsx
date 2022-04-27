import { useState, useEffect } from 'react'
import { Container, Jumbotron, Button, Form } from 'react-bootstrap'
import '../styles/home.css'
import MovieRow from './MovieRow'

const Home = () => {
  const [movieRow1, setMovieRow1] = useState([])
  const [movieRow2, setMovieRow2] = useState([])
  const [movieRow3, setMovieRow3] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = () => {
    Promise.all([
      fetch('https://imdb-api.com/en/API/Top250Movies/k_xtso692i')
        .then((response) => response.json())
        .then((responseObject) => {
          console.log(responseObject.items)
          setMovieRow1(responseObject.items)
        }),
      fetch('https://imdb-api.com/en/API/MostPopularMovies/k_xtso692i')
        .then((response) => response.json())
        .then((responseObject) => {
          console.log(responseObject.items)
          setMovieRow2(responseObject.items)
        }),
      fetch('https://imdb-api.com/en/API/Keyword/k_xtso692i/dramas')
        .then((response) => response.json())
        .then((responseObject) => {
          console.log(responseObject.items)
          setMovieRow3(responseObject.items)
        }),
    ])
  }

  return (
    <>
      <Jumbotron className="text-center d-flex flex-column justify-content-center mb-0">
        <h1 className="mb-3">Make your own cinema.</h1>

        <h3>Find directors, actors and actresses of your taste.</h3>

        <Form className="d-flex justify-content-center mt-3">
          <Form.Group className="mb-0">
            <Form.Control
              type="text"
              placeholder="Movie, director, actor/actress.."
            />
          </Form.Group>
          <Button variant="warning type='submit ">Search</Button>
        </Form>
      </Jumbotron>
      <MovieRow title="Best movies" movies={movieRow1.slice(0, 6)} />
      <MovieRow title="Popular movies" movies={movieRow2.slice(0, 6)} />
      <MovieRow title="Drama movies" movies={movieRow3.slice(0, 6)} />
    </>
  )
}

export default Home
