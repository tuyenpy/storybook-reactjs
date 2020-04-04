import React, {useState} from 'react';
import './Accordion.css';

const accordion = [
    {
        title: "Section 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }, {
        title: "Section 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }, {
        title: "Section 3",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
];

const Accordion = () => {
    let [state, setState] = useState({});
    const changeContent = (title) => () => setState({[title]: true});
    return <div>
        {
            accordion.map(({title, content}, index) => <div>
                <button className={state[title] ? "active accordion" : "accordion"}
                 onClick={changeContent(title)}>
                     {title}
                </button>
                {state[title]&&<div className="panel"><p>{content}</p></div>}
            </div>
        )}
    </div>
}

export default Accordion;