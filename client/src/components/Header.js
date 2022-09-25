import React, {useState} from 'react';
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
                    <li>Home</li>
                    <li>Add Item</li>
                    <li>About</li>
                </ul>
            }
        </StyledHeader>
    )
}