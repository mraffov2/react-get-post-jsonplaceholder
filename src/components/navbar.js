import React, { Component } from 'react'
import  { Link }  from "react-router-dom";


export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/react-get-post-jsonplaceholder/">React</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/react-get-post-jsonplaceholder/">Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/react-get-post-jsonplaceholder/addposts">Add post</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
