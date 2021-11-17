import React from "react";

const ImageDisplay = props => {
    return (
        <div className="transform border-2 border-gray-500 transition duration-500 hover:scale-110 m-5 h-72 w-72 max-w-72 max-h-72">
            <img className="object-scale-down" alt={props.url} src={props.url} />
        </div>
    )
}

export default ImageDisplay;