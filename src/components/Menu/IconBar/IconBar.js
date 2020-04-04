import React, { useState } from 'react';
import { } from 'react-router-dom';
import './IconBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faSearch,
    faEnvelope,
    faGlobe,
    faTrash
} from '@fortawesome/free-solid-svg-icons';

const icons = [
    faHome,
    faSearch,
    faEnvelope,
    faGlobe,
    faTrash
];

const IconBar = () => {
    let [state, setState] = useState({0: true});
    const changeStyle = (index) => () => setState({ [index]: true })
    return <ul className="IconBar">
        {
            icons.map((element, index) =>
                <li
                    className={state[index] && "active"}
                    onClick={changeStyle(index)}
                >
                    <FontAwesomeIcon icon={element} />
                </li>)
        }
    </ul>
}

export default IconBar;