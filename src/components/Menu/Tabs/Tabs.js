import React, { useState } from 'react';
import './Tabs.css';

const tabs = [
    {
        city: "London",
        description: "London is the capital city of England."
    }, {
        city: "Paris",
        description: "Paris is the capital of France."
    }, {
        city: "Tokyo",
        description: "Tokyo is the capital of Japan."
    }
];

const Tabs = () => {
    let [state, setState] = useState({ city: false });
    const changeContent = (city) => () => setState({ [city]: true });
    return <>
        <div className="Tabs">
            {
                tabs.map(({ city, description }) =>
                    <button
                        onClick={changeContent(city)}
                        className={state[city] ? "TabsButton active" : "TabsButton"}
                    >
                        {city}
                    </button>)
            }
        </div>

        {
            tabs.map(({ city, description }) =>
                state[city] && <div className="content"><p>{description}</p></div>)
        }

    </>
}

export default Tabs;

