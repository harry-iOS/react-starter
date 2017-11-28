
import React, { Component } from 'react'


export default function Button({ eventHandler, description }) {
    return (
        <div>
            <button onClick={eventHandler}>
                {description}
            </button>
        </div>
    );
}

Button.defaultProps = {
    eventHandler: () => {},
    description: 'Please add a description'
};

Button.propTypes = {
    eventHandler: PropTypes.func,
    description: PropTypes.string
};