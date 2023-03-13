import React from 'react'
import "./items.css"
import Modal from "../expenseModal/modal.js"

function Items() {

    function flipCard(event) {
        const grandparentDiv = event.target.parentNode.parentNode;
        const greatGrandparentDiv = event.target.parentNode.parentNode.parentNode;
        console.log(grandparentDiv);
        if (grandparentDiv.classList.contains ('items-li-active')){
            grandparentDiv.classList.remove('items-li-active');
        }
        else{
            grandparentDiv.classList.add('items-li-active');
        }

    }

    function addEntry(event){
        return;
    }

    function buttonClicked(event){
        console.log('click');
        console.log(event);
        flipCard(event);
        const toggleModal = (prop) => {
            return <Modal prop={prop} />
          }
    }




  return (
    <div className='items'>
        <div className='items-container'>
            <div className='items-li'>
                <div className='items-li-inner'>
                    <div className='items-li-container'>
                            <button className='items-button' id='items-button-housing' onClick={buttonClicked}>Housing</button>
                        </div>
                    <div className='items-li-container-back'>
                        <div className='items-li-container-back-content'>
                            <div className='content-entry'>
                                <p>$200</p>
                            </div>
                            <div className='content-entry'>
                                <p>$200</p>
                            </div>
                            <div className='content-entry'>
                                <p>$200</p>
                            </div>
                            <div className='content-entry'>
                                <p>$200</p>
                            </div>
                            <div className='content-entry'>
                                <p>$200</p>
                            </div>
                            
                            </div> 
                            <button className='items-button-back' onClick={addEntry}>+</button>
                            <button className='items-button-back closebutton' onClick={buttonClicked}>Close</button>   
            </div>
            <hr />
            </div>
            </div>
            <div className='items-li'>
            <div className='items-li-inner'>
                    <div className='items-li-container'>
                            <button className='items-button' onClick={buttonClicked}>Education</button>
                        </div>
                    <div className='items-li-container-back'>
                        <button><p>Close</p></button>
            </div>
            <hr />
            </div>
            </div>
            <div className='items-li'>
            <div className='items-li-inner'>
                    <div className='items-li-container'>
                            <button className='items-button' onClick={buttonClicked}>Food</button>
                        </div>
                    <div className='items-li-container-back'>
                        <button><p>Close</p></button>
            </div>
            <hr />
            </div>
            </div>
            <div className='items-li'>
            <div className='items-li-inner'>
                    <div className='items-li-container'>
                            <button className='items-button' onClick={buttonClicked}>Clothes</button>
                        </div>
                    <div className='items-li-container-back'>
                        <button><p>Close</p></button>
            </div>
            <hr />
            </div>
            </div>
            <div className='items-li'>
            <div className='items-li-inner'>
                    <div className='items-li-container'>
                            <button className='items-button' onClick={buttonClicked}>Entertainment</button>
                        </div>
                    <div className='items-li-container-back'>
                        <button><p>Close</p></button>
            </div>
            <hr />
            </div>
            </div>
            <div className='items-li'>
            <div className='items-li-inner'>
                    <div className='items-li-container'>
                            <button className='items-button' onClick={buttonClicked}>Healthcare</button>
                        </div>
                    <div className='items-li-container-back'>
                        <button><p>Close</p></button>
            </div>
            <hr />
            </div>
            </div>
             <div className='items-li'>
             <div className='items-li-inner'>
                    <div className='items-li-container'>
                            <button className='items-button' onClick={buttonClicked}>Insurance</button>
                        </div>
                    <div className='items-li-container-back'>
                        <button><p>Close</p></button>
            </div>
            <hr />
            </div>
            </div>
            <div className='items-li'>
            <div className='items-li-inner'>
                    <div className='items-li-container'>
                            <button className='items-button' onClick={buttonClicked}>Transportation</button>
                        </div>
                    <div className='items-li-container-back'>
                        <button><p>Close</p></button>
            </div>
            <hr />
            </div>
            </div>
            <div className='items-li'>
            <div className='items-li-inner'>
                    <div className='items-li-container'>
                            <button className='items-button' onClick={buttonClicked}>Reading</button>
                        </div>
                    <div className='items-li-container-back'>
                        <button><p>Close</p></button>
            </div>
            <hr />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Items