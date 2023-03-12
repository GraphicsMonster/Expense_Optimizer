import React, {useState} from 'react'
import Button from "../Button/button.js"
import "./modal.css"

function Modal(prop) {

    const {expense, onClose} = prop;
    //expense is the string containing the expense we are using the modal for
    const {showModal, setshowModal} = useState(false);

    const handleModalClose = () => {
        setshowModal(false);
        onClose();
    };
     

    if(!showModal){
        return null;
    }

    return (
    <div className='modal'>
         <h2>Type in the amount spent on {expense}</h2>

         <div className='input_params'>

            <label>The amount spent</label>

            <input
            type="number"
            name = "expense-amount"
            placeholder="0"
            id = "expense-amount"
            />

            <br/>
            <br/>

            <label>The quantity bought</label>

            <input 
            type="number"
            name="expense-quantity"
            placeholder='0'
            id='expense-quantity'
            />

            <Button buttonStyle={{backgroundColor: "#FF7000", color: "#fff", text: "Submit", padding: "1% 2%"}}/>
            <div onClick={onClose()}><Button buttonStyle={{backgroundColor: "#FF7000", color: "#fff", text: "Close", padding: "1% 2%"}}/></div>
         </div>
    </div>
  )
}

export default Modal;