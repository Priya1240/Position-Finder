// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';

import Header from "..//common/Header";
import Footer from "..//common/Footer";
import helpers from '../utils/helpers';



class Register extends React.Component {

  render(){
    return(

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
		       
		       // width="80%"
		       />
		    <br/>
		    <label>Last Name:</label>
		    <input
		       name="lastname"
		       type="text"
		       id="user"
		       
		       // width="80%"
		       />
		    <br/>
		    <label>Email</label>
		    <input
		       name="emailaddress"
		       type="text"
		       id="user"
		       
		       // width="80%"
		       />
		    <br/>
		    <label>Password</label>
		    <input
		       name="password"
		       type="text"
		       id="user"
		       

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

    )
  } 
}

export default Register;
