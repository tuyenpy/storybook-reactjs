import React, { useReducer } from 'react';
import './Slideshow.css';

const images = [
    {
        title: "Title 01",
        uri: require("./images/01.jpg")
    }, {
        title: "Title 02",
        uri: require("./images/02.jpg")
    }, {
        title: "Title 03",
        uri: require("./images/03.jpg")
    }, {
        title: "Title 04",
        uri: require("./images/04.jpg")
    }
];

const reducer = (state, action) => {
    switch (action.type) {
        case '>':
            return { count: state.count === 3 ? 0 : state.count + 1 };
        case '<':
            return { count: state.count === 0 ? 3 : state.count - 1 };
        case '0': return { count: 0 };
        case '1': return { count: 1 };
        case '2': return { count: 2 };
        case '3': return { count: 3 };
        default:
            throw new Error();
    }
}

const SlideShow = () => {
    console.log("App rendering");
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    let { title, uri } = images[state.count];
    return <>
        <div className="Slideshow">
            <div className="Slides">
                <div className="mySlide">
                    <img src={uri} alt={title} />
                </div>
                <a className="prev" onClick={() => dispatch({ type: '<' })}>{"<"}</a>
                <a className="next" onClick={() => dispatch({ type: '>' })}>{">"}</a>
                <p>{`${state.count + 1} / ${images.length}`}</p>
            </div>
            <div>
                <span class="dot" onClick={() => dispatch({ type: '0' })}></span>
                <span class="dot" onClick={() => dispatch({ type: '1' })}></span>
                <span class="dot" onClick={() => dispatch({ type: '2' })}></span>
                <span class="dot" onClick={() => dispatch({ type: '3' })}></span>
            </div>
        </div>
    </>
}

export default SlideShow;