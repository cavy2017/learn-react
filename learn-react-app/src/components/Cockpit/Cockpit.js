import React from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {

    const asssignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      asssignedClasses.push(classes.red);
    }
    if (props.persons.length <=1) {
      asssignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi! This is my react test sample</h1>
            <p className={asssignedClasses.join(' ')}>This really works!</p>
            <button className={btnClass}
                onClick={props.click}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;