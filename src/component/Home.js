import React, { Component } from 'react'
import Product from './Product'
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addProduct } from "../action/AddAction";


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            name: '',
            price: '',
            details: '',
            urlImage: '',
        }
    }
    handleClose = (event) => {
        this.setState({
            show: false
        })
    }
    handleShow = (event) => {
        this.setState({
            show: true
        })
    }
    handleNameInput = (event) => {
        this.setState({
            name: event.target.value
        })
        console.log(this.state.name)
    }
    handlePriceInput = (event) => {
        this.setState({
            price: event.target.value
        })
    }
    handleDetailsInput = (event) => {
        this.setState({
            details: event.target.value
        })
    }
    handleUrlImageInput = (event) => {
        this.setState({
            urlImage: event.target.value
        })
    }
    handelSubmit = (e) => {

    }
    render() {
        const fab = {
            backgroundColor: 'green',
            display: 'block',
            width: '50px',
            height: '50px',
            textAlign: 'center',
            color: 'white',
            fontSize: '25px',
            fontWieght: 'bold',
            borderRadius: '50%',
            textDecoration: 'none',
            position: 'fixed',
            right: '30px',
            bottom: '30px'

        };
        const { addProduct } = this.props
        let id = Math.floor(Math.random() * 10) + 7
        return (
            <>
                <Product />
                <Button style={fab} onClick={this.handleShow}>+</Button>
                <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="Name">
                                <Form.Label>Name Product</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name Product" onChange={this.handleNameInput} />
                            </Form.Group>
                            <Form.Group controlId="Price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter Price" onChange={this.handlePriceInput} />
                            </Form.Group>
                            <Form.Group controlId="Detail">
                                <Form.Label>Detail</Form.Label>
                                <Form.Control as="textarea" placeholder="Enter Detail Product" onChange={this.handleDetailsInput} />
                            </Form.Group>
                            <Form.Group controlId="UrlImage">
                                <Form.Label>Url Image</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Url Image" onChange={this.handleUrlImageInput} />
                            </Form.Group>
                        </Form>
                        <Button variant="primary" type="submit" onClick={() => addProduct(id, this.state.name, this.state.price, this.state.details, this.state.urlImage)}>
                            Add Product
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product
})



export default connect(mapStateToProps, { addProduct })(Home)

