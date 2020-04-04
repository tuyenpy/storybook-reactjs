import React from 'react';
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

const IconBar = () => {
    return <ul className="IconBar">
        <li className="active"><FontAwesomeIcon icon={faHome} /></li>
        <li><FontAwesomeIcon icon={faSearch} /></li>
        <li> <FontAwesomeIcon icon={faEnvelope} /></li>
        <li><FontAwesomeIcon icon={faGlobe} /></li>
        <li><FontAwesomeIcon icon={faTrash} /></li>
    </ul>
}


export default IconBar;