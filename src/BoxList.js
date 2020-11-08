import { defaultCipherList } from 'constants';
import { uniqueId } from 'lodash';
import React, {useState} from 'react';
import {v4 as uuid} from "uuid";
import Box from './Box'
import NewBoxForm from './NewBoxForm'

const BoxList = () => {
    // initial state
    const INITIAL_STATE = [{
      id: 1,  
      height: "10px",
      width: "20px",
      bgColor: "blue",
    }];

    const [boxes, setBoxes] = useState(INITIAL_STATE);

    // update state
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id:uniqueId()}])
    }

    return (
      <div>
        <h3>Boxes</h3>
        <div>
          {boxes.map(({ id, height, width, bgColor }) => (
            <Box
              id={id}
              key={id}
              height={height}
              width={width}
              bgColor={bgColor}
            />
          ))}
        </div>
      </div>
    );
}

export default BoxList;