import { Button, Navbar } from 'react-bootstrap'
import { MdOutlineAccountCircle } from 'react-icons/md'
import '../styles/mynavbar.css'

const MyNavbar = () => {
  return (
    <Navbar bg="dark" className="justify-content-between">
      <div>
        <Navbar.Brand href="#home">
          <img
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </div>
      <div>
        <MdOutlineAccountCircle className="acount-icon mr-3" />
        <Button variant="danger">Log out</Button>
      </div>
    </Navbar>
  )
}

export default MyNavbar
