import { useState, useEffect } from 'react'
import { Jumbotron, Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import '../styles/home.css'
import MovieRow from './MovieRow'
import MyJumbotron from './MyJumbotron'

const Genre = () => {
  const [movieRow, setMovieRow] = useState([])

  const [searchQuery, setSearchQuery] = useState('')
  const [searchMovieRowTitle, setSearchMovieRowTitle] = useState('')
  const [searchMovieRow, setSearchMovieRow] = useState([])

  const { genre } = useParams()

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    const response = await fetch(
      `https://imdb-api.com/API/AdvancedSearch/k_xtso692i/?genres=${genre}`,
    )
    if (response.ok) {
      const data = await response.json()
      setMovieRow(data.results)
      console.log('movieRow', movieRow)
    }
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

      {!searchQuery ? (
        <>
          <MovieRow
            title={genre.charAt(0).toUpperCase() + genre.slice(1)}
            movies={movieRow.slice(0, 18)}
          />
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

export default Genre
