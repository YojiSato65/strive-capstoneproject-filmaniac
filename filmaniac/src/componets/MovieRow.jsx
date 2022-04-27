import { Container, Row, Col, Image } from 'react-bootstrap'
import '../styles/movieRow.css'

const MovieGallery = ({ title, movies }) => {
  return (
    <>
      <Container fluid className="pt-5">
        <h3 className="mb-3 ml-1">{title}</h3>
        <Row>
          {movies.map((movie) => (
            <Col xs={6} md={2} key={movie.id} className="movie-col">
              <Image
                src={movie.image}
                rounded
                alt="movie-image"
                className="mx-1"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default MovieGallery
