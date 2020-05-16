import React from 'react'

const FormError = (props) => (
    <span className="invalid-feedback" role="alert">
        <strong>{props.message}</strong>
    </span>
)
export default FormError
