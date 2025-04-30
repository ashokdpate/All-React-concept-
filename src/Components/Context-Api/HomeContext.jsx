import React, { useState } from 'react'
import Details from './Details'
import myfirstContext from './MyfirstContext'
function HomeContext() {
    var [state, setState] = useState();
    var [data, setData] = useState();
    const getData = () => {
        setData(state);
    }
    return (
        <div style={{ padding: "50px", marginBottom: "50px" }}>
            <input type="text" placeholder='Enter text here' onChange={(event) => {
                setState(event.target.value);
            }} />
            <button onClick={getData} className='btn btn-primary'>Submit</button>
            <myfirstContext.Provider value={data}>
                <Details />
            </myfirstContext.Provider>
        </div>
    )
}
export default HomeContext