import {useState, useEffect} from 'react';
import AddInventoryView from './views/AddInventoryView';
import CurrentInventoryView from './views/CurrentInventoryView';
import axios from 'axios';
import './style.css';

export default function AppController() {

    const [inventoryList, setInventoryList] = useState([]);
    const [searchedItem, setSearchedItem] = useState('');


    useEffect(() => {
        axios.get('http://localhost:3001/api/get').then(response => {
            setInventoryList(response.data);
            console.log(response.data)
        })
    },[])
    
    const onSearch = e => {
        const params = {item: searchedItem}
        axios.get('http://localhost:3001/api/get',{params})
            .then((response) => {
                console.log(response.data);
                setInventoryList(prevItem => ([...prevItem, response.data]));
            })
    }

    const handleClick = e => {
        axios.post('http://localhost:3001/api/insert',{
            itemName: 'Apple',
            itemImageLocation: 'images/apple.jpg',
            itemQuantity: 2
        }).then(() => {

        })
    }


    return(
        <main>
            <CurrentInventoryView 
                inventoryList={inventoryList}
                item={searchedItem}
                setItem={setSearchedItem}
                onSearch={onSearch}
                onclick={handleClick}
            />
            {/*<AddInventoryView />*/}
        </main>
    )
}