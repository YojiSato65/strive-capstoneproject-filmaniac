import '../styles/movieRow.css'
import { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { movieSelectAction } from '../redux/actions'
import MyModal from './MyModal'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

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
          {/* <Carousel indicators={false} interval={null}>
            {nestedMovies.map((movies) => (
              <Carousel.Item key={movies.key}>
                <Row>
                  {movies.map((movie) => (
                    <>
                      <Col
                        xs={6}
                        md={3}
                        lg={2}
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
          </Carousel> */}
          <Carousel
            // swipeable={false}
            // draggable={false}
            // showDots={false}
            responsive={responsive}
            // ssr={true} // means to render carousel on server-side.
            // infinite={false}
            // autoPlay={false}
            // autoPlaySpeed={3000}
            // keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={500}
            // containerClass="carousel-container"
            // removeArrowOnDeviceType={['tablet', 'mobile']}
            // deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            // centerMode={true}
            className="movie-col"
          >
            {nestedMovies.map((movie) => (
              <>
                <Image
                  src={movie.image}
                  rounded
                  alt="movie-image"
                  className="mx-1"
                  onClick={() => handleClickImage(movie)}
                  style={{ width: '250px', height: '350px' }}
                />
              </>
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
