import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../components/provider/AppContext";
import styles from './ColorSelector.module.css'

const ColorSelector = () => {
    const templateTypes = ['Bullet', 'Normal', 'Something', 'else']
    const bulletTypes = ['Type 1', 'Type 2', 'Type 3']
    const normalTypes = ['Type 1', 'Type 2', 'Type 3']
    const SomethingTypes = ['Type 1', 'Type 2', 'Type 3']

    const [color, setColor] = useState('No Color');
    const { appData, setAppData } = useContext(AppContext);
    const passContext = () => {
        setAppData({ ...appData, color })
    };

    return (<>
        <div className={`container-fluid d-flex flex-column justify-content-center align-items-center ${styles['fade-in']}`} style={{ height: '60vh' }}>
            <div >
                <h4>Gotta add displayers</h4>
            </div>
            <form >
                <div className="form-group">
                    <label htmlFor="selectTemplate">Template: </label>
                    <select onChange={({ target }) => {
                        setColor(target.value)
                        passContext();
                    }} className="form-control" id="selectTemplate" values={templateTypes}>
                        <option value={'No Template'}>Please Select a Template</option>
                        {templateTypes.map(templateType => {
                            return <option key={templateType} value={templateType}>{templateType}</option>
                        })}
                    </select>
                    <br></br>
                </div>
            </form>
        </div>
    </>)
}
export default ColorSelector;