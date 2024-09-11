import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../components/provider/AppContext";
import styles from './ColorSelector.module.css'
import ImageRenderer from "../../components/imageProvider/ImageRenderer";

const ColorSelector = () => {
    const templateTypes = {
        Basic: ['Basic 1', 'Basic 2'],
        Bullet: ['Bullet 1', 'Bullet 2', 'Bullet 3'],
        Calendar: ['Calendar 1', 'Calendar 2'],
        Graph: ['Graph 1'],
        Journal: ['Journal 1', 'Journal 2', 'Journal 3'],
        Lined: ['Lined 1'],
        List: ['List 1', 'List 2'],
        Schedule: ['Schedule 1', 'Schedule 2', 'Schedule 3'],
        StayOnTask: ['Stay On Task 1']
    };
    const [plannerType, setPlannerType] = useState('No Planner');
    const types = templateTypes[plannerType] || [];
    const [planner, setPlanner] = useState('')


    const { appData, setAppData } = useContext(AppContext);
    const passContext = () => {
        setAppData({ ...appData, planner })
    };

    return (<>
        <div className={`container-fluid d-flex flex-column justify-content-center align-items-center ${styles['fade-in']}`} style={{ height: '60vh' }}>
            <div className={`container-fluid d-flex flex-column justify-content-center ${styles['displayer']} align-items-center`} style={{}} >
                <div className={styles['']}>
                    <ImageRenderer photoTypeSelected={plannerType} photoSelected={planner} />
                </div>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="selectPlannerType">Planner Type: </label>
                    <select onChange={({ target }) => {
                        setPlannerType(target.value)
                        passContext();
                    }} className="form-control" id="selectPlannerType" values={templateTypes}>
                        <option value={'No Template'}>Please Select a Template</option>
                        {Object.keys(templateTypes).map(plannerType => {
                            return <option key={plannerType} value={plannerType}>{plannerType}</option>
                        })}
                    </select>
                    <br></br>
                    <label htmlFor="selectPlanner">Available Types:</label>
                    {plannerType ?
                        <select onChange={({ target }) => {
                            setPlanner(target.value)
                            passContext();
                        }} className="form-control" id="selectPlanner" values={templateTypes}>
                            <option value={'No Template'}>Please Select a Template</option>
                            {types.map(planner => {
                                return <option key={planner} value={planner}>{planner}</option>
                            })}
                        </select>
                        : (
                            <li>No types available</li>
                        )}


                </div>
            </form>
        </div>
    </>)
}
export default ColorSelector;