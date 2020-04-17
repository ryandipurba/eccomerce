import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';

export default class Search extends Component {
    render() {
        const { handleSearchChange } = this.props
        return (
            <div>
                <Row>
                    <Col>
                        <input type="text" className="form-control" placeholder="search" onChange={handleSearchChange} />
                    </Col>
                </Row>
            </div>
        )
    }
}
