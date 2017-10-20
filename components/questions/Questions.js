// Include React
import React from 'react';

//import link to create link with router
import { Link } from 'react-router-dom';

import helpers from '../utils/helpers';
//Mak instance of AuthService directly
//const auth = new AuthService('http://localhost:3333')
import Header from '../common/Header';
import Footer from '../common/Footer';
import Profile from '../profile/Profile';
// Create the Child Component
class Questions extends React.Component {

   constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
        // Here we set a generic state associated with the text being searched for
      this.state = {
        visible : false,
	emailaddress: "",
	password: "",
      	data:""
      }// TODO: this should not be setting state from the Login's handleSubmit
     console.log("wHY THIS jUSTIN?this.state= ", this.state);
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
      [e.target]: e.target.value
    })}


  //from https://github.com/zeit/next.js/issues/153--------------//
  componentDidMount () {
    // if (auth.loggedIn()) {
    //   this.props.url.replaceTo('/admin')   // redirect if you're already logged in
    // }
 //      console.log( "this.state line should = to the user form input", this.state );
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state);
  // }
  handleSubmit(e){
    e.preventDefault();
    console.log('QuestionsSubmit',helpers.handleQSubmit(data));
    console.log("Helloe YO ");
    //.this.props.onSubmit(this.state);
//     helpers.createUser(this.state)
    //console.log(this.state, "In Questions this.state in handlesubmit");
  }
 

    // Here we describe this component's render method
    render() {
      return (

 <div className="container">












   <div className="row">
   <div className="quest">
<Header />          <div className="jumbotron">


	  <div className="panel panel-default">
                <div className="panel-heading">
		  <div id="picOne" >
		   
		  </div>
		  <h3>1)Accordion</h3>
		  <div className="question">
		    <fieldset>
		      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "true"/>No-Way
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>One Day
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>Let's Play
		    </fieldset>
		  </div>
		  <h3>2)PinWheel</h3>
		  <div className="question">
		    <fieldset>
		      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "true"/>No-Way
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>One Day
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>Let's Play
		    </fieldset>
		  </div>
		  <h3>3)Propeller</h3>
		  <div className="question">
		    <fieldset>
		      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "true"/>No-Way
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>One Day
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>Let's Play
		    </fieldset>
		  </div>
		  <h3>4)Slide</h3>
		  <div className="question">
		    <fieldset>
		      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "true"/>No-Way
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>One Day
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>Let's Play
		    </fieldset>
		  </div>
		  <h3>5)ThreeSome</h3>
		  <div className="question">
		    <fieldset>
		      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "true"/>No-Way
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>One Day
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>Let's Play
		    </fieldset>
		  </div>
		  <h3>6)Vixen</h3>
		  <div className="question">
		    <fieldset>
		      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "true"/>No-Way
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>One Day
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>Let's Play
		    </fieldset>
		  </div>
		  <h3>7)Ladder</h3>
		  <div className="question">
		    <fieldset>
		      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "true"/>No-Way
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>One Day
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>Let's Play
		    </fieldset>
		  </div>
		  <h3>8)X-Rated</h3>
		  <div className="question">
		    <fieldset>
		      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "true"/>No-Way
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>One Day
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>Let's Play
		    </fieldset>
		  </div>

		</div>
<Link to='/profile' component={Profile}>
	       <button
		  onSubmit={this.handleSubmit}
		  type="submit"
		  id="blog_post_submit"
		  className="btn-default btn"
		  >
	       Submit
	     </button></Link>
	  </div>
    </div>
</div>
<Footer />
   </div>

 </div>
        );
    }
}
// Export the component back for use in other files
export default Questions;
