import { useState, useEffect } from 'react'
import { Container, Jumbotron, Button, Form } from 'react-bootstrap'
import '../styles/home.css'
import MovieGallery from './MovieGallery'

const Home = () => {
  const [plot, setPlot] = useState('')

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    try {
      const response = await fetch(
        'http://www.omdbapi.com/?i=tt3896198&apikey=fc9ce628&t=harry',
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setPlot(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Jumbotron className="text-center d-flex flex-column justify-content-center mb-0">
        <h1>Unlimited movies, for movie lovers.</h1>

        <h3>
          Find your favorite directors, actors and actresses of your taste.
        </h3>

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
      <div className="mx-3">
        <MovieGallery />
        <p>{plot.Plot}</p>
      </div>
    </>
  )
}

export default Home
