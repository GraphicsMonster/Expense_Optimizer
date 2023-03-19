import React, { useState, useEffect } from 'react'
import "./items.css"
import Modal from "../expenseModal/modal.js"

function Items() {



    function flipCard(event) {
        const grandparentDiv = event.target.parentNode.parentNode;
        const greatGrandparentDiv = event.target.parentNode.parentNode.parentNode;
        console.log(grandparentDiv);
        if (grandparentDiv.classList.contains('items-li-active')) {
            grandparentDiv.classList.remove('items-li-active');
        }
        else {
            grandparentDiv.classList.add('items-li-active');
        }

    }

    function addEntry(event) {
        return;
    }

    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');



    const addCategory = () => {
        if (!newCategory.trim()) {
            // If the input is empty or only contains whitespace, return without creating a new category
            return;
          }
        const categoryElement = (
                    <div className='items-li-inner'>
                        <div className='items-li-container'>
                            <button className='items-button' id={`items-button-${newCategory}`} onClick={buttonClicked}>{newCategory}</button>
                        </div>
                        <div className='items-li-container-back'>
                            <div className='items-li-container-back-content'>
                                <div className='content-entry'>
                                    <p>$200</p>
                                </div>

                            </div>
                            <button className='items-button-back' onClick={addEntry}>+</button>
                            <button className='items-button-back closebutton' onClick={buttonClicked}>Close</button>
                        </div>
                        <hr />
                    </div>
        );
        setCategories([...categories, categoryElement]);
        setNewCategory('');
    }

    /*/ This does not work

    useEffect(() => {
        const newCategoryElement = document.querySelector('.new-category');
        if (newCategoryElement) {
          newCategoryElement.classList.add('new-category-show');
          newCategoryElement.classList.remove('new-category');
        }
      }, [categories]);
    /*/
    function buttonClicked(event) {
        flipCard(event);
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

                            </div>
                            <button className='items-button-back' onClick={addEntry}>+</button>
                            <button className='items-button-back closebutton' onClick={buttonClicked}>Close</button>
                        </div>
                        <hr />
                    </div>
                </div>
                
                {categories.map((category, index) => (
                    <div key={index} className = 'items-li new-category'>{category}</div>
                ))}
            </div>
            
            <div className='items-add-category'>
                <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                <button className='items-button-add-category' onClick={addCategory}>Add Category</button>
            </div>
        </div>

    )
}

export default Items