import React, { useState } from "react";
import styles from './FontSelector.module.css'
import { Button } from "bootstrap";

const FontSelector = () => {
    const [fontSelected, setFontSelected] = useState(null)
    const [letters, setLetters] = useState({ 0: '', 1: '', 2: '' })
    const [borderSelected, setBorderSelected] = useState(null)
    const fontOptions = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];

    const handleChange = ({ target }, index) => {
        const currLetters = JSON.parse(JSON.stringify(letters))
        currLetters[index] = target.value
        setLetters((prevLetters) => ({
            ...prevLetters,
            [index]: target.value,
        }));
    };

    const fontStyle = {
        fontFamily: fontSelected,
    };

    return <>
        <div className={`container-fluid d-flex flex-column justify-content-center align-items-center vh-100`}>
            <h1>Current Selection:</h1>
            <h3 className="d-flex flex-row" style={fontStyle}>{Object.values(letters).map((value) => <p>{value}</p>)}</h3>
            <div className=' d-flex justify-content-center align-items-center flex-column'>
                <div className="d-flex flex-row justify-content-center align-items-center  w-50 ">
                    <input value={letters[0]} onChange={(event) => event.target.value.length <= 1 ? handleChange(event, 0) : "nada"} style={{ width: '15%', textAlign: 'left' }} className="form-control" />
                    <input value={letters[1]} onChange={(event) => event.target.value.length <= 1 ? handleChange(event, 1) : "nada"} style={{ width: '15%', marginLeft: '10px', textAlign: 'left' }} className="form-control" />
                    <input value={letters[2]} onChange={(event) => event.target.value.length <= 1 ? handleChange(event, 2) : "nada"} style={{ width: '15%', marginLeft: '10px', textAlign: 'left' }} className="form-control" />
                </div>
                <label htmlFor="selectTemplate">Font style: </label>
                <select onChange={({ target }) => setFontSelected(target.value)} className="form-control" id="selectTemplate" values={fontOptions}>
                    <option value={'No Template'}>Please Select a Font</option>
                    {fontOptions.map(font => {
                        return <option key={font} value={font}>{font}</option>
                    })}
                </select>
            </div>
        </div>
    </>
}
export default FontSelector