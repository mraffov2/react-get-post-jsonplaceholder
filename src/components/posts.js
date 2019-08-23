import React, { Component } from 'react'
import axios from 'axios';

export default class Posts extends Component {

    state = {
        posts: []
    }
     
    async componentDidMount() {
       const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
       const data = await res.data;

       this.setState({posts: data})
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h1 className="mt-3">Posts</h1>
                    <div  className="row justify-content-center">
                    {
                        this.state.posts.map(post => {
                            return <div key={post.id} className="card col-11 col-sm-10 col-lg-5 mt-3 mr-2">
                                <div className="card-body">
                                    <h1 className="card-title">
                                        {post.title}
                                    </h1>
                                    <p className="card-text">
                                        {post.body}
                                    </p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            </React.Fragment>
        )
    }
}
