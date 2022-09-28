import React from 'react';
import { StyledHeader } from './styled/Header.styled';

export default function Header({width}){

    return(
        <StyledHeader>
            <div className="logo-container">
                <p>Soup Kitchen</p>
                <p><small>Admin Panel</small></p>
            </div>
            <div className="nav-container">
                {
                    // check width to display menu button or navbar
                    width >= 768 ?
                        <button>View Inventory</button>
                    :
                        <i className="ri-menu-line"></i>
                }
            </div>
        </StyledHeader>
    )
}