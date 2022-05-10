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

  const setRole = (role) => {
    if (role.includes('Actor')) {
      return 'Actor'
    } else if (role.includes('Actress')) {
      return 'Actress'
    } else if (role.includes('Writer')) {
      return 'Writer'
    } else if (role.includes('Director')) {
      return 'Director'
    } else {
      return 'Crew'
    }
  }

  return (
    <>
      <Container fluid className="mt-5 px-5 person-detail-container">
        <Row className="jusify-conten-center">
          <div className="d-flex align-items-center mb-3">
            <div>
              <Image
                src={detailPerson.image}
                roundedCircle
                width="300"
                height="300"
                alt="director-image"
                className="person-image mx-5"
              />
            </div>
            <div>
              <div className="d-flex">
                <h3 className="text-center mt-3 mb-3 d-inline-block mr-2">
                  {detailPerson.name}
                </h3>
                <p className="mt-4 ml-2">- {detailPerson.role}</p>
                {/* <p className="mt-4 ml-2">- {setRole(detailPerson.role)}</p> */}
                {isPersonSelected ? (
                  <BsFillHeartFill
                    className="heart-icon"
                    onClick={() =>
                      dispatch(personRemoveFromFavsAction(detailPerson))
                    }
                  />
                ) : (
                  <BsHeart
                    className="heart-icon"
                    onClick={() =>
                      dispatch(personAddToFavsAction(detailPerson))
                    }
                  />
                )}
              </div>
              <p className="mb-2">
                Awards:
                <b> {detailPerson.awards}</b>
              </p>
              <p className="mb-1">Birth date: {detailPerson.birthDate}</p>
              <p>{detailPerson.summary}</p>
            </div>
          </div>
        </Row>

        <h3 className="mt-5 mb-2">Known For</h3>
        <Row>
          {detailPerson.knownFor?.map((movie) => (
            <Col xs={6} md={3} className="movie-col">
              <Image
                src={movie.image}
                rounded
                width="200"
                height="300"
                alt="movie-image"
                className="mb-2"
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
    </>
  )
}

export default PersonDetail
