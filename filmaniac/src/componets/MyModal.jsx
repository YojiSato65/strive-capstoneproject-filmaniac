import { useState } from 'react'
import { Image, Modal, Badge } from 'react-bootstrap'
import '../styles/movieRow.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  movieSelectAction,
  movieAddToFavsAction,
  movieRemoveFromFavsAction,
} from '../redux/actions'
import { useEffect } from 'react'
import { BsHeart, BsFillHeartFill } from 'react-icons/bs'

const MyModal = ({ handleClickImage, show, handleClose, handleShow }) => {
  const selectedMovie = useSelector((state) => state.movie.selectedMovie)
  const favMovieList = useSelector((state) => state.movie.favorites)

  const [movieDetail, setMovieDetail] = useState({})

  const dispatch = useDispatch()

  handleClickImage = (movie) => {
    handleShow()
    dispatch(movieSelectAction(movie))
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

  const isMovieSelected = favMovieList.some(
    (element) => element.id === selectedMovie.id,
  )

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="d-flex">
            <div className="mr-3">
              <Image
                src={movieDetail.image}
                rounded
                alt="movie-image"
                className="mx-1 modal-image"
              />
            </div>
            <div>
              <div className="d-flex mb-3">
                <h4 className="mr-3">{movieDetail.fullTitle}</h4>
                {movieDetail.runtimeMins === null ? (
                  <></>
                ) : (
                  <h5 className="mr-3 mt-1">{movieDetail.runtimeMins} mins</h5>
                )}

                {isMovieSelected ? (
                  <BsFillHeartFill
                    className="heart-icon mt-1"
                    onClick={() =>
                      // console.log('selectedmovie', selectedMovie) ||
                      dispatch(movieRemoveFromFavsAction(selectedMovie))
                    }
                  />
                ) : (
                  <BsHeart
                    className="heart-icon"
                    onClick={() =>
                      dispatch(movieAddToFavsAction(selectedMovie))
                    }
                  />
                )}
              </div>
              <p>
                <b>{movieDetail.awards}</b>
                <Badge variant="warning" className="ml-3">
                  {movieDetail.imDbRating}
                </Badge>
              </p>
              <p>
                Director: <b>{movieDetail.directors}</b>
              </p>
              <div>
                Star:{' '}
                {movieDetail.actorList &&
                  movieDetail.actorList.slice(0, 3).map((actor) => (
                    <div key={actor.id}>
                      <p className="d-inline-block mr-2">
                        <b>{actor.name}</b>
                      </p>
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
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default MyModal
