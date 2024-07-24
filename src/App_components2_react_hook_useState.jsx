import { useState, React, useRef } from 'react'
import UseState from './components2_react_hook_useState/6_useState';
import UseState_Immutable_Objects from './components2_react_hook_useState/7_useState_Immutable_Objects';
import UseState_Immutable_Arrays from './components2_react_hook_useState/8_useState_Immutable_Arrays';


function App3() {
  
  return (
    <div>
    <UseState/>
    <UseState_Immutable_Objects/>
    <UseState_Immutable_Arrays/>
    </div>
  );

};

export default App3;
