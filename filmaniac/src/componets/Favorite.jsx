import { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/home.css'
import { movieSelectAction, movieAddToFavsAction } from '../redux/actions'

const Favorite = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const selectedMovie = useSelector((state) => state.movie.selectedMovie)
  const favMovieList = useSelector((state) => state.movie.favorites)

  const [movieDetail, setMovieDetail] = useState({})

  const likedMovies = useSelector((state) => state.movie.favorites)

  const dispatch = useDispatch()

  const handleClickImage = (movie) => {
    handleShow()
    dispatch(movieSelectAction(movie))
    console.log(movie)
  }

  useEffect(() => {
    const getSelectedMovie = async () => {
      const movieId = selectedMovie.id
      const response = await fetch(
        'https://imdb-api.com/en/API/Title/k_xtso692i/' + movieId,
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setMovieDetail(data)
      }
    }
    if (selectedMovie) {
      getSelectedMovie()
    }
  }, [selectedMovie])

  return (
    <>
      <Container fluid className="pt-5">
        <h3 className="mb-3 ml-1">Movies you liked</h3>
        <Row>
          {likedMovies.map((movie) => (
            <Col xs={6} md={2} key={movie.id} className="movie-col mb-2">
              <Image
                src={movie.image}
                rounded
                alt="movie-image"
                className="mx-1"
                onClick={() => handleClickImage(movie)}
              />
            </Col>
          ))}
        </Row>
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            {movieDetail ? (
              <div className="d-flex">
                <div>
                  <Image
                    src={movieDetail.image}
                    rounded
                    alt="movie-image"
                    className="mx-1 modal-image"
                  />
                </div>
                <div>
                  <h4>Title: {movieDetail.title}</h4>
                  <p>Director: {movieDetail.directors}</p>
                  <div>
                    Star:{' '}
                    {movieDetail.actorList &&
                      movieDetail.actorList.slice(0, 4).map((actor) => (
                        <div>
                          <p className="d-inline-block mr-2">{actor.name}</p>
                          <Image
                            src={actor.image}
                            roundedCircle
                            width="40"
                            height="40"
                            alt="movie-image"
                            className="fav-person-image"
                          ></Image>
                        </div>
                      ))}
                  </div>
                  <p>Genre: {movieDetail.genres}</p>
                  <p>Description: {movieDetail.plot}</p>
                  {/* {favMovieList.includes(movie) ? (
                    <Button variant="dark">Added</Button>
                  ) : ( */}
                  <Button
                    variant="warning"
                    onClick={() =>
                      dispatch(movieAddToFavsAction(selectedMovie))
                    }
                  >
                    Add to favorite
                  </Button>
                  {/* )} */}
                </div>
              </div>
            ) : (
              <></>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </>
  )
}

export default Favorite
