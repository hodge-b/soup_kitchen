import {useState, useEffect} from 'react';
import Header from './components/Header';
import './style.css';
import AddInventory from './views/AddInventory';
import ViewInventory from './views/ViewInventory';

export default function AppController(){

    // create states for application
    const [inventoryList, setInventoryList] = useState([]);
    const [isMenuModal, setIsMenuModal] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [view, setView] = useState('view-inventory');


    // listen for window resizing to send to down as props
    window.addEventListener('resize', () => setWidth(window.innerWidth));


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
        setIsMenuModal(false);
    }

    // function to handle menu click when width is for mobile
    const handleMenuClick = e => {
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
                    <ViewInventory />
                :
                view === 'add-inventory' ? 
                    <AddInventory />
                :
                    <></>
            }
        </main>
    )
}