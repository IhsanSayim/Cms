import React, { Component } from 'react';

export class Category extends Component {
    displayName = Category.name
    constructor(props){
        super(props)
    }

    render() {
        return (
           <div>Hello &nbsp {this.props.match.params.id}</div>
        );
    }

}
