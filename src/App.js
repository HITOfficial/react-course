import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const app = (props) => {
  const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: "Max", age: 28 },
        { name: "Lip", age: 9 },
        { name: "Stephanie", age: 18 }
      ]
  });

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    setPersonsState( {
    persons: [
      { name: "Maximilian", age: 28 },
      { name: "Lip", age: 9 },
      { name: "Stephanie", age: 10 }
    ]
    })
  }

  return (
    <div className="App">
      <h2>Program</h2>
      <button onClick={switchNameHandler}> Switch Name</button> 
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> There are my hobbies</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;
