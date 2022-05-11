import '../styles/movieRow.css'
import { useState } from 'react'
import { Container, Row, Col, Image, Carousel, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { movieSelectAction } from '../redux/actions'
import MyModal from './MyModal'

const MovieCarouselRow = ({ title, nestedMovies, searchResult, isLoading }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()

  const handleClickImage = (movie) => {
    handleShow()
    dispatch(movieSelectAction(movie))
  }

  const Spinner = require('react-spinkit')

  return (
    <>
      {isLoading ? (
        <>
          <Spinner animation="grow" />
        </>
      ) : (
        <Container fluid className="pb-5">
          {!searchResult ? (
            <h3 className="mb-3 ml-1">{title}</h3>
          ) : (
            <h3 className="mb-3 ml-1">Search results for: {title}</h3>
          )}
          <Carousel indicators={false} interval={null}>
            {nestedMovies.map((movies) => (
              <Carousel.Item key={movies.key}>
                <Row>
                  {movies.map((movie) => (
                    <>
                      <Col
                        xs={6}
                        md={2}
                        key={movie.id}
                        className="movie-col mb-2"
                      >
                        <Image
                          src={movie.image}
                          rounded
                          alt="movie-image"
                          className="mx-1"
                          onClick={() => handleClickImage(movie)}
                        />
                      </Col>
                    </>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      )}
      <MyModal
        handleClickImage={handleClickImage}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </>
  )
}

export default MovieCarouselRow
