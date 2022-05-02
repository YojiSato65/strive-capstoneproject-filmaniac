import { Container, Row, Col, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/home.css'

const Favorite = () => {
  const likedMovies = useSelector((state) => state.movie.favorites)
  const dispatch = useDispatch()

  console.log(likedMovies)
  return (
    <>
      <Container fluid className="pt-5">
        <h3 className="mb-3 ml-1">Movies you liked</h3>
        <Row>
          {likedMovies.map((movie) => (
            <Col xs={6} md={2} key={movie.id} className="movie-col mb-2">
              <Image
                src={movie.image}
                rounded
                alt="movie-image"
                className="mx-1"
                // onClick={() => handleClickImage(movie)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Favorite
