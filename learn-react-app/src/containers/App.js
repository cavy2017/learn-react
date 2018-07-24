import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  state = {
    persons: [
      {id: 'sdf', name: 'Max', age: 28},
      {id: 'aaa', name: 'Manu', age: 29},
      {id: 'hhk', name: 'Stephany', age: 26}
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
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

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[UPDATE app.js] inside getDerivedStateFromProps', nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] inside getSnapshotBeforeUpdate');
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
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
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
      <Aux>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          click={this.togglePersonsHandler}/>
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);