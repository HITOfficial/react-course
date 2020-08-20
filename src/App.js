import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

  deletePersonHandler = (personIndex) => {
    this.setState(this.state.persons.splice(personIndex,1)); // from setState() i'm manipulating state, iside i use this. to corrently choice state from parent class, and after that I'm removing curently element using index  
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}) // if its true convers this to false and from false to true
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
      
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map((person, index) => { // like in ForEach for every single
            return(
              <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age * 2}
              change={this.NameChangeHandler}
              />
            ) 
          })}

          {/* <Person
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
      )
    }

    return (
      <div>
        <h2>Program</h2>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button> 
          {persons}
        
        
      </div>
    );
  } 
}

export default App;
