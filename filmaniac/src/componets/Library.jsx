import { Container, Row, Col, Image } from 'react-bootstrap'
import { BsFillStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../styles/library.css'

const Library = () => {
  return (
    <>
      <Container fluid className="pt-5 px-5">
        <h3 className="mb-3">Your favorite directors</h3>
        <Row>
          <Col xs={6} md={2} className="d-flex flex-column mx-3">
            <Image
              src="https://plchldr.co/i/100x100"
              roundedCircle
              width="200"
              height="200"
              alt="movie-image"
            />
            <div>
              <Link to="/detail">
                <h5 className="text-center mt-3 d-inline-block mr-2">
                  Director name
                </h5>
              </Link>
              <BsFillStarFill />
              <p className="d-inline-block">4.0/5</p>
            </div>
          </Col>
          <Col xs={6} md={2} className="d-flex flex-column mx-3">
            <Image
              src="https://plchldr.co/i/100x100"
              roundedCircle
              width="200"
              height="200"
              alt="movie-image"
            />
            <div>
              <Link to="/detail">
                <h5 className="text-center mt-3 d-inline-block mr-2">
                  Director name
                </h5>
              </Link>
              <BsFillStarFill />
              <p className="d-inline-block">4.0/5</p>
            </div>
          </Col>
          <Col xs={6} md={2} className="d-flex flex-column mx-3">
            <Image
              src="https://plchldr.co/i/100x100"
              roundedCircle
              width="200"
              height="200"
              alt="movie-image"
            />
            <div>
              <Link to="/detail">
                <h5 className="text-center mt-3 d-inline-block mr-2">
                  Director name
                </h5>
              </Link>
              <BsFillStarFill />
              <p className="d-inline-block">4.0/5</p>
            </div>
          </Col>
        </Row>
        <br />
        <h3 className="mb-3 mt-5">Your favorite actors</h3>
        <Row>
          <Col xs={6} md={2} className="d-flex flex-column mx-3">
            <Image
              src="https://plchldr.co/i/200x200"
              roundedCircle
              width="200"
              height="200"
              alt="movie-image"
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
        </Row>
      </Container>
    </>
  )
}

export default Library
