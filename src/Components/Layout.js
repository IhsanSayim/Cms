import React, { Component } from 'react';
import { Col, Grid, Row} from 'react-bootstrap';

import Menu  from './Menu';
import Slider  from './Slider';
import {Post } from './Post';

export class Layout extends Component {
    displayName = Layout.name

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col sm={12}>
                        <Menu />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
