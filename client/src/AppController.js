import {useState, useEffect} from 'react';
import AddInventoryView from './views/AddInventoryView';
import CurrentInventoryView from './views/CurrentInventoryView';
import axios from 'axios';
import './style.css';

export default function AppController() {

    const [inventoryList, setInventoryList] = useState();

    useEffect(() => {
        axios.get('http://localhost:3001/api/get',(response) =>{
            setInventoryList(response);
        }).then(() => {})
    },[])

    return(
        <main>
            <CurrentInventoryView 
                inventoryList={inventoryList}
            />
            {/*<AddInventoryView />*/}
        </main>
    )
}