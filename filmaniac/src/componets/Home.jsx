import { useState, useEffect } from 'react'
import { Jumbotron, Button, Form } from 'react-bootstrap'
import '../styles/home.css'
import MovieRow from './MovieRow'
import MyJumbotron from './MyJumbotron'

const Home = () => {
  const [movieRow1, setMovieRow1] = useState([])
  // const [movieRow2, setMovieRow2] = useState([])
  // const [movieRow3, setMovieRow3] = useState([])
  // const [movieRow4, setMovieRow4] = useState([])
  // const [movieRow5, setMovieRow5] = useState([])

  const [searchQuery, setSearchQuery] = useState('')
  const [searchMovieRowTitle, setSearchMovieRowTitle] = useState('')
  const [searchMovieRow, setSearchMovieRow] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = () => {
    Promise.all([
      fetch('https://imdb-api.com/en/API/Top250Movies/k_xtso692i')
        .then((response) => response.json())
        .then((responseObject) => {
          setMovieRow1(responseObject.items)
        }),
      // fetch('https://imdb-api.com/en/API/MostPopularMovies/k_xtso692i')
      //   .then((response) => response.json())
      //   .then((responseObject) => {
      //     console.log(responseObject.items)
      //     setMovieRow2(responseObject.items)
      //   }),
      // fetch('https://imdb-api.com/API/AdvancedSearch/k_xtso692i/?genres=action')
      //   .then((response) => response.json())
      //   .then((responseObject) => {
      //     console.log(responseObject.results)
      //     setMovieRow3(responseObject.results)
      //   }),
      // fetch('https://imdb-api.com/API/AdvancedSearch/k_xtso692i/?genres=sci-fi')
      //   .then((response) => response.json())
      //   .then((responseObject) => {
      //     console.log(responseObject.results)
      //     setMovieRow4(responseObject.results)
      //   }),
      // fetch('https://imdb-api.com/API/AdvancedSearch/k_xtso692i/?genres=drama')
      //   .then((response) => response.json())
      //   .then((responseObject) => {
      //     console.log(responseObject.results)
      //     setMovieRow5(responseObject.results)
      //   }),
    ])
  }

  const handleSearchQuery = async (e) => {
    e.preventDefault()

    const response = await fetch(
      'https://imdb-api.com/en/API/SearchMovie/k_xtso692i/' + searchQuery,
    )
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      setSearchMovieRowTitle(data)
      setSearchMovieRow(data.results)
    }
  }

  return (
    <>
      <Jumbotron className="text-center d-flex flex-column justify-content-center mb-0 home-jumbotron">
        <MyJumbotron />
        <Form
          className="d-flex justify-content-center mt-3"
          onSubmit={handleSearchQuery}
        >
          <Form.Group className="mb-0">
            <Form.Control
              type="text"
              placeholder="Movie title"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
          <Button variant="warning" type="submit">
            Search
          </Button>
        </Form>
      </Jumbotron>

      {!searchMovieRowTitle ? (
        <>
          <MovieRow title="Best movies" movies={movieRow1.slice(0, 6)} />
          {/* <MovieRow title="Popular movies" movies={movieRow2.slice(0, 6)} />
          <MovieRow title="Action" movies={movieRow3.slice(0, 6)} />
          <MovieRow title="Sci-fi" movies={movieRow4.slice(0, 6)} />
          <MovieRow title="Drama" movies={movieRow5.slice(0, 6)} /> */}
        </>
      ) : (
        <MovieRow
          title={searchMovieRowTitle.expression}
          movies={searchMovieRow}
          searchResult={searchMovieRowTitle}
        />
      )}
    </>
  )
}

export default Home
