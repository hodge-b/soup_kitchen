import React from 'react';
import {StyledInventory} from './styled/Inventory.styled';

export default function Inventory({inventoryList}) {

    const inventoryElement = inventoryList.map(item => (
        <div className="container" key={item.id}>
            <img src={require(`../${item.itemImageLocation}`)} alt={item.itemName} />
            <div className="item-info-container">
                <p>{item.itemName}</p>
                <p>{`${item.itemQuantity} units`}</p>
            </div>
        </div>
    ))

    return(
        <StyledInventory>
            {inventoryList ? inventoryElement : <p>no inventory added.</p>}
        </StyledInventory>
    )
}