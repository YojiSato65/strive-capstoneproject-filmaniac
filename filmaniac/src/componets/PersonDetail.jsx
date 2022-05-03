import { useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { BsFillStarFill } from 'react-icons/bs'
import '../styles/personDetail.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const PersonDetail = () => {
  const { personId } = useParams()
  console.log(personId)

  const [detailPerson, setDetailPerson] = useState({})

  useEffect(() => {
    getPersonDetail()
  }, [])

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

  return (
    <>
      <Container fluid className="px-5">
        <Row>
          <Col xs={6} md={6} className="detail-col">
            <h3 className="mb-3">Details</h3>
            <div className="d-flex flex-column align-items-center">
              <Image
                src={detailPerson.image}
                roundedCircle
                width="300"
                height="300"
                alt="director-image"
                className="person-image"
              />
              <div>
                <h4 className="text-center mt-3 d-inline-block mr-2">
                  {detailPerson.name}
                </h4>
                <BsFillStarFill className="mr-1 mb-2 star" />
                <p className="d-inline-block">
                  <span>4.0 </span>/ 5
                </p>
              </div>
              <p>{detailPerson.role}</p>
              <p>Birth date: {detailPerson.birthDate}</p>
            </div>
            <p>{detailPerson.summary}</p>
          </Col>
          <Col xs={6} md={6}>
            <h3 className="mb-3">Movies</h3>
            <Row>
              {detailPerson.knownFor?.map((movie) => (
                <Col xs={6} md={6}>
                  <Image
                    src={movie.image}
                    rounded
                    width="200"
                    height="300"
                    alt="movie-image"
                    className="m-2"
                  />
                  <h5 className="text-center">{movie.fullTitle}</h5>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PersonDetail
