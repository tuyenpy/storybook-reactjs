import React, { useReducer } from 'react';
import './LoginForm.css';
import avatar from './avatar.png';

const reducer = (state, action) => {//action {type:  , field:..., value:....}
    switch (action.type) {
        case "username": return {
            ...state,
            [action.field]: action.value
        };
        case "password": return {
            ...state,
            [action.field]: action.value
        };
        default:
            throw new Error();

    }
}

const initState = {
    username: "",
    password: ""
};

const LoginForm = ({ ...props }) => {
    let [state, dispatch] = useReducer(reducer, initState);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }
    return <div className="LoginForm-container">
        <form className="LoginForm" method="GET">
            <div className="avatar">
                <button>x</button>
                <img src={avatar} alt="avatar" />
            </div>
            <div className="login">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Username"
                    onChange={(e) => dispatch({ type: "username", field: "username", value: e.target.value })}
                    required />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={(e) => dispatch({ type: "password", field: "password", value: e.target.value })}
                    required />
                <button type="submit" onClick={onSubmit}>Login</button>
                <div className="remember">
                    <input type="checkbox" name="remember" id="checkbox" />
                    <label htmlFor="checkbox">Remember me</label>
                </div>
            </div>
            <div className="cancel">
                <button>Cancel</button>
                <span>Forgot<a href="/">password?</a></span>
            </div>
        </form>
    </div>
}

export default LoginForm;