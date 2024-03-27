import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar collapseOnSelect  className="bg-success fixed-top">
      <Container className="d-flex">
        <Navbar.Brand href="/">
          <img
            src="../../public/images/logo.png"
            width="10%"
            className="d-inline-block align-top"
            alt=""
          />
          <img src="../../public/images/logo-text.png" width="15%" height="15%" className="d-inline-block"alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          
          <Nav>
            <Nav.Link href="/veterinaire" className="mt-2 fw-semibold text-white">
              Vous êtes un vétérinaire ?
            </Nav.Link>
            <Nav.Link eventKey={2} href="/connexion">
              <Button className="btn-primary">
              Connexion
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;