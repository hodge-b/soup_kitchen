import styled from 'styled-components';

export const StyledInventory = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem 0;

    .container{
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        width: 70%;

        box-shadow: 0px 0px 3px 1px black;
        border-radius: 5px;

    }
    .container > img{
        width: 20%;
    }
    .item-info-container > * {
        margin: .5rem;
    }
`