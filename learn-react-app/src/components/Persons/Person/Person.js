import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {

    componentDidMount () {
        console.log('[Person.js] inside componentDidMount');
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
    }

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
                <input 
                    ref={(inp) => {this.inputElement = inp;}}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>
            );    
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);