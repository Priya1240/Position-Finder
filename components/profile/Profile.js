// Include React
import React from 'react';

// Creating the Results component
class Profile extends React.Component {
    // Here we render the function
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title text-center">Register or Login (was Results)</h3>
                </div>
                <div className="panel-body text-center">
                  <h1>PRofile (was Address:)</h1>
		  <button id="registerHere"type="submit">Register Here!</button>
		  <button id="loginHere" type="submit">Login Here!</button>

		  <p>{this.props.address}</p>
                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Profile
