import React from 'react';
import Person from '../Person/Person';
import Radium from 'radium';

const persons = props => {
  return props.persons.map((person, index) => {
    return (
      <Person
        click={() => {
          props.clicked(index);
        }}
        name={person.name}
        key={person.id}
        changed={event => {
          props.changed(event, person.id);
        }}
      />
    );
  });
};

export default Radium(persons);
