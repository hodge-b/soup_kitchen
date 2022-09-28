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
            <div className="nav-container">
                {
                    // check width to display menu button or navbar
                    width >= 768 ?
                        <>
                            <button  className="btn--view-inventory" onClick={onclick}>View Inventory</button>
                            <button className="btn--add-inventory" onClick={onclick}>Add Inventory</button>
                            <button className="btn--logout" onClick={onclick}>Logout</button>
                        </>
                    :
                        <i className="ri-menu-line" onClick={onclick}></i>
                }
            </div>
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