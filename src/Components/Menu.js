import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from '../Components/images/ensonhaber-logo.png'
import axios from "axios/index";
import menu from "../styles/menu.css";
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';




export default class Menu extends Component {
    state = {
        menu: ""
    }
    constructor(props){
        super(props)

    }

    onClick(){
        alert("hello")
    }
    componentDidMount() {
        axios.get(`https://localhost:44341/api/mainpages/getmenu/0`)
            .then(res => {
                const menu = res.data;
                this.setState({menu});
            }).catch({
        })
    }


    render() {
        return (
            <div className="page-header navbar" style={this.divStyle}>
                <div className="page-header-inner">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="page-logo" style={{width:100,padding:0}}>
                                <Link to="/">
                                    <img src={logo} alt="logo" height={45} style={{marginTop:4}}/>
                                </Link>
                            </div>

                            <div className="hor-menu   hidden-sm hidden-xs">
                                <ul className="nav navbar-nav" dangerouslySetInnerHTML={{__html:this.state.menu}}>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
