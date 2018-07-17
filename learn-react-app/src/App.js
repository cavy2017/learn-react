import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephany', age: 26}
    ]
  }

  changeNameHandler = (myName) => {
    this.setState({persons: [
      {name: myName, age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephany', age: 27}
    ]});
  }

  onChangeHandler = (event) => {
    this.setState({persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephany', age: 26}
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi! This is my react test sample</h1>
        <button onClick={() => this.changeNameHandler('M!!!')}>Change Name</button>
        <Person 
          name = {this.state.persons[0].name}
          age = {this.state.persons[0].age}/>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click = {this.changeNameHandler.bind(this, 'MMM')}
          changed = {this.onChangeHandler}
          >Hobby: Racing</Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
