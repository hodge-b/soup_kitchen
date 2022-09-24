import React from 'react';
import { StyledHeader } from './styled/Header.styled';

export default function Header() {

    return(
        <StyledHeader>
            <div className="header-logo">Soup Kitchen</div>
            <ul>
                <li>Home</li>
                <li>Add Item</li>
                <li>About</li>
            </ul>
        </StyledHeader>
    )
}