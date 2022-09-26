import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddInventoryView from './views/AddInventoryView';
import CurrentInventoryView from './views/CurrentInventoryView';
import axios from 'axios';
import './style.css';
import Header from './components/Header';

export default function AppController() {

    const [isItemAdded, setIsItemAdded] = useState(false);
    const [inventoryList, setInventoryList] = useState([]);
    const [searchedItem, setSearchedItem] = useState('');
    const [addedItem, setAddedItem] = useState({
        name: '',
        quantity: 0
    });


    useEffect(() => {
        axios.get('http://localhost:3001/api/get').then(response => {
            setInventoryList(response.data);
        })
    },[])

    useEffect(() => {
        axios.get('http://localhost:3001/api/get').then(response => {
            setInventoryList(response.data);
        })
        setIsItemAdded(false);
    },[isItemAdded])

    
    const onSearch = e => {
        
    }

    const onAddItemSubmit = e => {
        e.preventDefault();

        
        axios.post('http://localhost:3001/api/insert',{
            itemName: addedItem.name,
            itemImageLocation: 'images/foodItem.jpg',
            itemQuantity: addedItem.quantity
        })
        .then(() => {})
        .catch(err => console.error(err))
        setIsItemAdded(true);
        setAddedItem({name: '', quantity: 0})
    }


    return(
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<CurrentInventoryView 
                    inventoryList={inventoryList}
                    onSearch={onSearch}
                />} />
                <Route path='/add' element={<AddInventoryView 
                    addedItem={addedItem}
                    setAddedItem={setAddedItem}
                    onAddItemSubmit={onAddItemSubmit}
                />} />
            </Routes>
        </Router>
    )
}