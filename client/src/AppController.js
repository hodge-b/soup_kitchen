import {useState, useEffect} from 'react';
import axios from 'axios';

import AddInventory from './views/AddInventory';
import ViewInventory from './views/ViewInventory';
import Header from './components/Header';
import './style.css';
import UpdateInventory from './views/UpdateInventory';

export default function AppController(){

    // create states for application
    const [inventoryList, setInventoryList] = useState([]);
    const [isMenuModal, setIsMenuModal] = useState(false);
    const [isInventoryListUpdate, setIsInventoryListUpdate] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [view, setView] = useState('view-inventory');
    const [updateItem, setUpdateItem] = useState({});
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
         setIsInventoryListUpdate(false);
    },[isInventoryListUpdate])


    // function to determine what view to display
    const onViewChange = e => {
        const buttonName = e.target.className.split(' ')[0];
        const buttonID = e.target.id;
        
        switch(buttonName){
            case 'btn--view-inventory':
                setView('view-inventory');
                break;
            case 'btn--add-inventory':
                setView('add-inventory');
                break;
            case 'btn--update-inventory':
                const selectedItem = inventoryList.filter(elem => elem.id == buttonID);
                selectedItem.map(prevItem => setUpdateItem(prevItem));
                setView('update-inventory');
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
            itemUnits: addedItem.units !== '' ? addedItem.units : 'units',
            itemImageURL: addedItem.imageURL !== '' ? addedItem.imageURL : 'https://banner2.cleanpng.com/20190731/coj/kisspng-fork-icon-fast-food-icon-5d4125521cc0d5.6481897415645504821178.jpg'
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(err => console.error(err));


        axios.get(`http://localhost:3001/api/get`)
        .then(response => {
            setInventoryList(response.data);
            setIsInventoryListUpdate(true);
        })
        .catch(err => console.error(err));

        setAddedItem({name:'', quantity:0, units:'', imageURL:''});
        setView('view-inventory');
    }


    const onUpdateItemSubmit = e => {
        axios.put(`http://localhost:3001/api/put/${updateItem.id}`,{
            itemName: updateItem.itemName,
            itemQuantity: updateItem.itemQuantity,
            itemImageLocation: updateItem.itemImageLocation,
            itemUnits: updateItem.itemUnits !== '' ? updateItem.itemUnits : 'units',
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => console.error(err));

        axios.get(`http://localhost:3001/api/get`)
        .then(response => {
            setInventoryList(response.data);
            setIsInventoryListUpdate(true);
        })
        .catch(err => console.error(err));

        setAddedItem({name:'', quantity:0, units:'', imageURL:''});
        setView('view-inventory');
    }


    const onDeleteItemSubmit = e => {
        axios.delete(`http://localhost:3001/api/delete/${updateItem.id}`)
        .then(() => {})
        .catch(err => console.error(err));

        axios.get(`http://localhost:3001/api/get`)
        .then(response => {
            setInventoryList(response.data);
            setIsInventoryListUpdate(true);
        })
        .catch(err => console.error(err));

        setAddedItem({name:'', quantity:0, units:'', imageURL:''});
        setView('view-inventory');
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
                        onViewChange={onViewChange}
                    />
                :
                view === 'add-inventory' ? 
                    <AddInventory
                        addedItem={addedItem}
                        setAddedItem={setAddedItem}
                        onAddItemSubmit={onAddItemSubmit}
                    />
                :
                view === 'update-inventory' ?
                    <UpdateInventory 
                        updateItem={updateItem}
                        setUpdateItem={setUpdateItem}
                        onUpdateItemSubmit={onUpdateItemSubmit}
                        onDeleteItemSubmit={onDeleteItemSubmit}
                    />
                :
                    <></>
            }
        </main>
    )
}