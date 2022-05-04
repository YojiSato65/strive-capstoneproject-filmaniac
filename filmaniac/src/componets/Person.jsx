import { useState, useEffect } from 'react'
import {
  Jumbotron,
  Button,
  Form,
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsFillStarFill } from 'react-icons/bs'
import '../styles/person.css'
import PersonRow from './PersonRow'
import { useSelector } from 'react-redux'

const Person = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchPersonRowTitle, setSearchPersonRowTitle] = useState('')
  const [searchPersonRow, setSearchPersonRow] = useState([])

  const selectedPersonList = useSelector((state) => state.person.favorites)
  console.log(selectedPersonList)

  const handleSearchQuery = async (e) => {
    e.preventDefault()

    const response = await fetch(
      'https://imdb-api.com/en/API/SearchName/k_xtso692i/' + searchQuery,
    )
    if (response.ok) {
      const data = await response.json()
      console.log(data.results)
      setSearchPersonRowTitle(data)
      setSearchPersonRow(data.results)
    }
  }

  return (
    <>
      <Jumbotron className="text-center d-flex flex-column justify-content-center mb-0 person-jumbotron">
        <h1 className="mb-3">
          Find your favorite directors, actors and actresses.
        </h1>

        <h3>Watch anywhere. Cancel anytime.</h3>

        <Form
          className="d-flex justify-content-center mt-3"
          onSubmit={handleSearchQuery}
        >
          <Form.Group className="mb-0">
            <Form.Control
              type="text"
              placeholder="Director, actor, actress.."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
          <Button variant="warning" type="submit">
            Search
          </Button>
        </Form>
      </Jumbotron>
      {!searchQuery ? (
        <></>
      ) : (
        <>
          <PersonRow
            title={searchPersonRowTitle.expression}
            people={searchPersonRow}
            searchResult={searchPersonRowTitle}
          />
        </>
      )}

      <Container fluid className="pt-5 px-5">
        <h3 className="mb-3">People you liked</h3>
        <Row>
          {selectedPersonList.map((favPerson) => (
            <Col
              xs={6}
              md={2}
              className="d-flex flex-column m-3"
              key={favPerson.id}
            >
              <Link to={'/' + favPerson.id}>
                <Image
                  src={favPerson.image}
                  roundedCircle
                  width="200"
                  height="200"
                  alt="movie-image"
                  className="fav-person-image"
                />
              </Link>
              <div>
                <h5 className="text-center mt-3 d-inline-block mr-2">
                  {favPerson.title}
                </h5>
                <BsFillStarFill />
                <p className="d-inline-block">4.0/5</p>
              </div>
            </Col>
          ))}
        </Row>
        {/* <br />
        <h3 className="mb-3 mt-5">Your favorite actors</h3>
        <Row>
          <Col xs={6} md={2} className="d-flex flex-column mx-3">
            <Image
              src="https://plchldr.co/i/200x200"
              roundedCircle
              width="200"
              height="200"
              alt="movie-image"
              className="fav-person-image"
            />
            <div>
              <Link to="/detail">
                <h5 className="text-center mt-3 d-inline-block mr-2">
                  Actor name
                </h5>
              </Link>
              <BsFillStarFill />
              <p className="d-inline-block">4.0/5</p>
            </div>
          </Col>
        </Row> */}
      </Container>
    </>
  )
}

export default Person
