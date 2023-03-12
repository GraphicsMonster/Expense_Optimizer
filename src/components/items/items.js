import React from 'react'
import "./items.css"
import Modal from "../expenseModal/modal.js"

function Items() {

  const toggleModal = (prop) => {
    return <Modal prop={prop} />
  }

  return (
    <div className='items'>
        <div className='items-container'>
            <div className='items-li'>
            <div className='items-li-container'>
                    <button onClick={toggleModal()}><p>Housing</p></button>
                    <hr />
                </div>
            </div>
            <div className='items-li'>
            <div className='items-li-container'>
                    <p>Education</p>
                    <hr />
                </div>
            </div>
            <div className='items-li'>
            <div className='items-li-container'>
                    <p>Food</p>
                    <hr />
                </div>
            </div>
            <div className='items-li'>
            <div className='items-li-container'>
                    <p>Clothes</p>
                    <hr />
                </div>
            </div>
            <div className='items-li'>
                <div className='items-li-container'>
                    <p>Entertainment</p>
                    <hr />
                </div>
            </div>
            <div className='items-li'>
                <div className='items-li-container'>
                    <p>Healthcare</p>
                    <hr />
                </div>
            </div>
             <div className='items-li'>
                <div className='items-li-container'>
                    <p>Insurance</p>
                    <hr />
                </div>
            </div>
            <div className='items-li'>
                <div className='items-li-container'>
                    <p>Transportation</p>
                    <hr />
                </div>
            </div>
            <div className='items-li'>
                <div className='items-li-container'>
                    <p>Reading</p>
                    <hr />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Items