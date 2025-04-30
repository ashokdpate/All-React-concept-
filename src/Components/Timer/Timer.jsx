import React, { useRef, useState } from 'react'

function Timer() {
    let [timer, setTimer] = useState(0);
    var timerId = useRef;
    const startTimer = () => {
        //setInterval take 2 paramerter first is callback function,and second is time is mili second
        timerId.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
    }
    //setInteval return some id which required to clear the interval but when we called the setTimer out timer is re-render and the timerId we loose and because of that we cant clear the interval.
    //  So we have to store the id where after re-render also we dont loose the id. so here useRef hooks comes into the picture.
    const stopTimer = () => {
        clearInterval(timerId.current);
    }
    const clearTimer = () => {
        setTimer(0);
    }
    return (
        <div className='container'>
            <div className="card mt-5" style={{ width: "500px", height: "200px" }}>
                <div className="cardBody">

                    <h1>Timer value is:{timer}</h1>
                    <button className='btn btn-primary m-3' onClick={startTimer}>Start</button>
                    <button className='btn btn-warning m-3' onClick={stopTimer}>Stop</button>
                    <button className='btn btn-danger m-3' onClick={clearTimer}>clear</button>
                </div>
            </div>
        </div>
    )
}
export default Timer