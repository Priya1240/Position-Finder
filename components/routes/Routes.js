// eslint-disable-next-line
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
<div>

  <Route exactly pattern='/' component={Main}/>
  <Route pattern="/Login" component={Login} />

  <Route exactly pattern='/' component={Main} />
  <Route pattern="/Login" component={Login} />
  <Route match="/login" component={Login} />
  <Route match="/register" component={Register} />
  <Route match="/questions" component={Questions} />
  <Route match="/profile" component={Profile} />
  

</div>
    </BrowserRouter>
  )
}


export default Routes;
