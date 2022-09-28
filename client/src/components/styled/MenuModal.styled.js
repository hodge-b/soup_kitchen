import styled from 'styled-components';

export const StyledMenuModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 50%;
    height: 100vh;

    background-color: #D3D3D3;

    button{
        width: 80%;
        padding: .2rem;
    }

    .menu-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        padding: 1rem 0;
    }
    .menu-container > button {
        margin: .5rem 0;
    }

`