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

const Person = () => {
  const favPersonList = useSelector((state) => state.person.favorites)

  const dispatch = useDispatch()

  const role = (description = '') => {
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

  return (
    <>
      <Container fluid className="px-5 liked-person-container">
        <h3 className="mb-3">Your Favorite Crew</h3>
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
                  {favPerson?.title}
                </h5>
                <BsFillHeartFill
                  className="heart-icon"
                  onClick={() =>
                    // console.log('selectedmovie', selectedMovie) ||
                    dispatch(personRemoveFromFavsAction(favPerson))
                  }
                />
                <p>{role(favPerson?.description)}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Person
