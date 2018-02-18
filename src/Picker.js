import React from 'react';

function Picker(props) {
  return (
    <label>
      <input
        type="checkbox"
        defaultChecked={props.value === props.values[0]}
        onChange={e =>
          props.onChange(e.target.checked ? props.values[0] : props.values[1])
        }
      />
      {props.children}
    </label>
  );
}

export default Picker;
