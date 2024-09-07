import React, { useContext, useState } from "react";
import styles from './FontSelector.module.css'

import { AppContext } from "../../components/provider/AppContext";

const FontSelector = () => {
    const [fontSelected, setFontSelected] = useState(null)
    const [letters, setLetters] = useState({ 0: '', 1: '', 2: '' })
    const [borderSelected, setBorderSelected] = useState(null)
    const [borderColor, setBorderColor] = useState(null)

    const fontOptions = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
    const borderOptions = ['Diamond', 'Circle', 'Botanical']
    const colorOptions = ['Black', 'Gold', 'Blue']

    const { appData, setAppData } = useContext(AppContext);
    const passContext = () => {
        setAppData({ ...appData, letters: letters ? letters : undefined, borderSelected: borderSelected ? borderSelected : undefined, borderColor: borderColor ? borderColor : undefined })
    }
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
        <div className={`container-fluid d-flex flex-column justify-content-center align-items-center ${styles['fade-in']}`} style={{ paddingTop: '0.1rem', height: '60vh' }}>
            <div className={`container-fluid d-flex flex-column justify-content-center ${styles['displayer']} align-items-center`} style={{ height: '30vh' }} >
                <div className={styles['' + borderSelected]}>
                    <h3 className="d-flex flex-row" style={fontStyle}>{Object.values(letters).map((value, index) => <p key={index}>{value}</p>)}</h3>
                </div>
            </div>
            <br></br>
            <div className=' d-flex justify-content-center align-items-center flex-column'>
                <div className={`d-flex flex-row justify-content-center align-items-center  w-50`}>
                    <input value={letters[0]} onChange={(event) => event.target.value.length <= 1 ? handleChange(event, 0) : "nada"} style={{ width: '20%', textAlign: 'center' }} className="form-control" />
                    <input value={letters[1]} onChange={(event) => event.target.value.length <= 1 ? handleChange(event, 1) : "nada"} style={{ width: '20%', marginLeft: '10px', textAlign: 'center' }} className="form-control" />
                    <input value={letters[2]} onChange={(event) => event.target.value.length <= 1 ? handleChange(event, 2) : "nada"} style={{ width: '20%', marginLeft: '10px', textAlign: 'center' }} className="form-control" />
                </div>
                <br></br>
                <label htmlFor="selectFont">Font style: </label>
                <select onChange={({ target }) => {
                    setFontSelected(target.value)
                    passContext()
                }} className="form-control" id="selectFont" values={fontOptions}>
                    <option value={'No Template'}>Please Select a Font</option>
                    {fontOptions.map(font => {
                        return <option key={font} value={font}>{font}</option>
                    })}
                </select>
                <label htmlFor="selectFont">Border: </label>
                <select onChange={({ target }) => {
                    setBorderSelected(target.value)
                    passContext()
                }} className="form-control" id="selectFont" values={borderOptions}>
                    <option value={'No Border'}>Please Select a Border</option>
                    {borderOptions.map(border => {
                        return <option key={border} value={border}>{border}</option>
                    })}
                </select>
                <label htmlFor="selectFont">Border Color: </label>
                <select onChange={({ target }) => {
                    setBorderColor(target.value)
                    passContext()
                }} className="form-control" id="selectFont" values={colorOptions}>
                    <option value={'No Color'}>Please Select Border Color</option>
                    {colorOptions.map(color => {
                        return <option key={color} value={color}>{color}</option>
                    })}
                </select>
            </div>
            <br></br>
        </div >
    </>
}
export default FontSelector