import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from './Homepage';
import BlogPost from './BlogPost';
import PostForm from './PostForm';


/** Maps URL to components
 * 
 * Prop
 * 
 * State
 * 
 * Routes -> Homepage -> PostList
          -> BlogPost -> Form(edit)
          -> Form(new)
 */


function Routes() {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/new">
          <PostForm />
        </Route>

        <Route exact path="/:id">
          <BlogPost />
        </Route>

      </Switch>

    </div>
  );
}

export default Routes;
