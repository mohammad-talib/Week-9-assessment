import React,{Component} from 'react';
import './App.css';
import UserInput from './component/UserInput';
import UserOutput from './component/UserOutput';


class App extends Component {

 

  state={
    username:"max"
  }

  eventhandler=()=>{
    this.setState = {}
  }

  render() { 
    return ( 
      <div className="App">
        <UserInput type={this.state.username}/>
        <UserOutput username='MAX'/>
      </div>
     );
  }
}
 
export default App;
