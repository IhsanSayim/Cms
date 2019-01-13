import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class List extends Component {
    constructor(props){
        super(props)
    }

    onClick(){
        alert("hello")
    }
    render() {
        return (

            <ul >
                {
                    this.props.items.map((item, index) => <li onClick={this.onClick} key={index}>{item}</li>)
                }
            </ul>
        );
    }
}
List.propTypes={
    items:PropTypes.array.isRequired,
    name:PropTypes.string.isRequired
}