import { Container, Row, Col, Image } from 'react-bootstrap'
import '../styles/personRow.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { personSelectAction } from '../redux/actions'
import { useState } from 'react'

const PersonRow = ({ title, people, searchResult }) => {
  const dispatch = useDispatch()

  // const navigate = useNavigate()

  const handleClickPerson = (person) => {
    dispatch(personSelectAction(person))
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
            <Col xs={6} md={2} key={person.id} className="person-col">
              <Image
                src={person.image}
                rounded
                alt="movie-image"
                className="mx-1"
                onClick={handleClickPerson}
              />
              {/* <Link to="/detail"> */}
              <p className="text-center">{person.title}</p>
              {/* </Link> */}
              <p className="text-center">{person.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default PersonRow
