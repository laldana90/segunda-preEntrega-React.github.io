import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import samsungTV from '../imgs/samsungTV.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../imgs/logo.png';
import CartWidget from './CartWidget';

const ItemDetailContainer = () => {
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
    <h2 className="item-list-container-title">Samsung 43" Smart Neo-QLED GAMING TV 4K</h2>
        
        </section>

        
    <Card style={{ width: '18rem' }}>
    
      <Card.Img className='item-img' variant="top" src={samsungTV} />
      {/* <Counter/> */}
      
     </Card>

    <p className='item-description'>Samsung QN43QN90BA 43" Smart Neo-QLED GAMING TV 4K<ul>
      <li>Pantalla Neo-QLED de 65".</li>
      <li>4K Ultra High Definition.</li>
      <li>Sistema Tizen.</li>
      <li>Asisitente Bixby.</li>
      <li><strong>Q4,500.00</strong></li>
      </ul></p>

      <Button className="item-button" variant="primary">Comprar</Button>

   

    <div>
    <Link to={'/category/:id'} className="back-btn btn-dark">Regresar</Link>
    </div>

    </>
    )
}



export default ItemDetailContainer