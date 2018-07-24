import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxiliary';

const cockpit = ( props ) => {

    const asssignedClasses = [];
    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
      asssignedClasses.push(classes.red);
    }
    if (props.persons.length <=1) {
      asssignedClasses.push(classes.bold);
    }

    return (
        <Aux>
            <h1>Hi! This is my react test sample</h1>
            <p className={asssignedClasses.join(' ')}>This really works!</p>
            <button className={btnClass}
                onClick={props.click}>Toggle Persons</button>
        </Aux>
    );
}

export default cockpit;