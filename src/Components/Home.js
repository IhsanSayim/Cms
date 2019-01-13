import React, { Component } from 'react';
import { Col, Grid, Row} from 'react-bootstrap';
import Slider  from './Slider';
import {Post } from './Post';

export class Home extends Component {
    displayName = Home.name
    constructor(props){
        super(props)
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <Row>
                <Col sm={2}>
                </Col>
                <Col sm={8}>
                    <Slider/>
                    <Post/>
                </Col>
                <Col sm={2}>
                </Col>
            </Row>
        );
    }
}
