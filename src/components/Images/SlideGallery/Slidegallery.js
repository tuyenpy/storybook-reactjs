import React, { useReducer } from 'react';
import './Slidegallery.css';

const images = [
    {
        title: "01",
        uri: require("./images/01.jpg")
    }, {
        title: "02",
        uri: require("./images/02.jpg")
    }, {
        title: "03",
        uri: require("./images/03.jpg")
    }, {
        title: "04",
        uri: require("./images/04.jpg")
    }, {
        title: "05",
        uri: require("./images/05.jpg")
    }, {
        title: "06",
        uri: require("./images/06.jpg")
    }
];

const reducer = (state, action) => {
    switch (action.type) {
        case '>':
            return { count: state.count === 5 ? 0 : state.count + 1 };
        case '<':
            return { count: state.count === 0 ? 5 : state.count - 1 };
        default:
            throw new Error();
    }
}

const SlideGallery = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    let { title, uri } = images[state.count];
    return <>
        <div className="SlideGallery">
            <div className="Slides">
                <div>
                    <img src={uri} />
                </div>
                <a className="next" onClick={() => dispatch({ type: ">" })}>{">"}</a>
                <a className="prev" onClick={() => dispatch({ type: "<" })}>{"<"}</a>
                <p>{`${state.count} / ${images.length}`}</p>
            </div>
            <div class="caption-container">{title}</div>
            <div className="row">
            {
                images.map((item, key) =>
                        <div className="column">
                            <img className="demo cursor" src={item.uri} alt={item.title} key={key} />
                        </div>
                )
            }
            </div>

        </div>
    </>
}

export default SlideGallery;