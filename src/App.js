import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Lip", age: 9 },
      { name: "Stephanie", age: 18 }
    ],
    otherState: 'WeweweWe'
  };

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: newName, age: 9 },
        { name: "Stephanie", age: 28 }
      ]
    } )
  };

  NameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 9 },
        { name: "Stephanie", age: 28 }
      ]
    } )
  };

    render(){
      return (
        <div className="App">
          <h2>Program</h2>
          <button onClick={() => this.switchNameHandler('Molly')}> Switch Name</button> 
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
          />
        </div>
      );
    } 
}

export default App;
