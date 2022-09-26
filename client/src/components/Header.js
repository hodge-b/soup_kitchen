import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './styled/Header.styled';

export default function Header() {
    
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    return(
        <StyledHeader>
            <div className="header-logo">Soup Kitchen</div>
            {width <= 760 ?
                <i className='ri-menu-fill'></i> 
            :
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/add'><li>Add Item</li></Link>
                    <Link to='/about'><li>About</li></Link>
                </ul>
            }
        </StyledHeader>
    )
}