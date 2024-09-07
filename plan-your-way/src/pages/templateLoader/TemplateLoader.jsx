import React, { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../components/provider/AppContext";
import styles from './TemplateLoader.module.css'

const TemplateLoader = () => {
    const templateSelection = ['Template 1', 'Template 2', 'Template 3']
    const sizeSelection = ['Extra Small - 6x8', 'Small - 7x9', 'Medium - 7.5x10', 'Large - 8.5x11']
    const [templateSelected, setTemplateSelected] = useState("No Template");
    const [sizeSelected, setSizeSelected] = useState('No size');
    const { appData, setAppData } = useContext(AppContext);
    const passContext = () => setAppData({ ...appData, templateSelected, sizeSelected })
    const navigator = useNavigate()
    const isDisabled = () => {
        return templateSelected === "No Template" || sizeSelected === "No size"

    }
    return (<>
        <div className={`container-fluid d-flex flex-column justify-content-center align-items-center ${styles['fade-in']}`} style={{ height: '60vh' }}>
            <div >
                <h4>Current Size:</h4>
                {sizeSelected}
                <p>All Sizes are in inches</p>
                <h4>Current Template:</h4>
                {templateSelected}
            </div>
            <form >
                <div className="form-group">
                    <label htmlFor="selectTemplate">Size: </label>
                    <select onChange={({ target }) => setSizeSelected(target.value)} className="form-control" id="selectTemplate" values={templateSelection}>
                        <option value={'No size'}>Please Select a Size</option>
                        {sizeSelection.map(size => {
                            return <option key={size} value={size}>{size}</option>
                        })}
                    </select>
                    <br></br>
                    <label htmlFor="selectTemplate">Template: </label>
                    <select onChange={({ target }) => setTemplateSelected(target.value)} className="form-control" id="selectTemplate" values={templateSelection}>
                        <option value={'No Template'}>Please Select a Template</option>
                        {templateSelection.map(template => {
                            return <option key={template} value={template}>{template}</option>
                        })}
                    </select>
                    <br></br>
                    <Button disabled={isDisabled()} onClick={() => {
                        navigator("/font")
                        passContext()
                    }}> Continue to Font Selection</Button>
                </div>
            </form>
        </div>
    </>)
}
export default TemplateLoader