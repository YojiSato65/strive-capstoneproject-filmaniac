import '../styles/personDetail.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { movieSelectAction } from '../redux/actions'
import MyModal from './MyModal'
import {
  personAddToFavsAction,
  personRemoveFromFavsAction,
} from '../redux/actions'
import { BsHeart, BsFillHeartFill } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const PersonDetail = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [detailPerson, setDetailPerson] = useState({})

  // const selectedPerson = useSelector((state) => state.person.selectedPerson)
  const favPersonList = useSelector((state) => state.person.favorites)
  const dispatch = useDispatch()

  const { personId } = useParams()

  const isPersonSelected = favPersonList.some(
    (element) => element?.id === personId,
  )

  useEffect(() => {
    getPersonDetail()
  }, [personId])

  const getPersonDetail = async () => {
    const response = await fetch(
      'https://imdb-api.com/en/API/Name/k_xtso692i/' + personId,
    )
    if (response.ok) {
      const data = await response.json()
      setDetailPerson(data)
      console.log(data)
    }
  }

  const handleClickImage = (movie) => {
    handleShow()
    dispatch(movieSelectAction(movie))
  }

  const handleAddToFav = (person) => {
    dispatch(personAddToFavsAction(person))
    notifyAdded()
    console.log('add to fav action dispathed')
  }

  const handleRemoveFromFav = (person) => {
    dispatch(personRemoveFromFavsAction(person))
    notifyRemoved()
    console.log('remove from fav action dispathed')
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
      <Container fluid className="person-detail-container">
        <Row className="jusify-conten-center align-items-center mb-3 py-4 person-detail-row">
          <div className="d-flex">
            <div>
              <Image
                src={detailPerson.image}
                rounded
                alt="director-image"
                className="person-image ml-4"
              />
            </div>
            <div className="px-4 person-info-div">
              <div className="d-flex">
                <h3 className="text-center mb-4 d-inline-block mr-3">
                  {detailPerson.name}
                </h3>
                {isPersonSelected ? (
                  <BsFillHeartFill
                    className="heart-icon"
                    onClick={() => handleRemoveFromFav(detailPerson)}
                  />
                ) : (
                  <BsHeart
                    className="heart-icon"
                    onClick={() => handleAddToFav(detailPerson)}
                  />
                )}
              </div>
              <p>
                <h5>{detailPerson.role}</h5>
              </p>
              <p className="mb-2">
                Awards:
                <b> {detailPerson.awards}</b>
              </p>
              <p className="mb-2">Birth date: {detailPerson.birthDate}</p>
              <p className="description">{detailPerson.summary}</p>
            </div>
          </div>
        </Row>

        <h3 className="mt-5 mb-3">Known For</h3>
        <Row>
          {detailPerson.knownFor?.map((movie) => (
            <Col xs={6} md={3} className="known-for-col">
              <Image
                src={movie.image}
                rounded
                alt="movie-image"
                className="mb-2 person-detail-movie-image"
                onClick={() => handleClickImage(movie)}
              />
              <h5 className="text-center">{movie.fullTitle}</h5>
            </Col>
          ))}
        </Row>
      </Container>
      <MyModal
        handleClickImage={handleClickImage}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
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

export default PersonDetail
