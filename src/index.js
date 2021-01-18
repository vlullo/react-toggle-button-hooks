import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Toggle = () => {
  const [on, setOn] = useState(true);

  return (
    <button className="ui button" style={{margin: 50}} onClick={() => setOn(!on)}>{ on ? 'ON' : 'OFF' }</button>
  );
};

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);

