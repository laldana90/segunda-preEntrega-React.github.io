import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import samsungTV from '../imgs/samsungTV.png';
import sonyTV from '../imgs/sonyTV.png';
import lgTV from '../imgs/lgTV.png';
//import TVimg from '../imgs/tvicon.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../imgs/logo.png';
import CartWidget from './CartWidget';

const ItemListContainerCategorie = () => {
    return(
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

        <section className="item-detail-container">
    <h2 className="item-list-container-title">TV y Video</h2>
        
        </section>

        <div className='row categories-container'>
    <Card className='categories-card' style={{ width: '18rem' }}>
    <p className='card-title'>Samsung Smart 43"</p>
      <Card.Img className='categories-img' variant="top" src={samsungTV} />
      {/* <Counter/> */}
      <Card.Body>
      <Button href='/item/:id' className="categories-button" variant="primary">Ver Detalles</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
    <p className='card-title'>Smart TV Sony Bravia 75"</p>
      <Card.Img className='categories-img' variant="top" src={sonyTV} />
      {/* <Counter/> */}
      <Card.Body>
      <Button href='/item/:id' className="categories-button" variant="primary">Ver Detalles</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
    <p className='card-title'>Smart OLED TV LG 55"</p>
      <Card.Img className='categories-img' variant="top" src={lgTV} />
      {/* <Counter/> */}
      <Card.Body>
      <Button href='/item/:id' className="categories-button" variant="primary">Ver Detalles</Button>
      </Card.Body>
    </Card>
    </div>

    <div>
    <Link to={'/categories/'} className="back-btn btn-dark">Regresar</Link>
    </div>

    </>
    )
}



export default ItemListContainerCategorie
