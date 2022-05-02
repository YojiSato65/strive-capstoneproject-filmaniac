import { useState } from 'react'
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap'
import '../styles/movieRow.css'
import { useSelector, useDispatch } from 'react-redux'
import { movieSelectAction } from '../redux/actions'

const MovieRow = ({ title, movies, searchResult }) => {
  // const [movieId, setMovieId] = useState(null)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // const selectedMovie = useSelector((state) => state.job.selectedMovie)

  const dispatch = useDispatch()

  const handleClickImage = (movie) => {
    handleShow()
    dispatch(movieSelectAction(movie))
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
          {movies.map((movie) => (
            <Col xs={6} md={2} key={movie.id} className="movie-col mb-2">
              <Image
                src={movie.image}
                rounded
                alt="movie-image"
                className="mx-1"
                onClick={handleClickImage}
              />
            </Col>
          ))}
        </Row>
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <div className="d-flex">
              <div>
                <Image src="" rounded alt="movie-image" className="mx-1" />
              </div>
              <div>
                <h4>Title</h4>
                <p>Director:</p>
                <p>Star:</p>
                <p>Genre:</p>
              </div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </Container>
    </>
  )
}

export default MovieRow
