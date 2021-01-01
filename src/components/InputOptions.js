import React from 'react'
import './inputOptions.css'
const InputOptions = ({Icon, title, color}) => {
    return (
        <div className='inputOption'>
            <Icon style={{color}} />
            <h4> {title} </h4>
            
        </div>
    )
}

export default InputOptions
