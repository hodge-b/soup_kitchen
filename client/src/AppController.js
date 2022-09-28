import {useState, useEffect} from 'react';
import axios from 'axios';

import AddInventory from './views/AddInventory';
import ViewInventory from './views/ViewInventory';
import Header from './components/Header';
import './style.css';

export default function AppController(){

    // create states for application
    const [inventoryList, setInventoryList] = useState([]);
    const [isMenuModal, setIsMenuModal] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [view, setView] = useState('view-inventory');


    // listen for window resizing to send to down as props
    window.addEventListener('resize', () => setWidth(window.innerWidth));


    /* gather inventory list from database and add it to state
       on initial render */
    useEffect(() => {
        axios.get(`http://localhost:3001/api/get`)
         .then(response => setInventoryList(response.data));
    },[])


    // function to determine what view to display
    const onViewChange = e => {
        const buttonName = e.target.className.split(' ')[0];

        switch(buttonName){
            case 'btn--view-inventory':
                setView('view-inventory');
                break;
            case 'btn--add-inventory':
                setView('add-inventory');
                break;
            default:
                break;
        }

        // turn on body scroll
        const body = document.querySelector('body');
        body.style.overflow = "auto";
        setIsMenuModal(false);
    }

    // function to handle menu click when width is for mobile
    const handleMenuClick = e => {
        // turn on body scroll
        const body = document.querySelector('body');
        body.style.overflow = "hidden";
        setIsMenuModal(true);
    }

    // render to screen
    return(
        <main>
            <Header 
                width={width}
                onHandleViewChange={onViewChange}
                onclick={handleMenuClick}
                isMenuModal={isMenuModal}
            />
            {
                // determine which view to render based on state
                view === 'view-inventory' ?
                    <ViewInventory 
                        inventoryList={inventoryList}
                    />
                :
                view === 'add-inventory' ? 
                    <AddInventory />
                :
                    <></>
            }
        </main>
    )
}