import React from 'react'
import "./button.css"

function Button(prop) {
 
    const {buttonStyle} = prop;
 
  return (
    
    <div className='mybtn'>

       <button style={{backgroundColor: buttonStyle.backgroundColor, color: buttonStyle.color, fontSize: buttonStyle.fontSize, padding: buttonStyle.padding,  borderColor: buttonStyle.borderColor, width: buttonStyle.width}}>

              {buttonStyle.text}

       </button>
       
    </div>
    
  )
}

export default Button