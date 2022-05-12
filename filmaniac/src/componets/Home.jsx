import '../styles/home.css'
import { useState, useEffect } from 'react'
import { Jumbotron, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import MovieCarouselRow from './MovieCarouselRow'
import MovieRow from './MovieRow'
import MyJumbotron from './MyJumbotron'
import { getMovieLoadingAction } from '../redux/actions'

const Home = () => {
  const [movieRow1, setMovieRow1] = useState([])
  const [movieRow2, setMovieRow2] = useState([])
  const [movieRow3, setMovieRow3] = useState([])
  const [movieRow4, setMovieRow4] = useState([])
  const [movieRow5, setMovieRow5] = useState([])

  const [searchQuery, setSearchQuery] = useState('')
  const [searchMovieRowTitle, setSearchMovieRowTitle] = useState('')
  const [searchMovieRow, setSearchMovieRow] = useState([])

  // const areMoviesLoading = useSelector((state) => state.movie.isLoading)
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = () => {
    Promise.all([
      fetch(
        'https://imdb-api.com/API/AdvancedSearch/k_xtso692i/?genres=fantasy&count=18',
      )
        .then((response) => response.json())
        .then((responseObject) => {
          console.log(responseObject.results)
          setMovieRow1(responseObject.results)
        }),
      fetch(
        'https://imdb-api.com/API/AdvancedSearch/k_xtso692i/?genres=documentary&count=18',
      )
        .then((response) => response.json())
        .then((responseObject) => {
          console.log(responseObject.results)
          setMovieRow2(responseObject.results)
        }),
      fetch(
        'https://imdb-api.com/API/AdvancedSearch/k_xtso692i/?genres=action&count=18',
      )
        .then((response) => response.json())
        .then((responseObject) => {
          console.log(responseObject.results)
          setMovieRow3(responseObject.results)
        }),
      fetch(
        'https://imdb-api.com/API/AdvancedSearch/k_xtso692i/?genres=sci-fi&count=18',
      )
        .then((response) => response.json())
        .then((responseObject) => {
          console.log(responseObject.results)
          setMovieRow4(responseObject.results)
        }),
      fetch(
        'https://imdb-api.com/API/AdvancedSearch/k_xtso692i/?genres=drama&count=18',
      )
        .then((response) => response.json())
        .then((responseObject) => {
          console.log(responseObject.results)
          setMovieRow5(responseObject.results)
        }),
    ]).then(setIsLoading(false))
  }

  const handleSearchQuery = async (e) => {
    e.preventDefault()

    const response = await fetch(
      `https://imdb-api.com/en/API/SearchMovie/k_xtso692i/${searchQuery}`,
    )
    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      setSearchMovieRowTitle(data)
      setSearchMovieRow(data.results)
      dispatch(getMovieLoadingAction())
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
          <MovieCarouselRow
            title="Fantasy"
            nestedMovies={
              movieRow1
              // [
              // movieRow1.slice(0, 6),
              // movieRow1.slice(6, 12),
              // movieRow1.slice(12, 18),
              // ]
            }
            isLoading={isLoading}
          />
          <MovieCarouselRow title="Documentary" nestedMovies={movieRow2} />
          <MovieCarouselRow title="Action" nestedMovies={movieRow3} />
          <MovieCarouselRow title="Sci-fi" nestedMovies={movieRow4} />
          <MovieCarouselRow title="Drama" nestedMovies={movieRow5} />
        </>
      ) : (
        <MovieRow
          title={searchMovieRowTitle.expression}
          movies={searchMovieRow}
          searchResult={searchMovieRowTitle}
          isLoading={isLoading}
        />
      )}
    </>
  )
}

export default Home
