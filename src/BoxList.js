import React, {useState} from 'react';
import {v4 as uuid} from "uuid";
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import './BoxList.css'

const BoxList = () => {
    // initial state
    const INITIAL_STATE = [];

    const [boxes, setBoxes] = useState(INITIAL_STATE);

    // update state
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid() }])
    }

    // delete box
    const remove = (id) => {
      setBoxes((boxes) => boxes.filter((box) => box.id !== id));
    }

    return (
      <div>
        <NewBoxForm addBox={addBox} />
        <div>
          {boxes.map(({ id, height, width, bgColor }) => (
            <Box
              id={id}
              key={id}
              height={height}
              width={width}
              bgColor={bgColor}
              handleRemove={remove}
            />
          ))}
        </div>
      </div>
    );
}

export default BoxList;