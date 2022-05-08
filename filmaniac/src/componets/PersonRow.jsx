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

const PersonRow = ({ title, people, searchPersonRowTitle }) => {
  const selectedPerson = useSelector((state) => state.person.selectedPerson)
  const favPersonList = useSelector((state) => state.person.favorites)

  const dispatch = useDispatch()

  const isPersonSelected = (personId) => {
    return favPersonList.some((element) => element.id === personId)
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
  console.log('searchResult', people)

  return (
    <>
      <Container fluid className="person-container">
        {searchPersonRowTitle ? (
          <h3 className="mb-3 ml-1">Search Result For: {title}</h3>
        ) : (
          <></>
        )}
        <Row>
          {people.map((person) => (
            <Col xs={6} md={2} key={person.id} className="mb-3 person-col">
              <Link to={'/' + person.id}>
                <Image
                  src={person.image}
                  roundedCircle
                  width="200"
                  height="200"
                  alt="movie-image"
                  className="person-image"
                  onClick={() => dispatch(personSelectAction(person))}
                />
              </Link>
              <h4 className="text-center mt-1">{person.title}</h4>
              {isPersonSelected(person.id) ? (
                <BsFillHeartFill
                  className="heart-icon"
                  onClick={() =>
                    // console.log('selectedmovie', selectedMovie) ||
                    // handleSelectPerson
                    dispatch(personRemoveFromFavsAction(person))
                  }
                />
              ) : (
                <BsHeart
                  className="heart-icon"
                  onClick={() =>
                    // handleDeselectPerson
                    dispatch(personAddToFavsAction(person))
                  }
                />
              )}
              <p className="text-center">{role(person.description)}</p>
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid className="px-5 liked-person-container">
        <h3 className="mb-3">People You Liked</h3>
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
                <p>{favPerson?.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default PersonRow
