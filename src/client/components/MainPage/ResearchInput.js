import React from "react";
import { searchContext } from "./createContext";


const ResearchInput = () => {
    const contextValue = React.useContext(searchContext);
    return (
        <div>
            <input
                type="text"
                value={contextValue.textValue}
                onChange={(e) => {
                    contextValue.setTextValue(e.target.value);
                }}
                placeholder="Meal"
            />
        </div>
    );
}
export default ResearchInput;