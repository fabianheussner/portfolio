import React from "react";

function OpenToggle(props) {

    return (
        <svg
            className={props.className}
            height={props.height}
            width={props.width}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
        
        <polygon 
            fill={props.fill}
            points="20 11 13 11 13 4 11 4 11 11 4 11 4 13 11 13 11 20 13 20 13 13 20 13 20 11"
        />
            
        </svg>
    );
}

export default OpenToggle;