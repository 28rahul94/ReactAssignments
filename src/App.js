import React, { Component } from "react";
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component{

  state={

    username:'supermax'

  }

  usernameChangedHandler=(event)=>{

    this.setState({
      username:event.target.value
    })


  }

  render(){

    return(
      <div>

      <UserInput changed={this.usernameChangedHandler} 
      currentName={this.state.username} />
      
      <UserOutput userName={this.state.username} />
      <UserOutput userName="Max"/>
      </div>
      



    )
  }

}
export default App