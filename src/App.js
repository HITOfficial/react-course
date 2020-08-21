import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import {ValidationComponent} from './ValidationComponent/ValidationComponent';
import {CharComponent} from './ValidationComponent/CharComponent';

class App extends Component {
  state = {
    persons: [
      { id: 'asf1', name: "Max", age: 28 },
      { id: 'asf2', name: "Lip", age: 9 },
      { id: 'asf3', name: "Stephanie", age: 18 }
    ],
    otherState: 'WeweweWe',
    length: null,
    userInput: ''
  };

  switchNameHandler = (event, id) => {
    // this.state.persons.forEach((person, index) => {
    //   if(person.id === id) {
    //     this.setState(person[index].name = event.targen.value);
    //   }
    // }) // my method
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
  
  


  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
      
    let persons = null;

    const charList = this.state.userInput.split('').map((char, key) => {
      return <CharComponent char={char} key={key} /> 
    })

    if(this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map((person, index) => { // like in ForEach for every single
            return(
              <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              change={(event) => this.switchNameHandler(event, person.id)} // i need to pass event also in main function, becouse, truthly, he is even not declared physically
              key={person.id}
              />
            )
          })}
          {charList}

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
        <input type="text" onChange={(event) => this.lengthHandler(event)} />

        <p>{this.state.length}</p>
        <ValidationComponent
         length={this.state.length}
          />
          {charList}
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button> 
          {persons}
        
        
      </div>
    );
  } 
}

export default App;
