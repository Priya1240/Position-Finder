// Include the Main React Dependencies
import React from "react"
import ReactDOM from "react-dom"
import { render  } from 'react-dom';
//duh, browser router
//import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { Match, Miss  } from 'react-router';
// Include the main Parent Component
import Home from "../components/home/Home"
//Include the AppSate file
//import AppState from "./AppState";
import Login from '../components/login/Login';
import Register from "../components/register/Register";
import AppState from './AppState';
const contentNode = document.getElementById('content');

import Questions from "../components/questions/Questions";
import Profile from '../components/profile/Profile';


class Root extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      async: {},
      header: {
        text: 'Welcome to Position_Finder!!!'
      }
    };
//    console.log("this.context = ", this.propTypes);
  //  console.log("this.props = ", this.props);
     console.log("this.state.props = ", this.state.props);
    this.setAppState = this.setAppState.bind(this);
  }

  setAppState(updater, callback) {
    // newState can be object or function!
    this.setState(updater, () => {
      if (this.props.debug) {
	console.log("setAppState()log1");
        console.log('setAppState', JSON.stringify(this.state));
      }
      if (callback) {
		console.log("setAppState()log2[callback()]");
        callback();
      }
    });
  }

    render () {
//          console.log(this.props);
    return(
          <BrowserRouter>
      <div>
	<AppState>
	<Switch>
	  <Route exact path='/' component={Home}/>
	  <Route  path='/login' component={Login}/>
	  <Route  path='/register' component={Register}/>

	  <Route  path='/register/create' component={Login}/>
	  <Route  path='/login' component={Login}/>
	  <Route path='/questions' component={Questions}/>
	  <Route path='/profile' component={Profile}/>
	  

	</Switch>
	</AppState>
      </div>
    </BrowserRouter>

    )
  }
}
ReactDOM.render(<Root/>, contentNode);

