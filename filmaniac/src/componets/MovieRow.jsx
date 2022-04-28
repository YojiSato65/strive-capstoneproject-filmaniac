import { Container, Row, Col, Image } from 'react-bootstrap'
import '../styles/movieRow.css'

const MovieGallery = ({ title, movies, searchResult }) => {
  return (
    <>
      <Container fluid className="pt-5">
        {!searchResult ? (
          <h3 className="mb-3 ml-1">{title}</h3>
        ) : (
          <h3 className="mb-3 ml-1">Search result for: {title}</h3>
        )}
        <Row>
          {movies.map((movie) => (
            <Col xs={6} md={2} key={movie.id} className="movie-col">
              <button>
                <Image
                  src={movie.image}
                  rounded
                  alt="movie-image"
                  className="mx-1"
                />
              </button>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default MovieGallery
