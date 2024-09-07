import React from "react";
import styles from './Header.module.css'
import Button from "react-bootstrap/esm/Button";

const Header = ({ setShowPlanner }) => {
    return (
        <>
            <div className={`container-fluid vw-100 ${styles['background']} d-flex justify-content-between align-items-center`}>
                <p className={`${styles['title']} m-0 d-flex`} >Plan It Your Way</p>
                <Button variant="info" size="sm" onClick={() => { setShowPlanner(true) }}>Show Planner</Button>
            </div>
        </>
    )
}
export default Header;