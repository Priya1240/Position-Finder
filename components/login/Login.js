// Include React
import React from 'react';

//import link to create link with router
import { Link } from 'react-router-dom';

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
        firstname: "",
        lastname: "",
        emailaddress: "",
        password: ""
      }
    }

    // This function will respond to the user input
    // handleChange(event) {
    //     this.setState({term: event.target.value});
    // }

  handleChange(e){
//    console.log(event.target);
    // this.setState({firstname: event.target.value, lastname: event.target.value,
        e.preventDefault();
    //   emailaddress: event.target.value, password: event.target.value})
    this.setState({
      [e.target.name]: e.target.value
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
     helpers.createUser(this.state)
    console.log(this.state, "this.state in handlesubmit");
  }
  


    // Here we describe this component's render method
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title text-center">Login (was Query)</h3>
                </div>
		<Header />
                <div className="panel-body text-center">
		    <Link to='api/users'>Login</Link>
		  <form  onSubmit={this.handleSubmit} >
		    <br/>
		    <label>First Name:</label>
		    <input
		       name="firstname"
		       type="text"
		       id="user"
		       onChange={this.handleChange.bind(this)}
		       // width="80%"
		       />
		    <br/>
		    <label>Last Name:</label>
		    <input
		       name="lastname"
		       type="text"
		       id="user"
		       onChange={this.handleChange.bind(this)}
		       // width="80%"
		       />
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
		    <input
		       type="submit"
		       className="button"
		       //value="submit"
		       />
		  </form>
                </div>
		<Footer />
            </div>
        );
    }
}
// Export the component back for use in other files
export default Login;
