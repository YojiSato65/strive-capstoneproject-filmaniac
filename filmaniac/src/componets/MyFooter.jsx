import { Container, Row } from 'react-bootstrap'
import '../styles/myFooter.css'
import { BsTwitter, BsInstagram, BsYoutube, BsFacebook } from 'react-icons/bs'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const MyFooter = () => {
  return (
    <Container fluid className="footer-container">
      <Row className="justify-content-between">
        <div className="d-flex">
          <p className="mx-2">App Setting</p>
          <p className="mx-2">About Filmaniac</p>
          <p className="mx-2">News & Information</p>
          <p className="mx-2">Help Center</p>
        </div>
        <div>
          <BsTwitter className="mx-2" style={{ fontSize: '1.5em' }} />
          <BsInstagram className="mx-2" style={{ fontSize: '1.5em' }} />
          <BsYoutube className="mx-2" style={{ fontSize: '1.5em' }} />
          <BsFacebook className="mx-2" style={{ fontSize: '1.5em' }} />
        </div>
      </Row>
      <br />
      <br />
      <Row className="justify-content-between">
        <div className="d-flex">
          <p className="mx-2">Company Profile</p>
          <p className="mx-2">Indication Required by Law</p>
          <p className="mx-2">Terms of Service</p>
          <p className="mx-2">Privacy Policy</p>
        </div>
        <div className="d-flex">
          <AiOutlineCopyrightCircle
            className="mx-1 mt-2"
            style={{ fontSize: '0.5em' }}
          />
          <p>Filmaniac Holdings, Inc.</p>
        </div>
      </Row>
    </Container>
  )
}

export default MyFooter
