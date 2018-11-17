import React from 'react';

const cockpit = props => {
  const persons = props.persons;
  let classes = [];
  if (persons.length <= 2) {
    classes.push('red');
  }
  if (persons.length <= 1) {
    classes.push('bold');
  }

  return (
    <div>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(' ')}>This is really working! </p>
      <button style={props.style} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
