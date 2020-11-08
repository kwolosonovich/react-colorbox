import React from 'react';

const Box = ({width, height, bgColor}) => {
    // let backgroundColor = bgColor
    return (
        <div>
            <div 
                style={{
                    width:  `${width}em`, 
                    height: `${height}em`, 
                    backgroundColor: `${bgColor}`
                }}      
            />
        </div>
    )
}

export default Box;