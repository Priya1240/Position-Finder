// Include React
import React from 'react';
// Here we include all of the sub-components
//import link to create link with router
import { BrowserRouter, Match, Miss  } from 'react-router';
import { Link } from 'react-router-dom';

import Register from "../register/Register";
import Login from "../login/Login";

// Helper for making AJAX requests to our API
import helpers from "../utils/helpers";
import Routes from '../routes/Routes';
import Header from "../common/Header";
import Footer from "../common/Footer";
import Main from '../Main';


// Creating the Results component
class Home extends React.Component {
  // Here we render the function
  constructor(props) {
       super(props);
    this.onClick = this.onClick.bind(this);
    this.state={hey: 'hey'  }
  }
  
  

    // The moment the page renders get the History
    componentDidMount() {
        // Get the latest history.
        helpers.getHistory().then(function (response) {
            console.log(response);
            if (response !== this.state.history) {
                console.log("History", response.data);
                this.setState({history: response.data});
            }
        }.bind(this));
    }

    // If the component changes (i.e. if a search is entered)...
    componentDidUpdate() {

        // Run the query for the address
        helpers.runQuery(this.state.searchTerm).then(function (data) {
            if (data !== this.state.results) {
                console.log("Address", data);
                this.setState({results: data});

                // After we've received the result... then post the search term to our history.
                //note all the .bind() - we need to make sure the helper functions have the
                //correct context
                helpers.postHistory(this.state.searchTerm).then(function () {
                    console.log("Updated!");

                    // After we've done the post... then get the updated history
                    helpers.getHistory().then(function (response) {
                        console.log("Current History", response.data);

                        console.log("History= response.data", response.data);

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
  onClick(e){
    e.preventDefault();
    console.log(this.state, "this.state in onclick bro");
  }

    render() {
        return (
          
	  <div className="container">
            <div className="row">
              
	      <div>
		
		   <Header />
	      </div>
	      
	      <Main />
	    </div>
	    
	    
	    <div className="row">
	      <Footer />
	    </div>
	    
          </div>
        );
    }
}

// Export the component back for use in other files
export default Home
