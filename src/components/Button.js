import { useState } from "react"


function Button(props) {

    const handleSubmit = (event) => {

        event.preventDefault()

        props.handleSubmitFromApp()
    }

    return (
        <button type="button" onClick={handleSubmit}>
            Generate Random Gif
        </button>

    )
}

export default Button