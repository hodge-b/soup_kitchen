import React from 'react';
import { StyledViewInventory } from './styled/ViewInventory.styled';

export default function ViewInventory({
    inventoryList,
    onViewChange,
}){

    // using the map function to iterate through elements
    const inventoryElement = inventoryList.map(elem => (
        <div className="btn--update-inventory item-container" id={elem.id} key={elem.id} onClick={onViewChange}>
            <img src={elem.itemImageLocation} alt={elem.itemName} />
            <div className="item-info-container">
                <p className="item-info--name">{elem.itemName}</p>
                <p className="item-info--quantity">{`${elem.itemQuantity} units`}</p>
            </div>
        </div>
    ))

    return(
        <StyledViewInventory>
            <h2>Current Inventory</h2>
            <div className="inventory-container">
                {inventoryElement}
            </div>
        </StyledViewInventory>
    )
}