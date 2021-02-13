import React from "react"


const Form = () => {
    return (
        <div className="form">
            <label htmlFor="input" >Hello, What do you need?</label><br />
            <input type="text" placeholder="....Search for" className="input"/>
            {/* <input type="button" value="GET" /> */}
            <button className="btn">GET</button>
        </div>
    )
}

export default Form