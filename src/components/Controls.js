import React from 'react'

export default function Controls({active, handleReset, handlePlayPause}) {
  return (
    <div className='Controls'>
      <button id="start_stop" onClick={handlePlayPause}>
          {active ? 
          <span> &#10074;&#10074;</span> 
          : <span> &#9658; </span>}
      </button>
      <button id="reset" onClick={handleReset}>&#8635;</button>
    </div>
  )
}
