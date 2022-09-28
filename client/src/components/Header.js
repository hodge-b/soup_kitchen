import React from 'react';
import MenuModal from './MenuModal';
import { StyledHeader } from './styled/Header.styled';

export default function Header({
    width,
    onHandleViewChange,
    onclick,
    isMenuModal,
}){

    return(
        <StyledHeader>
            <div className="logo-container">
                <p>Soup Kitchen</p>
                <p><small>Admin Panel</small></p>
            </div>
            {
                // check width to display menu button or navbar
                width >= 768 ?
                    <div className="nav-button-container">
                        <button  className="btn--view-inventory" onClick={onHandleViewChange}>View Inventory</button>
                        <button className="btn--add-inventory" onClick={onHandleViewChange}>Add Inventory</button>
                        <button className="btn--logout" onClick={onHandleViewChange}>Logout</button>
                    </div>
                :
                    <i className="ri-menu-line" onClick={onclick}></i>
            }
            {
                // check if menu modal must be rendered
                isMenuModal ?
                <>
                    <MenuModal 
                        onclick={onHandleViewChange}
                    />
                    <div className="screen-overlay"></div>
                </>
                :
                    <></>
            }
            
        </StyledHeader>
    )
}