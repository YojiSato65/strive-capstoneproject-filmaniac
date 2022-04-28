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
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sci-Fi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Drama</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/person">Person</Nav.Link>
            <Nav.Link href="/library">Library</Nav.Link>
            <Nav.Link href="/favorite">Watch again</Nav.Link>
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
