import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {
  state = {
    persons: [
      {id: 'sdf', name: 'Max', age: 28},
      {id: 'aaa', name: 'Manu', age: 29},
      {id: 'hhk', name: 'Stephany', age: 26}
    ]
  }

  componentWillMount () {
    console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount () {
    console.log('[App.js] inside componentDidMount()');
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate');
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate (nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUpdate');
  }

  componentDidUpdate () {
      console.log('[UPDATE App.js] Inside componentDidUpdate');
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

    if (this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons} 
        click={this.deletePersonHandler} 
        changed={this.onChangeHandler}/>;
    }

    return (
      <WithClass classes={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          click={this.togglePersonsHandler}/>
        {persons}
      </WithClass>
    );
  }
}

export default App;