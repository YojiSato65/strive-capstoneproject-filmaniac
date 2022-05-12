import { Button, Navbar, NavDropdown, Image, Nav } from 'react-bootstrap'
import { MdOutlineAccountCircle } from 'react-icons/md'
import '../styles/mynavbar.css'

const MyNavbar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      className="justify-content-between px-5 py-3"
    >
      {/* <div className="d-flex"> */}
      <Navbar.Brand href="/">
        <Image
          src={require('../assets/Filmaniac.png')}
          width="100"
          height="35"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown
            title="Genre"
            id="basic-nav-dropdown"
            className="d-inline-block"
          >
            <NavDropdown.Item href="/genre/action">Action</NavDropdown.Item>
            <NavDropdown.Item href="/genre/adventure">
              Adventure
            </NavDropdown.Item>
            <NavDropdown.Item href="/genre/animation">
              Animation
            </NavDropdown.Item>
            <NavDropdown.Item href="/genre/biography">
              Biography
            </NavDropdown.Item>
            <NavDropdown.Item href="/genre/comedy">Comedy</NavDropdown.Item>
            <NavDropdown.Item href="/genre/crime">Crime</NavDropdown.Item>
            <NavDropdown.Item href="/genre/documentary">
              Documentary
            </NavDropdown.Item>
            <NavDropdown.Item href="/genre/drama">Drama</NavDropdown.Item>
            <NavDropdown.Item href="/genre/family">Family</NavDropdown.Item>
            <NavDropdown.Item href="/genre/fantasy">Fantasy</NavDropdown.Item>
            <NavDropdown.Item href="/genre/horror">Horror</NavDropdown.Item>
            <NavDropdown.Item href="/genre/musical">Musical</NavDropdown.Item>
            <NavDropdown.Item href="/genre/romance">Romance</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/crew">Crew Search</Nav.Link>
          <NavDropdown
            title="Favorites"
            id="basic-nav-dropdown"
            className="d-inline-block"
          >
            <NavDropdown.Item href="/favorite/movie">Movie</NavDropdown.Item>
            <NavDropdown.Item href="/favorite/person">Crew</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* </div> */}
        <div>
          <MdOutlineAccountCircle className="acount-icon mr-3" />
          <Button variant="warning">Log out</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
