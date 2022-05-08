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
    </>
  )
}

export default PersonRow
