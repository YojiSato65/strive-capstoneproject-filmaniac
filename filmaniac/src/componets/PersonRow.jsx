import '../styles/person.css'
import '../styles/personRow.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { BsHeart, BsFillHeartFill } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import {
  personSelectAction,
  personAddToFavsAction,
  personRemoveFromFavsAction,
} from '../redux/actions'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const PersonRow = ({ title, people, searchPersonRowTitle }) => {
  const favPersonList = useSelector((state) => state.person.favorites)

  const dispatch = useDispatch()

  const isPersonSelected = (personId) => {
    return favPersonList.some((element) => element?.id === personId)
  }

  const role = (description) => {
    if (description.includes('Actor')) {
      return 'Actor'
    } else if (description.includes('Actress')) {
      return 'Actress'
    } else if (description.includes('Writer')) {
      return 'Writer'
    } else if (description.includes('Director')) {
      return 'Director'
    } else {
      return 'Crew'
    }
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
      <Container fluid className="person-container">
        {searchPersonRowTitle ? (
          <h3 className="mb-5 ml-1">Search Result For: {title}</h3>
        ) : (
          <></>
        )}
        <Row>
          {people.map((person) => (
            <Col
              xs={6}
              md={4}
              lg={3}
              xl={2}
              key={person.id}
              className="person-col d-flex flex-column align-items-center"
            >
              <Link to={'/' + person.id}>
                <Image
                  src={person.image}
                  roundedCircle
                  alt="movie-image"
                  className="person-search-image mb-4"
                  onClick={() => dispatch(personSelectAction(person))}
                />
              </Link>
              <div className="d-flex justify-content-center search-result-person-row">
                <h6 className="mr-2 mt-2">{person.title}</h6>
                {isPersonSelected(person.id) ? (
                  <BsFillHeartFill
                    className="personrow-heart-icon"
                    onClick={() => handleRemoveFromFav(person)}
                  />
                ) : (
                  <BsHeart
                    className="personrow-heart-icon"
                    onClick={() => handleAddToFav(person)}
                  />
                )}
              </div>
              <p>{role(person.description)}</p>
            </Col>
          ))}
        </Row>
      </Container>
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

export default PersonRow
