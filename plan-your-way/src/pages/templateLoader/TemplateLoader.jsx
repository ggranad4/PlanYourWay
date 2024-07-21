import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const TemplateLoader = () => {
    const templateSelection = ['Template 1', 'Template 2', 'Template 3']
    const [templateSelected, setTemplateSelected] = useState("No Template");
    const navigator = useNavigate()
    const isDisabled = () => {
        return templateSelected == "No Template"
    }
    return (<>
        <div className={`container-fluid d-flex flex-column justify-content-center align-items-center vh-100`}>
            <div >
                <h4>Current Template:</h4>
                {templateSelected}
            </div>
            <form >
                <div className="form-group">
                    <label htmlFor="selectTemplate">Template: </label>
                    <select onChange={({ target }) => setTemplateSelected(target.value)} className="form-control" id="selectTemplate" values={templateSelection}>
                        <option value={'No Template'}>Please Select a Template</option>
                        {templateSelection.map(template => {
                            return <option key={template} value={template}>{template}</option>
                        })}
                    </select>
                    <br></br>
                    <Button disabled={isDisabled()} onClick={() => navigator("/font")}> Continue to Font Selection</Button>
                </div>
            </form>
        </div>
    </>)
}
export default TemplateLoader