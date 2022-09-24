import React from 'react';
import AddInventoryView from './views/AddInventoryView';
import CurrentInventoryView from './views/CurrentInventoryView';
import './style.css';

export default function AppController() {

    return(
        <main>
            <CurrentInventoryView />
            {/*<AddInventoryView />*/}
        </main>
    )
}