import { StyledMenuModal } from "./styled/MenuModal.styled";

export default function MenuModal({onclick}){

    return(
        <StyledMenuModal>
            <div className="menu-container">
                <button  className="btn--view-inventory" onClick={onclick}>View Inventory</button>
                <button className="btn--add-inventory" onClick={onclick}>Add Inventory</button>
                <button className="btn--logout" onClick={onclick}>Logout</button>
            </div>
        </StyledMenuModal>
    )
}