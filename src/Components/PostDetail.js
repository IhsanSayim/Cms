import React, {Component} from 'react';
import axios from "axios/index";
import { Link } from 'react-router-dom';
import { Col, Grid, Row} from 'react-bootstrap';


export class PostDetail extends Component {
    displayName = PostDetail.name;
    postId=this.props.match.params.id;
    state = {
        contents:[],
    }

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        axios.get(`https://localhost:44341/api/subpages/getsubpagecontents/`+this.postId)
            .then(res => {
                const contents = res.data;
                console.log(res.data);
                this.setState({contents});
            }).catch({
        })
    }


    render() {
        return (
            <Row>
                <Col sm={2}>
                </Col>
                <Col sm={8}>
                   <div>
                       <Row>
                       {this.state.contents.map(content=>
                           <div dangerouslySetInnerHTML={{__html:content.contentHtml}}></div>
                       )}
                       </Row>
                   </div>
                </Col>
                <Col sm={2}>
                </Col>
            </Row>
        );
    }

}
