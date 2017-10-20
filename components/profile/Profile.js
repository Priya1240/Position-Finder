// Include React
import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../home/Home';
import "./profile.scss"
// Creating the Results component
class AppLink extends React.Component {
    // Here we render the function
    render() {
        return (

      <Link {...this.props} component={Home} className="active-link"  />


    )
  }
}


class Profile extends React.Component {

  render(){
    return(

      <div className="container">
	<div className="row">

	 <div>
   <AppLink id="home" to="/">Home</AppLink>
   <AppLink id="login" to="/login">Login</AppLink>
   </div>
   <div>
	   <p id="match">Your Matches!</p>
	   <h2>Michelle</h2>
	   <h2>Sandra</h2>
	   <h2>Rose</h2>
	   <h2>Mellissa</h2>
	   <h2>Melanie</h2>

	 </div>

       </div>
     </div>

        );
    }
}

// Export the component back for use in other files
export default Profile
