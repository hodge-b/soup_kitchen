import {useState, useEffect} from 'react';
import AddInventoryView from './views/AddInventoryView';
import CurrentInventoryView from './views/CurrentInventoryView';
import axios from 'axios';
import './style.css';

export default function AppController() {

    const [inventoryList, setInventoryList] = useState([]);
    const [searchedItem, setSearchedItem] = useState('');


    useEffect(() => {
        axios.get('http://localhost:3001/api/get',(response) =>{
            setInventoryList(response);
        }).then(() => {})
    },[])
    
    const onSearch = e => {
        const params = {item: searchedItem}
        axios.get('http://localhost:3001/api/get/',{params})
            .then((response) => {
                console.log(response.data)
                setInventoryList(prevItem => ([...prevItem, response.data]))
            })
    }

    return(
        <main>
            <CurrentInventoryView 
                inventoryList={inventoryList}
                item={searchedItem}
                setItem={setSearchedItem}
                onSearch={onSearch}
            />
            {/*<AddInventoryView />*/}
        </main>
    )
}