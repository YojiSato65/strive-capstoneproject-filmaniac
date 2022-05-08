import { Button, Navbar, NavDropdown, Image, Nav } from 'react-bootstrap'
import { MdOutlineAccountCircle } from 'react-icons/md'
import '../styles/mynavbar.css'

const MyNavbar = () => {
  return (
    <Navbar bg="dark" className="justify-content-between px-5 py-3">
      <div className="d-flex">
        <Navbar.Brand href="/">
          <Image
            src={require('../assets/Filmaniac.png')}
            width="100"
            height="35"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown
              title="Genre"
              id="basic-nav-dropdown"
              className="d-inline-block"
            >
              <NavDropdown.Item href="/genre/adventure">
                Adventure
              </NavDropdown.Item>
              <NavDropdown.Item href="/genre/comedy">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="/genre/horror">Horror</NavDropdown.Item>
              <NavDropdown.Item href="/genre/family">Family</NavDropdown.Item>
              <NavDropdown.Item href="/genre/romance">Romance</NavDropdown.Item>
              <NavDropdown.Item href="/genre/animation">
                Animation
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/crew">Crew</Nav.Link>
            <NavDropdown
              title="Favorite"
              id="basic-nav-dropdown"
              className="d-inline-block"
            >
              <NavDropdown.Item href="/favorite/movie">Movie</NavDropdown.Item>
              <NavDropdown.Item href="/favorite/person">Crew</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div>
        <MdOutlineAccountCircle className="acount-icon mr-3" />
        <Button variant="warning">Log out</Button>
      </div>
    </Navbar>
  )
}

export default MyNavbar
