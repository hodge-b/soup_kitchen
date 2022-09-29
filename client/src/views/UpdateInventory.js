import React from 'react';
import { StyledUpdateInventory } from './styled/UpdateInventory.styled';

export default function UpdateInventory({
    updateItem, 
    setUpdateItem,
    onUpdateItemSubmit,
}){
    

    return(
        <StyledUpdateInventory>
            <h2>Update Inventory</h2>
            <div className="form-container">
                <div className="form-group">
                    <label>Item Name</label>
                    <input 
                        type="text" 
                        value={updateItem.itemName}
                        onChange={e => setUpdateItem(prevItem => {return{...prevItem, itemName: e.target.value}})}
                    />
                </div>
                <div className="form-group">
                    <label>Item Quantity</label>
                    <input 
                        type="number" 
                        value={updateItem.itemQuantity}
                        onChange={e => setUpdateItem(prevItem => {return{...prevItem, itemQuantity: e.target.value}})}
                    />
                </div>
                <div className="form-group">
                    <label>Item Units</label>
                    <input 
                        type="text" 
                        value={updateItem.itemUnits}
                        onChange={e => setUpdateItem(prevItem => {return{...prevItem, itemUnits: e.target.value}})} 
                    />
                </div>
                <div className="form-group">
                    <label>Image URL</label>
                    <input 
                        type="text" 
                        value={updateItem.itemImageLocation}
                        onChange={e => setUpdateItem(prevItem => {return{...prevItem, itemImageLocation: e.target.value}})} 
                    />
                </div>
                <button onClick={onUpdateItemSubmit}>Update Item</button>
            </div>
        </StyledUpdateInventory>
    )
}