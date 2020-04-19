import React from 'react';
import './HoverSlidenavButton.css';

const lists = [
    {label: "About", path: "/about"},
    {label: "Blog", path: "/blog"},
    {label: "Projects", path: "/projects"},
    {label: "Contacts", path: "/contacts"},
];

const HoverSlidenavButton = ({...props}) => {
    return <>
        <div className="HoverSlidenavButton">
            <h2>Hoverable Sidenav Buttons</h2>
            <p>Hover over the buttons in the left side navigation to open them</p>
            <div className="SlidenavButton">
                <ul>
                    {
                        lists.map(({label, path}) => <li>
                            <a href={path}>{label}</a>
                        </li>)
                    }                    
                </ul>
            </div>
        </div>
    </>
}

export default HoverSlidenavButton;
