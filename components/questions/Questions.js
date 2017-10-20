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

   <div>
     <form  onSubmit={this.handleSubmit}
	    name="blog_post"
	    className="form-horizontal"
	    >
       <div id="blog_post">
	 <div className="form-group">
	   <label className="col-sm-2 control-label required" htmlFor="blog_post_title">Title</label>
	   <div className="col-sm-10">
	     <input type="text"
		    id="blog_post_title"
		    required="required"
		    className="form-control"
		    onChange={this.handleChange.bind(this)}
		    />
	   </div>
	 </div>
	 <div className="form-group">
	   <label className="col-sm-2 control-label required" htmlFor="blog_post_body">Body</label>
	   <div className="col-sm-10">
	     <input type="text"
		    id="blog_post_body"
		    required="required"
		    className="form-control"
		    onChange={this.handleChange.bind(this)}
		    />
	   </div>
	 </div>
	 <div className="form-group">
	   <div className="col-sm-2"></div>
	   <div className="col-sm-10">
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
     </form>
                 </div>





   




   
   <div className="row">
<Header />          <div className="jumbotron">

	    
	  <div className="panel panel-default">
                <div className="panel-heading">

		   <h3>1) In one of the first scenes of the episode, Detectives Marty and Rust visit Mrs. Kelly, mother of a murder victim and she gets a headache. What does she say is the reason for that headache?</h3>
		  <div className="question">
		    <fieldset>
		      <button className="submit" className="btn">Choose Wisely!</button>
		      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "true"/>Answer: She worked in dry cleaning
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>Some other choice here to answer
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers" data= "false"/>another choice here
		    </fieldset>
		  </div>

		  <div className="question">
		    <h3>2) In the beginning of the episode, Rust and Marty go to meet Joel Theriot. What is Joel's profession as shown in this episode?</h3>
		    <fieldset>
		      <button className="submit" className="btn">Choose Wisely!</button>
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers"  data="false"/>Some choice here
                      <label className="block"></label>
                      <input type='radio' name='type' className="answers"  data="true"/>Answer: A pastor
                      <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="false"/>Some other choice here
                
            </fieldset>
        </div>

        <div className="question">
            <h3>3) How do Marty and Rust get information from Geraci?</h3>
            <fieldset>
              <button className="submit" className="btn">Don't fudge this up!</button>
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="false" />Some answer here
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="false" />some other choice here
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="true" />Answer: They show him the videotape
                
            </fieldset>
        </div>

        <div className="question">
            <h3>4) Who plays the role of the detective Rust?</h3>
            <fieldset>
              <button className="submit" className="btn">Are You sure?</button>
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="true" />Answer: Matthew McConaughey
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="false" />somechoice here
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="false" />anotherchoice
                
            </fieldset>
        </div>

        <div className="question">
            <h3>5) Rust and Marty find hostage children inside the shed next to the house of Ledoux that baffles them.</h3>
            <fieldset>
             <button className="submit" className="btn">Choose Wisely!</button>
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="true" />True
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="false" />False
                
                
            </fieldset>
        </div>

        <div className="question">
            <h3>6) Marty goes to the cell where the boys linked with his daughter's misdemeanor were being held. What does he do there?</h3>
            <fieldset>
             <button className="submit" className="btn">Choose Wisely!</button>
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="false" />anotherchoice
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="false" />somechoice here
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="true" />Answer: Beats them up
                
            </fieldset>
        </div>

        <div className="question">
            <h3> 7) When Marty asks Rust if his mom is still alive, what does Rust say?</h3>
            <fieldset>
             <button className="submit" className="btn">Choose Wisely!</button>
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="false" /> Matthew McConaughey
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="false" />somechoice here
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="true" />Answer: Maybe
                
            </fieldset>
        </div>

        <div className="question">
            <h3>8)Marty and Rust stop for a snack and discuss the case. What does Marty call Rust in this scene?</h3>
            <fieldset>
             <button className="submit" className="btn">Choose Wisely!</button>
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="false" /> Matthew McConaughey
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="false" />Answer: Obsessive
                <label className="block"></label>
                <input type='radio' name='type'  className="answers"  data="true" />anotherchoice
                
            </fieldset>
        </div>

        <div className="question">
            <h3>9) Rust interrogates a woman who killed her own child. What is the disorder that he mentions during this questioning?</h3>
            <fieldset>
             <button  className="submit" className="btn">Choose Wisely!</button>
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="true" />Answer:  Munchausen by proxy 
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="false" />somechoice here
                <label className="block"></label>
                <input type='radio' name='type' className="answers"  data="false" />anotherchoice
                
            </fieldset>
        </div>
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
