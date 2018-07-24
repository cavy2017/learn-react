import React, { PureComponent }  from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    constructor(props){
        super(props);
        console.log('[Persons.js] inside constructor');
        this.lastPersonRef = React.createRef();
    }

    componentDidMount () {
        console.log('[Persons.js] inside componentDidMount');
        this.lastPersonRef.current.focus();
    }

    render () {
        return this.props.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age}
              key={person.id}
              position={index}
              ref={this.lastPersonRef}
              click={() => this.props.click(index)}
              changed={(event) => this.props.changed(event, person.id)}/>
          });
    }
}
export default Persons;