import React from 'react'

const InputProduct = (props) => {
    return (
        <> <input name={props.name} value={props.value} onChange={props.handleChange} />
            <br />
        </>
    )
}

export default InputProduct
