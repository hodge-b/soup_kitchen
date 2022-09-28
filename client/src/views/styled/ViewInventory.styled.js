import styled from 'styled-components';

export const StyledViewInventory = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;

    h2{
        padding: 1rem 0;
    }
    .inventory-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .item-container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        
        width: 80%;
        min-height: 5rem;
        margin: .5rem 0;
        padding: .5rem;

        box-shadow: 0px 0px 3px 0px black;
        border-radius: 5px;
        text-align: center;
    }
    .item-container > img{
        width: 25%;
    }

    @media only screen and (min-width: 768px){
        .inventory-container{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: center;
        }
    }
`