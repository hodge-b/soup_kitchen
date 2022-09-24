import React from 'react';
import {StyledInventory} from './styled/Inventory.styled';

export default function Inventory({inventoryList}) {

    return(
        <StyledInventory>
            <p>{inventoryList ? 'There is inventory in system.' : 'no inventory added.'}</p>
        </StyledInventory>
    )
}