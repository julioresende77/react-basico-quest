import React from 'react'

const Paragrafo = ({ children, color }) => {

    return (
        <div className='paragrafo' style={{ color: color, textTransform: 'uppercase' }}>{children}

        </div>
    )
}

Paragrafo.defaultProps = {
    color: 'orange',
}

export default Paragrafo