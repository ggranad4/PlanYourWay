import React, { useContext } from "react";
import { AppContext } from "../../components/provider/AppContext";

const Summary = () => {
    const { setAppData, appData } = useContext(AppContext);
    console.log(appData)
    return (<>
        <div></div>
    </>)
}
export default Summary;