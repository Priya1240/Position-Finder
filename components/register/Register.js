// eslint-disable-next-line
import React from 'react';

import { Link } from 'react-router-dom';

import Header from "../common/Header";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import "./register.scss";

import helpers from '../utils/helpers';




class Register extends React.Component {

   constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
        // Here we set a generic state associated with the text being searched for
      this.state = {
        visible : false,
        firstname: "",
        lastname: "",
        emailaddress: "",
        password: "",
	data:""
      }
     console.log("this.state.data= ", this.state.data);
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




  render(){
    return(


      <div> <Header />
 <div className="container">
	<div className="row">
  <div className="priya">
          <div className="jumbotron">


          <h2 id="register" className="panel-title text-center">Register</h2>


        <div className="panel-body text-center">

		    <form  onSubmit={this.handleSubmit} >
		      <br/>
		      <label>First Name:     </label>
		    <input
		       name="firstname"
		       // TODO: ype="text"
		       id="user"
		       onChange={this.handleChange.bind(this)}
		       // width="80%"
		       />
		    <br/>
		    <label> Last Name: </label>
		    <input
		       name="lastname"
		       type="text"
		       id="user"
		       onChange={this.handleChange.bind(this)}
		       // width="80%"
		       />
		    <br/>
		    <label>     Email: </label>
		    <input
		       name="emailaddress"
		       type="text"
		       id="user"
		       onChange={this.handleChange.bind(this)}
		       // width="80%"
		       />
		    <br/>
		    <label>  Password: </label>
		    <input
		       name="password"
		       type="text"
		       id="user"
		       onChange={this.handleChange.bind(this)}

		       // width="80%"
		       />
		    <br/>
        <br/>
		   <Link to='login'><input id="submit"
		       type="submit"
		       className="button"
		       //value="submit"
					   />
		     </Link>

		    </form>
        </div>
</div>

        </div>
	<Footer let formInput={this.state }/>

      </div>
      </div>
      </div>

    );
  }
}

export default Register;
