import { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../styles/movieRow.css'
import { useDispatch } from 'react-redux'
import { movieSelectAction } from '../redux/actions'
import MyModal from './MyModal'

const MovieRow = ({ title, movies, searchResult }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()

  const handleClickImage = (movie) => {
    handleShow()
    dispatch(movieSelectAction(movie))
  }

  return (
    <>
      <Container fluid>
        {!searchResult ? (
          <h3 className="mb-3 ml-1">{title}</h3>
        ) : (
          <h3 className="mb-3 ml-1">Search results for: {title}</h3>
        )}
        <Row>
          {movies.map((movie) => (
            <Col xs={6} md={2} key={movie.id} className="movie-col mb-5">
              <Image
                src={movie.image}
                rounded
                alt="movie-image"
                className="mx-1"
                onClick={() => handleClickImage(movie)}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <MyModal
        handleClickImage={handleClickImage}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </>
  )
}

export default MovieRow
