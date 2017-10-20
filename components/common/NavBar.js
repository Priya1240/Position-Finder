// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../home/Home';

import "./navbar.scss";

class AppLink extends React.Component {
    render () {
//          console.log(this.props);
    return(

      <Link {...this.props} component={Home} className="active-link"  />
    )
  }
}


class NavBar extends React.Component {

  render(){
    return(
      <div className="container">
	<div className="row">



	   <AppLink id="home" to="/">Home</AppLink>  |


	   <AppLink id="login"to="/login">Login</AppLink>




       </div>
     </div>

    )
  }
}

export default NavBar;
