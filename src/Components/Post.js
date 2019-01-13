import React, {Component} from 'react';
import axios from "axios/index";
import { Link } from 'react-router-dom';


export class Post extends Component {
    displayName = Post.name

    state = {
        posts:[],
    }

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        axios.get(`https://localhost:44341/api/subpages/getposts`)
            .then(res => {
                const posts = res.data;
                this.setState({posts});
            }).catch({
        })
    }


    render() {
        return (
            <div className="blog-page blog-content-1">
                <div className="row">
                    <div className="col-lg-12" style={{padding:'0px 0px'}}>
                        {this.state.posts.map(post=>
                            <div className="col-lg-4">
                                <div className="blog-post-lg bordered blog-container">
                                    <div className="blog-img-thumb" style={{height:'320px'}}>
                                        <Link to={'/Post/'+post.subPageId }>
                                            <img src={post.postImageUrl} height="100%"/>
                                        </Link>
                                    </div>
                                    <div className="blog-post-content"  style={{height:'200px'}}>
                                        <h2 className="blog-title blog-post-title">
                                            <Link to={'/Post/'+post.subPageId }>{post.header}</Link>
                                        </h2>
                                        <p className="blog-post-desc" title={post.description}>
                                            <span>Hello {post.description.length}</span>
                                            {post.description.length>150? <span>{post.description.substring(0,150)}...</span>:<span>{post.description}</span>}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        );
    }

}
