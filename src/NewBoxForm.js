import React, {useState} from 'react';

const NewBoxForm = ({addBox}) => {
  // default state
  const INITIAL_STATE = {
    width: "",
    height: "",
    bgColor: ""
  };
  // set state
  const [formData, setFormData] = useState([INITIAL_STATE]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData }) // update the parent state with formData obj
    setFormData(INITIAL_STATE); // reset form after submit
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

          <div>
            <label htmlFor="height">Height:</label>
            <input
            id="height"
            type="text"
            name="height"
            placeholder="0"
            value={formData.height}
            onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="width">Width:</label>
            <input
            id="width"
            type="text"
            name="width"
            placeholder="0"
            value={formData.width}
            onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="bgColor">Color:</label>
            <input
            id="bgColor"
            type="text"
            name="bgColor"
            placeholder="Add"
            value={formData.bgColor}
            onChange={handleChange}
            />
          </div>
          
      <button id="create">Create</button>   
      </form>
    </div>
  );
};

export default NewBoxForm;