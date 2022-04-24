import { useEffect } from 'react'
import { Container, Jumbotron, Button, Form } from 'react-bootstrap'
import '../styles/home.css'

const Home = () => {
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
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Jumbotron className="text-center d-flex flex-column justify-content-center">
        <h1>Hello, world!</h1>

        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>

        <Form className="d-flex justify-content-center">
          <Form.Group className="mb-0">
            <Form.Control
              type="text"
              placeholder="Movie, director, actor/actress.."
            />
          </Form.Group>
          <Button variant="warning type='submit">Search</Button>
        </Form>
      </Jumbotron>
      <div></div>
    </>
  )
}

export default Home
