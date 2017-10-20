// Include React
import React from "react"
// Here we include all of the sub-components
import Home from "./home/Home";

import "./main.scss";
//import link to create link with router
import { Link } from 'react-router-dom';


// Helper for making AJAX requests to our API
import helpers from "./utils/helpers";

// Creating the Main component
class Main extends React.Component {

    constructor(props) {
        super(props);
        // Here we set a generic state associated with the number of clicks
        // Note how we added in this history state variable
      this.state = {searchTerm: "", results: "", history: []}
     // console.log("I am in the main component in the constructor");
      //console.log("this.props", this.props);
    }


    // The moment the page renders get the History
    componentDidMount() {
        // Get the latest history.
        helpers.getHistory().then(function (response) {
            console.log(response);
            if (response !== this.state.history) {
//                console.log("History from Main.js", response.data);
                this.setState({history: response.data});
            }
        }.bind(this));
    }

    // If the component changes (i.e. if a search is entered)...
    componentDidUpdate() {

        // Run the query for the address
        helpers.runQuery(this.state.searchTerm).then(function (data) {
            if (data !== this.state.results) {
              //  console.log("Address", data);
                this.setState({results: data});

                // After we've received the result... then post the search term to our history.
                //note all the .bind() - we need to make sure the helper functions have the
                //correct context
                helpers.postHistory(this.state.searchTerm).then(function () {
                    console.log("Updated!");

                    // After we've done the post... then get the updated history
                    helpers.getHistory().then(function (response) {
                        console.log("Current History", response.data);

                        console.log("History", response.data);

                        this.setState({history: response.data});

                    }.bind(this));
                }.bind(this));
            }
        }.bind(this));
    }

    // This function allows childrens to update the parent.
    setTerm(term) {
        this.setState({searchTerm: term});
    }

    // Here we render the function
    render() {
      return (
<div>



<div>
		  <Link to='Register'><button id="registerHere"type="submit">Register</button></Link>
		  <Link to='Login'> <button id="loginHere" type="submit">Login</button></Link>
</div>





		  <p>{this.props.address}</p>
                </div>
        );
    }
}

// Export the component back for use in other files
export default Main;
