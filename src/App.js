import React, {useCallback, useEffect, useMemo, useState} from 'react'
import './App.css';
import RangeSlider from './components/RangeSlider';

function App() {
  const [parentVal, setParentVal] = useState(10);

  const sliderValueChanged = useCallback(val => {
    console.log('new val', val)
    setParentVal(val)
  })
 

  const sliderProps = useMemo(
    () => ({
      min: 10,
      max:100,
      value: parentVal,
      step:2,
      label: "this is a reusable slider",
      onChange : e => sliderValueChanged(e)
    }),
    [parentVal]
  )

  return (
    <div className="App">
        <h1>Parent value: {parentVal}</h1>
        <RangeSlider {...sliderProps} classes="other-classes"/>
    </div>
  );
}

export default App;
