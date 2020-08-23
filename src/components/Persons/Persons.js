import React, { Component } from 'react';
import Person from './Person/Person'


class Persons extends Component {
  render() {
    console.log('[Persons.js] rendering');
    return (
      this.props.persons.map( (person, index) => { // like in ForEach for every single
        return(
            <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            change={(event) => this.props.changed(event, person.id)} // i need to pass event also in main function, becouse, truthly, he is even not declared physically
            key={person.id}
          />
        )
    }));
  };
};

export default Persons;