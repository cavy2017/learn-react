import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      {id: 'sdf', name: 'Max', age: 28},
      {id: 'aaa', name: 'Manu', age: 29},
      {id: 'hhk', name: 'Stephany', age: 26}
    ]
  }

  onChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (<div> 
        {
          this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}><Person 
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.onChangeHandler(event, person.id)}/></ErrorBoundary>
          })
        }
      </div>);
      btnClass = classes.Red;
    }

    const asssignedClasses = [];
    if (this.state.persons.length <= 2) {
      asssignedClasses.push(classes.red);
    }
    if (this.state.persons.length <=1) {
      asssignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi! This is my react test sample</h1>
        <p className={asssignedClasses.join(' ')}>This really works!</p>
        <button className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;