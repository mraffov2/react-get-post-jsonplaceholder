import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/navbar';
import Posts from './components/posts';
import PostsForm from './components/postsForm'

function App() {
  return (
    <React.Fragment>
      <Router>
          <Navbar>
              <Posts /> 
          </Navbar>
          <Route exact path="/react-get-post-jsonplaceholder/" component={Posts} />
          <Route path="/react-get-post-jsonplaceholder/addposts" component={PostsForm} />
      </Router>
    </React.Fragment>
  );
}

export default App;
