import React from 'react'

const Error = ({ msg }) => {
    return (
        <div className="error">
            <p><small><strong>{msg}</strong></small></p>
        </div>
    )
}

export default Error
