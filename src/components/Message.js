import React from 'react';
import PropTypes from 'prop-types';

const Message = ( props ) => {
    console.log(props)
    
    return(
        <li key={props.message.id}>
            <i>{props.author}</i> {props.message}
        </li>
    );
};

Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Message;