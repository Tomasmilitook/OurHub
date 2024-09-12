import React from 'react'

function Codelines(props) {
    const top = props.top
    const left = props.left
    const width  = props.width
    const bg   = props.bg





  return (
    <div>
        <div
        style={{
            position : "absolute",
            top : top,
            left : left,
            width : width,
            height : "8px",
            borderRadius : "10px",
            background : bg
        }}
        >  
        </div>
    </div>
  )
}

export default Codelines

