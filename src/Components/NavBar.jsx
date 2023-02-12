import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../imgs/logo.png';
import CartWidget from './CartWidget';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../imgs/techstoreimg.jpg';
import Img4 from '../imgs/techstoreimg4.png';
import Img5 from '../imgs/techstoreimg5.jpg';
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <>
    <header>
    <Navbar className="navi" bg="light" expand="lg">
      <Container>
      <Link to={'/'} className="logo"><img src={Logo} alt=""/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Inicio</Nav.Link>
            <Nav.Link href='/categories/'>Categorias</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#acercaDe">Acerca De</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div>
      <CartWidget/>
    </div>
    </header>


    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3>Bienvenido a X-tore</h3>
          <p>A la vanguardia de la tecnologia para tu hogar.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={Img4}
          alt="Second slide"
        />

        <Carousel.Caption className='carrousel-text'>
          <h3>Feria Samsung</h3>
          <p>2 Samsung Galaxy al precio de uno.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={Img5}
          alt="Third slide"
        />

        <Carousel.Caption className='carrousel-text'>
          <h3>Vivimos en Estado Play</h3>
          <p>
            No olvides visitar nuestra area de Videojuegos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default NavBar;