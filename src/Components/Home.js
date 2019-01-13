import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import {Slider} from './Slider';
import {Post} from './Post';
import {PostDetail} from "./PostDetail";

export class Home extends Component {
    displayName = Home.name

    constructor(props) {
        super(props)
        console.log(this.props.match.params.id)
    }

    render() {
        const {location} = this.props;
        const {params} = this.props.match;

        const homeCheck = location.pathname === "/" ? true : false;
        let SliderItem = homeCheck == true ? <Slider/> : null;
        let PostItem = homeCheck == true ? <Post/> : <Post postId={params.id}/>;

        return (
            <Row>
                <Col sm={2}>
                </Col>
                <Col sm={8}>
                    {SliderItem}
                    {PostItem}
                </Col>
                <Col sm={2}>
                </Col>
            </Row>
        );
    }
}
