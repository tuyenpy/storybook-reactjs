import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({...props}) => {
    return <>
        <span className="ToggleSwitch">
            <label>
                <input type="checkbox"/>
                <span></span>
            </label>
        </span>
    </>
}

export default ToggleSwitch;