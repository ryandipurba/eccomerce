import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBasket, addWishtList } from "../action/AddAction";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

class DetailsProduct extends Component {
    render() {
        const { product, addBasket, addWishtList, match } = this.props
        let id = match.params.id;
        let quantity = 1
        let love = true
        console.log(id)
        const details = product.product.filter(product => {
            return product.id === parseInt(id);
        });
        console.log(details)
        return (
            <>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <div>
                                <div>
                                    <h1>{details[0].name}</h1>
                                    <Image src={details[0].urlImage} thumbnail />
                                    <h3>{details[0].price}</h3>
                                    <p>{details[0].details}</p>
                                </div>
                                <Button size='sm' onClick={() => addBasket(details[0].id, details[0].name, details[0].price, details[0].details, details[0].urlImage, quantity)} variant="primary">Add to cart</Button>{' '}
                                <Button size='sm' onClick={() => addWishtList(details[0].id, details[0].name, details[0].price, details[0].details, details[0].urlImage, love)} variant="primary">Add to wishtlist</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product
})


export default connect(mapStateToProps, { addWishtList, addBasket })(DetailsProduct)
