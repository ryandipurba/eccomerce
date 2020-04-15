import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import addBasket from "../action/AddAction";
import addWishtList from "../action/addWishListAction";
import { connect } from 'react-redux';

const Product = ({ addBasket, addWishtList, product }) => {
    let quantity = 1
    let love = true
    const barang = product.product
    return (
        <>
            <Container style={{ marginTop: 10 }}>
                <Row>
                    {barang.map((product, index) =>
                        <Col md={4} style={{ marginTop: 10 }} key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.urlImage} width={210} height={160} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{product.price}</Card.Text>
                                    <Card.Text>{product.details}</Card.Text>
                                    <Button size='sm' onClick={() => addBasket(product.id, product.name, product.price, product.details, product.urlImage, quantity)} variant="primary">Add to cart</Button>{' '}
                                    <Button size='sm' onClick={() => addWishtList(product.id, product.name, product.price, product.details, product.urlImage, love)} variant="primary">Add to wishtlist</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    );
}

const mapStateToProps = (state) => ({
    product: state.product
})


export default connect(mapStateToProps, { addBasket, addWishtList })(Product);