import React, { useContext } from "react"
import ThemeContext from "../utils/theme"
import { Navbar, Nav, Form } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"
import { Image } from "react-bootstrap"
import logo from "../../static/images/cwa.png"
export default () => {
  const { dark, toggleDark, toString } = useContext(ThemeContext)
  return (
    <Navbar
      className="ps-3 pe-3 pe-sm-5 ps-sm-5"
      variant={toString()}
      fixed="top"
      collapseOnSelect
      expand="md"
    >
      <Navbar.Brand as={Link} to="/">
        <Image
          id="appLogo"
          width="20"
          height="20"
          fluid
          src={logo}
          alt={"CWA Logo"}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="nav-links">
          {/* <Nav.Link className="ms-2" as={Link} to="/blog" title="Blog">
            Blog
          </Nav.Link>
          <Nav.Link className="ms-2" as={Link} to="/about" title="About">
            About
          </Nav.Link> */}
          <Nav.Link className="ms-2" as={Link} to="/people" title="Community">
            Community
          </Nav.Link>
          {/* <Nav.Link className="ms-2" as={Link} to="/projects" title="Projects">
            Projects
          </Nav.Link>*/}
          <Form className="my-auto">
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              title="Toggle Theme"
              checked={dark}
              onChange={toggleDark}
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
