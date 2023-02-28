import React from 'react';
import './claimoption.css'
const ClaimOptions = ({data,identifier,type, handleChange}) => {
    const {name, icon, id} = data
    return (
        <div className="rdio-buttons-claim">
        <input id={id} type={type} name={identifier} value={name} onChange={handleChange} />
        <label htmlFor={id}>
            {icon}
            {name}
        </label>
    </div>
    );
};

export default ClaimOptions;