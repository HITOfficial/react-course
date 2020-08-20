import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import {UserInput} from './UserInput/UserInput';
import {UserOutput} from './UserOutput/UserOutput';

class App extends Component {
  state = {
    // persons: [
    //   { name: "Max", age: 28 },
    //   { name: "Lip", age: 9 },
    //   { name: "Stephanie", age: 18 }
    // ],
    // otherState: 'WeweweWe'
    name : 'Nobody'
  };

  // switchNameHandler = (newName) => {
  //   this.setState( {
  //     persons: [
  //       { name: 'Max', age: 28 },
  //       { name: newName, age: 9 },
  //       { name: "Stephanie", age: 28 }
  //     ]
  //   } )
  // };

  // NameChangeHandler = (event) => {
  //   this.setState( {
  //     persons: [
  //       { name: 'Max', age: 28 },
  //       { name: event.target.value, age: 9 },
  //       { name: "Stephanie", age: 28 }
  //     ]
  //   } )
  // };

  PickNameHandler = (e) => {
    this.setState( {
      name: e.target.value
    } )
    console.log(this.state.name)
  }

    render(){
      // const style = {
      //   backgroundColor: 'white',
      //   font: 'inherit',
      //   border: '1px solid blue',
      //   padding: '8px',
      //   cursor: 'pointer'
      // };
       
      return (
        <div className="App">
          <UserInput name={this.PickNameHandler} curentName={this.state.name} />
          <UserOutput name={this.state.name} />
          {/* <h2>Program</h2>
          <button 
            style={style}
            onClick={() => this.switchNameHandler('Molly')}> Switch Name</button> 
          <Person
            name={this.state.persons[0].name}
             age={this.state.persons[0].age} 
             />
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          change={this.NameChangeHandler}
          click={this.switchNameHandler.bind(this,'Marcus', 'Helen')}
          > There are my hobbies
          </Person>
          <Person
           name={this.state.persons[2].name}
            age={this.state.persons[2].age} 
          /> */}
        </div>
      );
    } 
}

export default App;
