import { useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { BsFillStarFill } from 'react-icons/bs'
import '../styles/detail.css'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const param = useParams()
  console.log(param)
  useEffect(() => {
    getDetail()
  }, [])

  const getDetail = async () => {
    const response = await fetch('https://imdb-api.com/en/API/Name/k_xtso692i/')
    if (response.ok) {
      const data = await response.json()
      console.log(data)
    }
  }

  return (
    <>
      <Container fluid className="pt-5 px-5">
        <Row>
          <Col xs={6} md={6} className="detail-col">
            <h3 className="mb-3">Details</h3>
            <div className="d-flex flex-column align-items-center">
              <Image
                src="https://place.dog/100/100"
                roundedCircle
                width="300"
                height="300"
                alt="director-image"
              />
              <div>
                <h4 className="text-center mt-3 d-inline-block mr-2">
                  Director name
                </h4>
                <BsFillStarFill className="mr-1 mb-2 star" />
                <p className="d-inline-block">
                  <span>4.0 </span>/ 5
                </p>
              </div>
              <p>Birth place</p>
              <p>Birth day</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odit
              quam architecto ea minus. Quam repellat facere, possimus tenetur
              earum provident, corporis doloremque ad accusamus repellendus
              laboriosam exercitationem pariatur placeat.
            </p>
          </Col>
          <Col xs={6} md={6}>
            <h3 className="mb-3">Movies</h3>
            <Image
              src="https://plchldr.co/i/200x300"
              rounded
              width="200"
              height="300"
              alt="movie-image"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Detail
