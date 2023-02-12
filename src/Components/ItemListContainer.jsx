import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
/* import ItemDetailContainer from './ItemDetailContainer'; */
import TVimg from '../imgs/tvicon.png';
import Celularimg from '../imgs/celularicon.png';
import Refriimg from '../imgs/refriicon.png';
import Cocinaimg from '../imgs/cocinaicon.png';
import PCimg from '../imgs/computadoraicon.png';
import Consoleimg from '../imgs/consoleicon.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../imgs/logo.png';
import CartWidget from './CartWidget';


const ItemListContainer = ({greeting}) => {
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


        <section className="item-list-container">
    <h2 className="item-list-container-title">{greeting}</h2>
        
        </section>

        <div className='row categories-container'>
    <Card className='categories-card' style={{ width: '18rem' }}>
    <p className='card-title'>TV y Video</p>
      <Card.Img className='categories-img' variant="top" src={TVimg} />
      {/* <Counter/> */}
      <Card.Body>
      <Button href='/category/:id' className="categories-button" variant="primary">Explorar</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
    <p className='card-title'>Celulares</p>
      <Card.Img className='categories-img' variant="top" src={Celularimg} />
      {/* <Counter/> */}
      <Card.Body>
        <Button className="categories-button" variant="primary">Explorar</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
    <p className='card-title'>Refrigeracion</p>
      <Card.Img className='categories-img' variant="top" src={Refriimg} />
      {/* <Counter/> */}
      <Card.Body>
        <Button className="categories-button" variant="primary">Explorar</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
    <p className='card-title'>Cocina</p>
      <Card.Img className='categories-img' variant="top" src={Cocinaimg} />
      {/* <Counter/> */}
      <Card.Body>
        <Button className="categories-button" variant="primary">Explorar</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
    <p className='card-title'>Computacion</p>
      <Card.Img className='categories-img' variant="top" src={PCimg} />
      {/* <Counter/> */}
      <Card.Body>
        <Button className="categories-button" variant="primary">Explorar</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
    <p className='card-title'>Videojuegos</p>
      <Card.Img className='categories-img' variant="top" src={Consoleimg} />
     {/*  <Counter/> */}
      <Card.Body>
        <Button className="categories-button" variant="primary">Explorar</Button>
      </Card.Body>
    </Card>
    </div>

    <div>
    <Link to={'/'} className="back-btn btn-dark">Volver a Inicio</Link>
    </div>

    </>
    )
}



export default ItemListContainer
