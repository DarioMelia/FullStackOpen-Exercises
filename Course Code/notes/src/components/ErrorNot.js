import React from "react";
const ErrorNot = ({msg}) =>{
    if (msg === null){
        return null
    }
    return(
        <div className="error">
            {msg}
        </div>
    )
}

export default ErrorNot;