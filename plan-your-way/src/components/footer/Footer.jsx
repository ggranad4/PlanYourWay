import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { buttonChecker } from "../../utils/ButtonCheck";
import { AppContext } from "../provider/AppContext";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const { appData } = useContext(AppContext);
    var dictOfValidButtons = buttonChecker(appData);
    const navigator = useNavigate()
    return (<>

        <div className={`container-fluid d-flex flex-row justify-content-between vw-50`} style={{ paddingTop: '50px' }}>
            <Button style={{ width: '50px', height: '50px', borderRadius: '50%', textAlign: 'center', backgroundColor: dictOfValidButtons[1] ? 'green' : 'grey' }} onClick={() => navigator('/colorSelection')}>1</Button>
            <Button style={{ width: '50px', height: '50px', borderRadius: '50%', textAlign: 'center', backgroundColor: dictOfValidButtons[2] ? 'green' : 'grey' }} onClick={() => navigator('/template')}>2</Button>
            <Button style={{ width: '50px', height: '50px', borderRadius: '50%', textAlign: 'center', backgroundColor: dictOfValidButtons[3] ? 'green' : 'grey' }} onClick={() => navigator('/font')}>3</Button>
            <Button style={{ width: '50px', height: '50px', borderRadius: '50%', textAlign: 'center', backgroundColor: dictOfValidButtons[4] ? 'green' : 'grey' }}>4</Button>

        </div>
    </>)
}
export default Footer;