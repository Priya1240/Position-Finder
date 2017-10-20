// eslint-disable-next-line
import React from 'react';
import NavBar from "./NavBar";
import "./header.scss";


class Header extends React.Component {

  render(){
    return(
      <div>
	    	  		   <NavBar />
                      <h2 id="title" Name="text-center">Position Finder!</h2>
                        <p className="text-center">
                          <h2>A dating app that matches on your positional preference</h2>
                        </p>


                    </div>
	       


   )
  }
}

export default Header;
