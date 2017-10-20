// eslint-disable-next-line
import React from 'react';
import NavBar from "./NavBar";


class Header extends React.Component {

  render(){
    return(
      <div className="container">
	<div className="row">
          <div className="jumbotron">
	    	  		   <NavBar />
                      <h2 className="text-center">Position Finder!</h2>
                        <p className="text-center">
                          <em>Enter a landmark to search for its exact address (ex: "Eiffel Tower").</em>
                        </p>

			
                    </div>
	       </div>
     </div>
     
    )
  } 
}

export default Header;
