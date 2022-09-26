import React from 'react';
import { StyledAddInventoryView } from './styled/AddInventoryView.styled';

export default function AddInventoryView({
    addedItem,
    setAddedItem,
    onAddItemSubmit,
    isItemAdded,
}) {

    return(
        <StyledAddInventoryView>
            <div className="card-container">
                <h2>Add Item</h2>
                <div className="form-group">
                    <label>Item Name</label>
                    <input 
                        type="text"
                        name="itemName"
                        value={addedItem.name}
                        onChange={e => setAddedItem(prevItem => (
                            {
                                ...prevItem,
                                name: e.target.value
                            }
                        ))} 
                    />
                </div>
                <div className="form-group">
                    <label>Quantity</label>
                    <input 
                        type="number"
                        name="itemQuantity"
                        value={addedItem.quantity}
                        onChange={e => setAddedItem(prevItem => (
                            {
                                ...prevItem,
                                quantity: e.target.value
                            }
                        ))}
                    />
                </div>
                <button onClick={onAddItemSubmit}>Add Item</button>
            </div>
        </StyledAddInventoryView>
    )
}