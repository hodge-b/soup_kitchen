import React from 'react';
import { StyledAddInventory } from './styled/AddInventory.styled';

export default function AddInventory({
    addedItem, 
    setAddedItem,
    onAddItemSubmit,
}){

    return(
        <StyledAddInventory>
            <h2>Add Inventory</h2>
            <div className="form-container">
                <div className="form-group">
                    <label>Item Name</label>
                    <input 
                        type="text" 
                        value={addedItem.name}
                        onChange={e => setAddedItem(prevItem => {return{...prevItem, name: e.target.value}})}
                    />
                </div>
                <div className="form-group">
                    <label>Item Quantity</label>
                    <input 
                        type="number" 
                        value={addedItem.quantity}
                        onChange={e => setAddedItem(prevItem => {return{...prevItem, quantity: e.target.value}})}
                    />
                </div>
                <div className="form-group">
                    <label>Item Units</label>
                    <input 
                        type="text" 
                        value={addedItem.units}
                        onChange={e => setAddedItem(prevItem => {return{...prevItem, units: e.target.value}})} 
                    />
                </div>
                <div className="form-group">
                    <label>Image URL</label>
                    <input 
                        type="text" 
                        value={addedItem.imageURL}
                        onChange={e => setAddedItem(prevItem => {return{...prevItem, imageURL: e.target.value}})} 
                    />
                </div>
                <button onClick={onAddItemSubmit}>Add Item</button>
            </div>
        </StyledAddInventory>
    )
}