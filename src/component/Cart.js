import React from 'react';
import { Container, Table, Image } from 'react-bootstrap';
import { connect } from 'react-redux';

const Cart = ({ cart }) => {
    console.log(cart.product)
    const productInCart = cart.product.map((product, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>
                    <Image src={product.urlImage} thumbnail width={160} /></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.quantity * product.price}</td>
            </tr>
        );
    })
    return (
        <>
            <Container style={{ marginTop: 20 }}>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody >
                        {productInCart}
                        <tr style={{ fontWeight: 'bold' }}>
                            <td colSpan='5'>Sub Total</td>
                            <td>{cart.cartCost}</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
};

export default connect(mapStateToProps, null)(Cart);