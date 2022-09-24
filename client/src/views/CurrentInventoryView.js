import React from 'react';
import Header from '../components/Header';
import Inventory from '../components/Inventory';
import Search from '../components/Search';
import { StyledCurrentInventoryView } from './styled/CurrentInventoryView.styled';


export default function CurrentInventoryView() {

    return(
        <StyledCurrentInventoryView>
            <Header />
            <h2 className='currentInventory-title'>Current Inventory</h2>
            <hr />
            <Search />
            <hr />
            <Inventory />
        </StyledCurrentInventoryView>
    )
}