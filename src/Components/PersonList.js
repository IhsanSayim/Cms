import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        slides: [{
            Header: "",
            SubPageId: "",
            SliderId: "",
            SubPageImageUrl: "",
        }]
    }

    componentDidMount() {
        axios.get(`https://localhost:44341/api/subpages/getsliders`)
            .then(res => {
                const slides = res.data;
                this.setState({slides});
            }).catch({

        })
    }

    render() {
        return (
            <ul>
                {this.state.slides.map(slide =>
                    <li>{slide.Header} <br></br> {slide.subPageId} &nbsp {slide.sliderId} &nbsp {slide.subPageImageUrl}  <p>&nbsp;</p>
                        <img src={slide.subPageImageUrl} alt=""/>
                    </li>
                )}
            </ul>
        )
    }
}
