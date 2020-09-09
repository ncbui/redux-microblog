import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from './Homepage';
import BlogPost from './BlogPost';
import NewPost from './NewPost';


/** Maps URL to components
 * 
 * Prop
 * 
 * State
 * 
 * Routes -> Homepage -> PostList
          -> BlogPost -> PostForm(edit)
          -> NewPost  -> PostForm(new)
 */


function Routes() {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/new">
          <NewPost />
        </Route>

        <Route exact path="/:id">
          <BlogPost />
        </Route>

      </Switch>

    </div>
  );
}

export default Routes;
