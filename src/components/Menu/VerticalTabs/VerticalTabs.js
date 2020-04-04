import React, { useState } from 'react';
import './VerticalTabs.css';

const citys = [
    {
        city: "London",
        description: "London is capital in England"
    }, {
        city: "Paris",
        description: "Paris is capital in France"
    }, {
        city: "Tokyo",
        description: "Tokyo is capital in Japan"
    }
];

const VerticalTabs = () => {
    let [state, setState] = useState({ city: false });
    const changeContent = (city) => () => setState({ [city]: true })
    return <div className="VerticalTabs">
        <div className="tabButton">
            {citys.map(({ city }) =>
                <button className={state[city] && "active"}
                    onClick={changeContent(city)}
                >{city}</button>
            )}
        </div>
        <div className="tabContent">
            {citys.map(({ city, description }) =>
                state[city] && <p>{description}</p>
            )}
        </div>
    </div>
}

export default VerticalTabs;