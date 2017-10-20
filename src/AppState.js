import React, { Component } from 'react';


class AppState extends Component {
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

  onChangeStatus(e){
    console.log("Hello from the appstateCOmp");
  }

  
  render() {
    return (
      <div className="AppState">
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            appState: this.state,
            setAppState: this.setAppState
          });
        })}
      </div>
      
    );
    
  }
}

export default AppState;
