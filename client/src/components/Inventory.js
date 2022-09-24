import React from 'react';
import {nanoid} from 'nanoid'
import {StyledInventory} from './styled/Inventory.styled';

export default function Inventory({inventoryList}) {

    const inventoryElement = inventoryList.map(item => (
        <div className="container" key={nanoid()}>
            <p>{item.item}</p>
        </div>
    ))

    return(
        <StyledInventory>
            {inventoryList ? inventoryElement : '`<p>no inventory added.</p>`'}
        </StyledInventory>
    )
}