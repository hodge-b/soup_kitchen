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
    const [addedItem, setAddedItem] = useState({
        name: '',
        quantity: 0,
        units: '',
        imageURL: '',
    });


    // listen for window resizing to send to down as props
    window.addEventListener('resize', () => setWidth(window.innerWidth));


    /* gather inventory list from database and add it to state
       on initial render */
    useEffect(() => {
        axios.get(`http://localhost:3001/api/get`)
         .then(response => setInventoryList(response.data));
    },[])

    useEffect(() => {
        axios.get(`http://localhost:3001/api/get`)
         .then(response => setInventoryList(response.data));
    },[inventoryList])


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
        // turn off body scroll
        const body = document.querySelector('body');
        body.style.overflow = "hidden";
        setIsMenuModal(true);
    }

    // function to handle submit click from add item form
    const onAddItemSubmit = e => {
        axios.post('http://localhost:3001/api/insert',{
            itemName: addedItem.name,
            itemQuantity: addedItem.quantity,
            itemUnits: addedItem.units,
            itemImageURL: addedItem.imageURL !== '' ? addedItem.imageURL : 'https://banner2.cleanpng.com/20190731/coj/kisspng-fork-icon-fast-food-icon-5d4125521cc0d5.6481897415645504821178.jpg'
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
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
                    <AddInventory
                        addedItem={addedItem}
                        setAddedItem={setAddedItem}
                        onAddItemSubmit={onAddItemSubmit}
                    />
                :
                    <></>
            }
        </main>
    )
}