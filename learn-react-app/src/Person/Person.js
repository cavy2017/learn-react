import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Hi! My name is {props.name}. I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
        )
};

export default person;