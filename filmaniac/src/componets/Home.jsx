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
    const OMDB_URL = 'https://www.omdbapi.com/?apikey=fc9ce628'

    Promise.all([
      fetch(OMDB_URL + '&s=taxi')
        .then((response) => response.json())
        .then((responseObject) => {
          if (responseObject.Response === 'True') {
            setMovieRow1(responseObject.Search)
          }
        }),
      fetch(OMDB_URL + '&s=travel')
        .then((response) => response.json())
        .then((responseObject) => {
          if (responseObject.Response === 'True') {
            setMovieRow2(responseObject.Search)
          }
        }),
      fetch(OMDB_URL + '&s=nature')
        .then((response) => response.json())
        .then((responseObject) => {
          if (responseObject.Response === 'True') {
            setMovieRow3(responseObject.Search)
          }
        }),
    ])
  }

  return (
    <>
      <Jumbotron className="text-center d-flex flex-column justify-content-center mb-0">
        <h1 className="mb-3">For film lovers.</h1>

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
      <MovieRow title="Taxi movies" movies={movieRow1.slice(0, 6)} />
      <MovieRow title="Travel movies" movies={movieRow2.slice(0, 6)} />
      <MovieRow title="Nature movies" movies={movieRow3.slice(0, 6)} />
    </>
  )
}

export default Home
