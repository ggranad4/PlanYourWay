import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const StartUp = (props) => {
    const navigator = useNavigate();

    return (<>
        <div className={`container-fluid d-flex justify-content-center align-items-center vh-100`}>
            <div >
                <h1>Plan It Your Way!</h1>
                <Button onClick={() => navigator("/template")} variant="primary">Primary</Button>
            </div>
        </div>
    </>)
}
export default StartUp