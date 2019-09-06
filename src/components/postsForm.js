import React, { Component } from 'react';
import axios from 'axios';

export default class PostsForm extends Component {

    state = {
        title: '',
        body: '',
        postSuccesfully : false,
        postWrong: false,
        titleRequired: false,
        bodyRequired: false
    }

    onSubmit = (e) => {
        e.preventDefault()
        const data = {
            title: this.state.title,
            body: this.state.body
        }

        if (this.state.title === '') {
            this.setState({titleRequired: true})
        } else if (this.state.body === '') {
            this.setState({bodyRequired: true})
        } else {
            axios.post('https://jsonplaceholder.typicode.com/posts', {
                data
            })
            .then( async res => {
                await console.log(res.data)
                await this.setState({postSuccesfully: true})
                await this.setState({title: '', body: '' });
            })
            .catch( async error => {
                await console.log(error)
                await this.setState({postWrong: true})
            })
        }

        
  
          
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render (){
        return (
            <React.Fragment>
                {this.state.postSuccesfully && <div className="container">
                    <div className="row justify-content-center">
                        <div className="alert alert-success mt-3 col-11 col-sm-11 col-lg-6" role="alert">
                                The posts was addes succesfully!
                            </div>
                        </div>
                    </div>}
                {this.state.postWrong && <div className="container">
                <div className="row justify-content-center">
                    <div className="alert alert-warning mt-3 col-11 col-sm-11 col-lg-6" role="alert">
                            Some thing wrong, try again!
                        </div>
                    </div>
                </div>}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card mt-3">
                            <div className="card-header text-center">
                                <h1>Add tasks</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <input onChange={this.onChange}
                                        value={this.state.title}
                                        type="text" name="title"
                                        placeholder="write a tasks"
                                        className="form-control"/>
                                    {this.state.titleRequired && <div><p className="text-danger">Title is required</p></div>}
                                    <br/>
                                    <textarea onChange={this.onChange}
                                        value={this.state.body}
                                        name="body"
                                        placeholder="write a description" rows="2"
                                        className="form-control"
                                        >
                                    </textarea>
                                    {this.state.bodyRequired && <div><p className="text-danger">Description is required</p></div>}
                                    <br/>
                                    <button type="submit" className="form-control btn btn-dark">Save Task</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            
            </React.Fragment>
        )
    }
}