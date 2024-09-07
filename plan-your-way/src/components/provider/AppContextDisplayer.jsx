import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const AppContextDisplayer = () => {
    const { appData } = useContext(AppContext)

    const { color, letters, sizeSelected, borderSelected, templateSelected } = appData;
    return (<>
        <div>
            <p>Current Color: {color}</p>
            <p>Current Letters: {letters?.[0] + " " + letters?.[1] + " " + letters?.[2]}</p>
            <p>Current size selected: {sizeSelected}</p>
            <p>Current Border: {borderSelected}</p>
            <p>Current templateSelected: {templateSelected}</p>




        </div></>)
}
export default AppContextDisplayer