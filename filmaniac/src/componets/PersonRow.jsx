import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import '../styles/personRow.css'
import { useSelector, useDispatch } from 'react-redux'
import { personSelectAction, personAddToFavsAction } from '../redux/actions'

const PersonRow = ({ title, people, searchResult }) => {
  // const selectedPerson = useSelector((state) => state.person.selectedPerson)
  // const selectedPersonList = useSelector((state) => state.person.favorites)

  const dispatch = useDispatch()

  // const navigate = useNavigate()

  const handleClickPerson = (person) => {
    dispatch(personSelectAction(person))
  }

  const handleAddToFavsPerson = (person) => {
    dispatch(personAddToFavsAction(person))
  }

  return (
    <>
      <Container fluid className="pt-5">
        {!searchResult ? (
          <h3 className="mb-3 ml-1">{title}</h3>
        ) : (
          <h3 className="mb-3 ml-1">Search result for: {title}</h3>
        )}
        <Row>
          {people.map((person) => (
            <Col xs={6} md={2} key={person.id} className="mb-3 person-col">
              <Image
                src={person.image}
                rounded
                alt="movie-image"
                className="mx-1"
                onClick={() => handleClickPerson(person)}
              />
              {/* <Link to="/detail"> */}
              <p className="text-center">{person.title}</p>
              {/* </Link> */}
              <p className="text-center">{person.description}</p>
              <Button
                variant="warning"
                onClick={() => handleAddToFavsPerson(person)}
              >
                Add to favorite
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default PersonRow
