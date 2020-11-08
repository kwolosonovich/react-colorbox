import React from 'react';

const Box = ({width, height, bgColor}) => {
    return (
        <div>
            <div style={{
                width:  `${width}em`, 
                height: `${height}em`, 
                bgColor
            }} />
        </div>
    )
}

export default Box;