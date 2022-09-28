import {useState, useEffect} from 'react';
import Header from './components/Header';
import './style.css';

export default function AppController(){

    // create states for application
    const [inventoryList, setInventoryList] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);


    // listen for window resizing to send to down as props
    window.addEventListener('resize', () => setWidth(window.innerWidth));


    // render to screen
    return(
        <main>
            <Header 
                width={width} 
            />
        </main>
    )
}