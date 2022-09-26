import React from 'react';
import Header from '../components/Header';
import Inventory from '../components/Inventory';
import Search from '../components/Search';
import { StyledCurrentInventoryView } from './styled/CurrentInventoryView.styled';


export default function CurrentInventoryView({
    inventoryList,
    item,
    setItem,
    onSearch,
    onclick
}) {

    return(
        <StyledCurrentInventoryView>
            <Header />
            <h2 className='currentInventory-title'>Current Inventory</h2>
            <Search 
                item={item}
                setItem={setItem}
                onSearch={onSearch}
            />
            <button onClick={onclick}>submit</button>
            <Inventory
                inventoryList={inventoryList}
            />
        </StyledCurrentInventoryView>
    )
}