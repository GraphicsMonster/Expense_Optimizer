import React from 'react'
import "./fundcard.css";

function FundCard({funds}) {
  return (
    <div className='card'>
       <div className='card-text'>
        <h2>
            ${funds}
        </h2>
       </div>
    </div>
  )
}

export default FundCard;