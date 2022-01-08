import React, { memo, useMemo, useCallback, useState, useEffect } from 'react'

function RangeSlider({ classes, label, onChange, value, ...sliderProps}) {

    const [sliderVal, setSliderVal] = useState(10)
    const [mouseState, setMouseState] = useState(null)

    useEffect(() => {
        setSliderVal(value)
    }, [value])

    const changeCallback = e => {
        setSliderVal(e.target.value)
        console.log(sliderVal)
    }

    useEffect(() => {
        if (mouseState === "up") {
            onChange(sliderVal)
        }
    }, [mouseState])

    return (
        <div className='range-slider'>
            <p>{label}</p>
            <h3>value: {sliderVal}</h3>
            <input 
                type="range"
                value={sliderVal}
                {...sliderProps}
                className={`slider ${classes}`}
                id="myRange"
                onChange={changeCallback}
                onMouseDown={() => setMouseState("down")}
                onMouseUp={() => setMouseState("up")}
            />
        </div>
    )
}

export default memo(RangeSlider)
