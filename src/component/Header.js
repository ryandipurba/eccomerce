import React, { useState } from 'react';
import { Navbar, Nav, Container, Modal, Button, Table, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const Header = ({ cart, wishlist }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const wrapper = React.createRef();
    const wishListModal = wishlist.productWishtlist.map((wish, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>
                    <Image src={wish.urlImage} thumbnail width={160} /></td>
                <td>{wish.name}</td>
                <td>{wish.price}</td>
            </tr>
        );
    })
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand as={Link} to='/'>Market</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to='/cart'>
                                Cart <ion-icon style={{ verticalAlign: 'bottom', fontSize: '22px' }} name="cart-outline"></ion-icon>({cart.basketNumbers})
                            </Nav.Link>
                            <Nav.Link onClick={handleShow}>Whislist <ion-icon style={{ verticalAlign: 'bottom', fontSize: '22px' }} name="heart-outline"></ion-icon>({wishlist.wishtListNumber})</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            <div ref={wrapper}>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Your Whistlist</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody >
                                {wishListModal}
                            </tbody>
                        </Table></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        wishlist: state.wishList
    }
};

export default connect(mapStateToProps, null)(Header);