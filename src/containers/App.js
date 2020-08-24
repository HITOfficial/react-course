import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxyliary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: 'asf1', name: "Max", age: 28 },
      { id: 'asf2', name: "Lip", age: 9 },
      { id: 'asf3', name: "Stephanie", age: 18 }
    ],
    otherState: 'WeweweWe',
    length: null,
    userInput: '',
    showPersons: false,
    cockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state
  } 

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }
  
  // shouldComponentUpdate() {
  //   console.log('should');
  //   return true;
  // }

  componentDidUpdate() {
    console.log('did update')
  }

  switchNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id ; // it returns true while'll find the first element from aray of id equals id and we'll recive an index
    });

    const person = {...this.state.persons[personIndex]}; //operating on new object

    person.name = event.target.value
    
    // const person = Object.assign({}, this.state.persons[personIndex]) // it is equal to upper method

    const persons = [...this.state.persons]; // to do not reference but copy
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons : persons,
        changeCounter : prevState.changeCounter + 1}
    });
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
    console.log('[App.js] render')
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
        <Aux>
          <button onClick={() => !this.setState({cockpit: !cockpit})}>Remove Cockpit</button>
          {this.state.cockpit ? <Cockpit
            cockpit={this.state.cockpit}
            title={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            toggle={this.togglePersonsHandler} 
            personsLength={this.state.persons.length}
          /> : null }

            {persons}
        </Aux>
      
    );
  } 
}

export default withClass(App, classes.App);
