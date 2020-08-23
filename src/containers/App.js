import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      { id: 'asf1', name: "Max", age: 28 },
      { id: 'asf2', name: "Lip", age: 9 },
      { id: 'asf3', name: "Stephanie", age: 18 }
    ],
    otherState: 'WeweweWe',
    length: null,
    userInput: '',
    showPersons: false
  };

  switchNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id ; // it returns true while'll find the first element from aray of id equals id and we'll recive an index
    });

    const person = {...this.state.persons[personIndex]}; //operating on new object

    person.name = event.target.value
    
    // const person = Object.assign({}, this.state.persons[personIndex]) // it is equal to upper method

    const persons = [...this.state.persons]; // to do not reference but copy
    persons[personIndex] = person;
    this.setState(this.state.persons = persons)
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons] // first thing first I'm doing a coppy of persons, to next manipulate them, and in the end save coppy as a original
    // this.setState(this.state.persons.splice(personIndex,1)); // from setState() i'm manipulating state, iside i use this. to corrently choice state from parent class, and after that I'm removing curently element using index  
    persons.splice(personIndex, 1);
    this.setState({persons: persons}); // in curlly brackets becouse it is from react library module
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}) // if its true convers this to false and from false to true
  }

  lengthHandler = (event) => {
    const length = event.target.value.length;
    this.setState({userInput : event.target.value})
    return this.setState({length : length })
  }
  
  removeCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput : updatedText})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler/* im doing an a reference to a deletePersonHandler*/}
            changed={this.switchNameHandler}  
          /> 
        </div>
      );
      }
      
    return (
        <div className={classes.App}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            toggle={this.togglePersonsHandler} 
          />

            {persons}
        </div>
      
    );
  } 
}

export default App;
