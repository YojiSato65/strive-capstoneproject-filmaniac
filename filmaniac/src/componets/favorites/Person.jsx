import '../../styles/person.css'
import '../../styles/personRow.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { BsFillHeartFill } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import {
  personSelectAction,
  personRemoveFromFavsAction,
} from '../../redux/actions'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Person = () => {
  const favPersonList = useSelector((state) => state.person.favorites)

  const dispatch = useDispatch()

  const setRoleFromRow = (description = '') => {
    if (description.includes('Actor')) {
      return 'Actor'
    } else if (description.includes('Actress')) {
      return 'Actress'
    } else if (description.includes('Writer')) {
      return 'Director'
    } else if (description.includes('Director')) {
      return 'Director'
    } else {
      return 'Crew'
    }
  }

  const handleRemoveFromFav = (person) => {
    dispatch(personRemoveFromFavsAction(person))
    notifyRemoved()
    console.log('remove from fav action dispathed')
  }

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
      <Container fluid className="px-5 liked-person-container">
        <h3 className="mb-3">Your Favorite Crew</h3>
        {!favPersonList.length ? (
          <div style={{ height: '450px', backgroundColor: '#050505' }}>
            <p className="pt-3">Hasn't been added yet.</p>
          </div>
        ) : (
          <Row>
            {favPersonList.map((favPerson) => (
              <Col
                xs={6}
                md={2}
                className="d-flex flex-column m-3"
                key={favPerson?.id}
              >
                <Link to={'/' + favPerson?.id}>
                  <Image
                    src={favPerson?.image}
                    roundedCircle
                    width="200"
                    height="200"
                    alt="movie-image"
                    className="fav-person-image"
                    onClick={() => dispatch(personSelectAction(favPerson))}
                  />
                </Link>
                <div>
                  <h5 className="text-center mt-3 d-inline-block mr-2">
                    {favPerson?.title || favPerson?.name}
                  </h5>
                  <BsFillHeartFill
                    className="heart-icon"
                    onClick={() => handleRemoveFromFav(favPerson)}
                  />
                  <p>
                    {favPerson.description
                      ? setRoleFromRow(favPerson?.description)
                      : favPerson.role}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        )}
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

export default Person
