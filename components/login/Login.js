// Include React
import React from 'react';
import "./login.scss";
//import link to create link with router
import { Link } from 'react-router-dom';
import AppState from '../../src/AppState';
import Header from "..//common/Header";
import Footer from "..//common/Footer";
import helpers from '../utils/helpers';
//Mak instance of AuthService directly
//const auth = new AuthService('http://localhost:3333')

// Create the Child Component
class Login extends React.Component {

    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
        // Here we set a generic state associated with the text being searched for
      this.state = {
        visible : false,
        emailaddress: "",
	value:"",
	password: ""
      }
    }

  //this is where the logic for the login and passport verification will go ---------------------------------------------------
//***************************************************************************
  //this is where the logic for the login and passport verification will go ---------------------------------------------------

    // This function will respond to the user input
    // handleChange(event) {
    //     this.setState({term: event.target.value});
    // }

  handleLogin(e) {
    e.preventDefault();
    console.log(onChangeStatus());
    console.log("CLicked");
  }
  handleChange(e){
//    console.log(event.target);
    // this.setState({firstname: event.target.value, lastname: event.target.value,
        e.preventDefault();
    //   emailaddress: event.target.value, password: event.target.value})
    this.setState({
      [e.target.name]: e.target
    })}


  //from https://github.com/zeit/next.js/issues/153--------------//
  componentDidMount () {
    // if (auth.loggedIn()) {
    //   this.props.url.replaceTo('/admin')   // redirect if you're already logged in
    // }
 //      console.log( "this.state line should = to the user form input", this.state );
  }


  handleSubmit(e){
    e.preventDefault();
    //console.log('LOginSubmit',helpers.handleQSubmit(data));
     helpers.createUser(e.target)
    console.log(e.target, "e.tartget in handlesubmit");
  }



    // Here we describe this component's render method
    render() {
        return (
          <div> <Header />
     <div className="container">
    	<div className="row">
      <div className="priya">
              <div className="jumbotron">

  <h2 id="register" className="panel-title text-center">Login</h2>



            <div className="panel-body text-center">


		    <form onSubmit={(e) => this.handleLogin(e)}>
		    <br/>

		    <label>Email</label>
		    <input
		       name="emailaddress"
		       type="text"
		       id="user"
		       onChange={this.handleChange.bind(this)}
		       // width="80%"
		       />
		    <br/>
		    <label>Password</label>
		    <input
		       name="password"
		       type="text"
		       id="user"
		       onChange={this.handleChange.bind(this)}

		       // width="80%"
		       />
		    <br/>
		    <Link to='questions'>
        <input id="submit"
			    id='questionare'
			    type="submit"
          className="button"
					value="Submit"
					    />
		    </Link>
		  </form>
                </div>
                </div>
                </div>
		<Footer />
            </div>
            </div>
            </div>
        );
    }
}
// Export the component back for use in other files
export default Login;
