import '../../styles/home.css'
import { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { movieSelectAction } from '../../redux/actions'
import MyModal from '../MyModal'

const Movie = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const likedMovies = useSelector((state) => state.movie.favorites)

  const dispatch = useDispatch()

  const handleClickImage = (movie) => {
    handleShow()
    dispatch(movieSelectAction(movie))
  }

  return (
    <>
      <Container fluid className="fav-container">
        <>
          <h3 className="mb-3 ml-1">Movies you liked</h3>
          <Row>
            {likedMovies.map((movie) => (
              <Col xs={6} md={2} key={movie.id} className="movie-col mb-2">
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
        </>
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

export default Movie
