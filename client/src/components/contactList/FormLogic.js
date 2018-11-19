// LoginField contains logic to render a single label and text input

import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <div className="red-text" style={{ marginTop: '20px' }}>
                { touched && error }
            </div>
            <label>{label}</label>
            <input {...input} style={{ marginTop: '5px' }}/>
        </div>
    );

    
};
