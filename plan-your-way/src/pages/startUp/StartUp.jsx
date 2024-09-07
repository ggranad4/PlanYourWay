import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import styles from './StartUp.module.css'
const StartUp = (props) => {
    const navigator = useNavigate();
    const [start, setStart] = useState(false)
    return (<>
        <div className={`container-fluid d-flex justify-content-center align-items-center vh-100 ${start ? styles["start"] : ""}`}>
            <div>
                <h1 className={styles['plan']}>Plan</h1>
                <h1 className={styles['it']}>It</h1>
                <h1 className={styles['your']}>Your</h1>
                <h1 className={styles['way']}>Way!</h1>
                <Button onClick={() => {
                    navigator("/colorSelection")
                    setStart(true)
                }} variant="primary">Get Planning!</Button>
            </div>
        </div>
    </>)
}
export default StartUp