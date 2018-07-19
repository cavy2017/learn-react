import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

    const changeNameStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (<div> 
        {
          this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age}
              key={person.id} 
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.onChangeHandler(event, person.id)}/>
          })
        }
      </div>);

      changeNameStyle.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <=1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi! This is my react test sample</h1>
        <p className={classes.join(' ')}>This really works!</p>
        <button
          style={changeNameStyle} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;