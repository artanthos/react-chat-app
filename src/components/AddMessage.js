import React from 'react';
import PropTypes from 'prop-types';

const AddMessage = ( { dispatch } ) => {
    let input;

    return (
        <section id="new-message">
            <h3>New Message</h3>
            <input
                onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    dispatch(input.value, 'Me')
                    input.value = ''
                }
            }}
                type="text"
                ref={(node) => {
                input = node
            }}
        />
        </section>
    );
};

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default AddMessage;