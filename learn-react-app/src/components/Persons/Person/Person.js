import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        console.log('[UPDATE Person.js] inside shouldComponentUpdate');
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate (nextProps, nextState) {
        console.log('[UPDATE Person.js] Inside componentWillUpdate');
    }

    componentDidUpdate () {
        console.log('[UPDATE Person.js] Inside componentDidUpdate');
    }

    render() {
        return (
            <Aux>
                <p onClick={this.props.click}>Hi! My name is {this.props.name}. I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
            );    
    }
}

export default withClass(Person, classes.Person);