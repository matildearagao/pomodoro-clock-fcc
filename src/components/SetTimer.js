import React from 'react'

export default function SetTimer({ type, value, handleClick }) {
    return (
        <div className='SetTimer'>
            <div id={`${type}-label`}>{type==='session' ? 'Session' : ' Break '} Length</div>
            <div className="SetTimer-controls">
                <button id={`${type}-decrement`} onClick={() => handleClick(false, `${type}Value`)}>&darr;</button>
                <h1 id={`${type}-length`}>{value}</h1>
                <button id={`${type}-increment`} onClick={() => handleClick(true, `${type}Value`)}>&uarr;</button>
            </div>
        </div>
    )
}
