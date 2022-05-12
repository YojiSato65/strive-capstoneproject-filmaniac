import '../styles/movieRow.css'
import { useState } from 'react'
import { Image, Modal, Badge } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {
  movieSelectAction,
  movieAddToFavsAction,
  movieRemoveFromFavsAction,
} from '../redux/actions'
import { useEffect } from 'react'
import { BsHeart, BsFillHeartFill, BsPlayCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

  const handleAddToFav = () => {
    dispatch(movieAddToFavsAction(selectedMovie))
    notifyAdded()
  }

  const handleRemoveFromFav = () => {
    dispatch(movieRemoveFromFavsAction(selectedMovie))
    notifyRemoved()
  }

  const notifyAdded = () =>
    toast.warn('Added to favorites', {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: false,
    })

  const notifyRemoved = () =>
    toast.warn('Removed from favorites', {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: false,
    })

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
                className="modal-image"
              />
              <div className="d-flex justify-content-center px-2 py-2 mt-3 play-div">
                <b className="mr-2">Watch now</b>
                <BsPlayCircle className="play-icon" />
              </div>
              <div className="d-flex genre-div mt-1">
                {movieDetail.genreList &&
                  movieDetail.genreList.slice(0, 3).map((genre) => (
                    <span
                      className="genre-list mt-2 mx-1 py-1 px-2"
                      key={genre.key}
                    >
                      {genre.key}
                    </span>
                  ))}
              </div>
            </div>
            <div>
              <div className="d-flex mb-2">
                <h3 className="mr-3">{movieDetail.fullTitle}</h3>
                {isMovieSelected ? (
                  <BsFillHeartFill
                    className="heart-icon"
                    onClick={handleRemoveFromFav}
                  />
                ) : (
                  <>
                    <BsHeart className="heart-icon" onClick={handleAddToFav} />
                  </>
                )}
              </div>
              {movieDetail.runtimeMins === null ? (
                <></>
              ) : (
                <h6 className="mr-3 mb-3">{movieDetail.runtimeMins} mins</h6>
              )}
              <p className="mb-3 award-p">
                <b>{movieDetail.awards}</b>
              </p>
              {movieDetail.imDbRating && (
                <>
                  <p className="d-inline-block">IMDb RATING</p>
                  <Badge variant="warning" className="mx-1">
                    {movieDetail.imDbRating}
                  </Badge>
                  <p className="d-inline-block">/10</p>
                </>
              )}
              {movieDetail.metacriticRating && (
                <>
                  <p className="d-inline-block ml-4">Metacritic RATING</p>
                  <Badge variant="warning" className="mx-1">
                    {movieDetail.metacriticRating}
                  </Badge>
                  <p className="d-inline-block">/100</p>
                </>
              )}

              <hr />
              <div className="mb-1">
                Director:{' '}
                {movieDetail.directorList === '' ? (
                  movieDetail.directorList.slice(0, 3).map((director) => (
                    <p
                      className="d-inline-block mr-2 mb-1"
                      key={director.id}
                      onClick={handleClose}
                    >
                      <Link to={`/${director.id}`} className="modal-name">
                        <b>{director.name}</b>
                      </Link>
                    </p>
                  ))
                ) : (
                  <p className="d-inline-block mr-2 mb-1">
                    Different by episode
                  </p>
                )}
              </div>
              <div>
                Star:{' '}
                {movieDetail.actorList &&
                  movieDetail.actorList.slice(0, 3).map((actor) => (
                    <div key={actor.id}>
                      <p
                        className="d-inline-block mr-2 mb-1 modal-name"
                        onClick={handleClose}
                      >
                        <Link to={`/${actor.id}`} className="modal-name">
                          <b>{actor.name}</b>
                        </Link>
                      </p>
                      <Image
                        src={actor.image}
                        roundedCircle
                        width="40"
                        height="40"
                        alt="movie-image"
                        className="modal-actor-image"
                      ></Image>
                    </div>
                  ))}
              </div>
              <p className="mt-2">Description: {movieDetail.plot}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default MyModal
