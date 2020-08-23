import React from 'react';
import Person from './Person/Person'


const persons = (props) => {
        return (
          props.persons.map( (person, index) => { // like in ForEach for every single
            return(
                <Person
                click={() => props.clicked(index)}
                name={person.name}
                age={person.age}
                change={(event) => props.changed(event, person.id)} // i need to pass event also in main function, becouse, truthly, he is even not declared physically
                key={person.id}
              />
            )
          } )
        );
}

export default persons;