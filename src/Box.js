import React from 'react';

const Box = ({width, height, bgColor}) => {
    return (
        <div>
            <div style={{width: {width}, height:{height}, backgroundcolor: {bgColor} }}></div>
        </div>
    )
}

export default Box;