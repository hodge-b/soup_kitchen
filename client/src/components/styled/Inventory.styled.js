import styled from 'styled-components';

export const StyledInventory = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    padding: 1rem;
    text-align: center;

    .container{
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        width: 90%;
        margin-bottom: .5rem;

        box-shadow: 0px 0px 2px 0px black;
        border-radius: 5px;

        user-select: none;
        overflow: hidden;

    }
    .container > img{
        width: 30%;
        padding: .5rem;
    }
    .item-info-container > * {
        margin: .5rem;
    }

    @media only screen and (min-width: 760px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 1rem;
        
        justify-items: center;

        .container{
            width: 70%;
            height: 100%;
        }
    }
`