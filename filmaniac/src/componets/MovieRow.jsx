import { useState } from 'react'
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap'
import '../styles/movieRow.css'
import { useSelector, useDispatch } from 'react-redux'
import { movieSelectAction, movieAddToFavsAction } from '../redux/actions'

const MovieRow = ({ title, movies, searchResult }) => {
  // const [movieId, setMovieId] = useState(null)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const selectedMovie = useSelector((state) => state.movie.selectedMovie)
  const selectedMovieList = useSelector((state) => state.movie.favorites)
  console.log(selectedMovieList)
  // for (id of selectedMovieList) {
  //   console.log(id)
  // }
  // const distructureMovieArr = () => {
  //   const [{ id }] = selectedMovieList
  //   console.log(id)
  // }
  // if (selectedMovieList !== []) {
  //   distructureMovieArr()
  // }

  const dispatch = useDispatch()

  const handleClickImage = (movie) => {
    handleShow()
    dispatch(movieSelectAction(movie))
    console.log(movie)
  }

  return (
    <>
      <Container fluid className="pt-5">
        {!searchResult ? (
          <h3 className="mb-3 ml-1">{title}</h3>
        ) : (
          <h3 className="mb-3 ml-1">Search results for: {title}</h3>
        )}
        <Row>
          {movies.map((movie) => (
            <>
              <Col xs={6} md={2} key={movie.id} className="movie-col mb-2">
                <Image
                  src={movie.image}
                  rounded
                  alt="movie-image"
                  className="mx-1"
                  onClick={() => handleClickImage(movie)}
                />
              </Col>
              {/* </>
          ))} */}
              {/* </Row> */}
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
                  {selectedMovie ? (
                    <div className="d-flex">
                      <div>
                        <Image
                          src={selectedMovie.image}
                          rounded
                          alt="movie-image"
                          className="mx-1 modal-image"
                        />
                      </div>
                      <div>
                        <h4>Title: {selectedMovie.title}</h4>
                        <p>Director:</p>
                        <p>Star:</p>
                        <p>Genre:</p>
                        <p>Description:</p>
                        {selectedMovieList.includes(movie) ? (
                          <Button variant="dark">Added</Button>
                        ) : (
                          <Button
                            variant="warning"
                            onClick={() =>
                              dispatch(movieAddToFavsAction(selectedMovie))
                            }
                          >
                            add to favorite
                          </Button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
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
            </>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default MovieRow
