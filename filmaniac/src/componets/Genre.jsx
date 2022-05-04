// TRY TO MAKE IT DYNAMIC BUT COULDN'T FIGURE OUT

// import { useState, useEffect } from 'react'
// import { Jumbotron, Button, Form } from 'react-bootstrap'
// import '../styles/home.css'
// import MovieRow from './MovieRow'
// import { useDispatch } from 'react-redux'
// import { useLocation } from 'react-router-dom'

// const Genre = (props) => {
//   const [searchQuery, setSearchQuery] = useState('')
//   const [searchMovieRowTitle, setSearchMovieRowTitle] = useState('')
//   const [searchMovieRow, setSearchMovieRow] = useState([])

//   const location = useLocation()
// const { movieKind } = location
// console.log('props', props)
// console.log('location', location)
// console.log('props.location.state', props.location.state)
// console.log('moviekind', movieKind)
// console.log('props.moviekind', props.movieKind)

// useEffect(() => {
//   getMovies()
// }, [])

// const [movies, setMovies] = useState([]);

// const mapSearchURLs = {
//   Adventure: 'AdvancedSearch/k_xtso692i/?genres=action',
//   Drama: 'AdvancedSearch/k_xtso692i/?genres=drama',
// }
// mapSearchURLs.Adventure
// mapSearchURLs.movieKind
// mapSearchURLs[props.movieKind]

// const mapTitles = {
//   Adventure: 'Adventure',
//   Drama: 'Drama',
// }

// const title = mapTitles[props.movieKind];

// const getMovies = async () =>
// {
//   const response = await fetch(`${https://imdb-api.com/en/API/}${mapSearchURLs[movieKind]}`)
//     if (response.ok)
//   {
//       const data = await response.json()
//       setMovies(data)
//     }
// }

// const handleSearchQuery = async (e) => {
//   e.preventDefault()

//   const response = await fetch(
//     'https://imdb-api.com/en/API/SearchMovie/k_xtso692i/' + searchQuery,
//   )
//   if (response.ok) {
//     const data = await response.json()
//     console.log(data)
//     setSearchMovieRowTitle(data)
//     setSearchMovieRow(data.results)
//   }
// }

// return (
//   <>
{
  /* <Jumbotron className="text-center d-flex flex-column justify-content-center mb-0 home-jumbotron">
        <h1 className="mb-3">Unlimited movies, for movie lovers.</h1>

        <h3>Watch anywhere. Cancel anytime.</h3>

        <Form
          className="d-flex justify-content-center mt-3"
          onSubmit={handleSearchQuery}
        >
          <Form.Group className="mb-0">
            <Form.Control
              type="text"
              placeholder="Movie title.."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
          <Button variant="warning" type="submit">
            Search
          </Button>
        </Form>
      </Jumbotron> */
}

{
  /* {!searchQuery ? (
        <>
          <MovieRow title="Best movies" movies={movieRow1.slice(0, 6)} />
        </>
      ) : (
        <MovieRow
          title={searchMovieRowTitle.expression}
          movies={searchMovieRow}
          searchResult={searchMovieRowTitle}
        />
      )} */
}
//     </>
//   )
// }

// export default Genre
