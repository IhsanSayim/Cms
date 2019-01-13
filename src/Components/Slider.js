import React, {Component} from 'react';
import axios from "axios/index";
import { Link } from 'react-router-dom'
import List from "./List";



export class Slider extends Component {
    displayName = Slider.name

    state = {
        slider:[],
        i:0
    }

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        axios.get(`https://localhost:44341/api/subpages/getsliders`)
            .then(res => {
                const slider = res.data;
                this.setState({slider});
            }).catch({
        })
    }


    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="6000">
                <div className="carousel-inner" role="listbox">


                    <ol className="carousel-indicators">
                        {this.state.slider.map(carousel =>
                            <li data-target="#myCarousel" data-slide-to={this.state.i++}></li>

                        )}
                    </ol>
                    <noscript>{this.state.i=0}</noscript>
                    {this.state.slider.map(slide=>

                        <div className={this.state.i++==0?"item active":"item"}>
                            <Link to={'/Post/'+slide.subPageId }><img
                                src={slide.subPageImageUrl} alt="ASP.NET" className="img-responsive" width="100%"
                                style={{height:'520px'}} alt="deneme"/></Link>
                        </div>
                    )}

                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                    </a>
                </div>
            </div>
        );
    }

}
