import React, { Component } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { addBasket, addWishtList } from "../action/AddAction";
import { connect } from 'react-redux';
import Search from './Search';
import { Link } from 'react-router-dom';

const isSearched = searchTerm => item => item.name.toLowerCase().includes(searchTerm.toLowerCase());
class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            barang: this.props.product.product,
            searchInput: ''
        }
    }
    handleSearchChange = (e) => {
        this.setState({ searchInput: e.target.value });
        console.log(this.state.searchInput)
    };

    render() {
        const { addBasket, addWishtList } = this.props
        let quantity = 1
        let love = true
        const barang = this.state.barang

        return (
            <>
                <Container style={{ marginTop: 10 }}>
                    <Row>
                        <Col>
                            <Search handleSearchChange={this.handleSearchChange} />
                        </Col>
                    </Row>
                    <Row>
                        {barang.filter(isSearched(this.state.searchInput)).map((product, index) => {
                            return (
                                < Col md={4} style={{ marginTop: 10 }
                                } key={index} >
                                    <Card style={{ width: '18rem', textDecoration: 'none', color: 'black', }} >
                                        <Card.Img variant="top" src={product.urlImage} width={210} height={160} />
                                        <Card.Body>
                                            <Card.Title>{product.name}</Card.Title>
                                            <Card.Text>{product.price}</Card.Text>
                                            <Card.Text>{product.details}</Card.Text>
                                            <Button size='sm' onClick={() => addBasket(product.id, product.name, product.price, product.details, product.urlImage, quantity)} variant="primary">Add to cart</Button>{' '}
                                            <Button size='sm' onClick={() => addWishtList(product.id, product.name, product.price, product.details, product.urlImage, love)} variant="primary">Add to wishtlist</Button>
                                            <Button style={{ marginTop: 5 }} as={Link} to={"/product/" + product.id + "/" + product.name}>View</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                        )}
                    </Row>
                </Container>
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    product: state.product
})


export default connect(mapStateToProps, { addBasket, addWishtList })(Product);