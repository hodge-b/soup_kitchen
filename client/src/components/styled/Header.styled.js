import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: .5rem 1rem;
    background-color: white;
    border-bottom: 1px solid black;

    z-index: 2;

    i{
        font-size: 1.3rem;
    }
    button{
        width: 20%;
        padding: .2rem;
    }
    .nav-button-container{
        display: flex;
        justify-content: space-around;

        width: 70%;
    }
    .screen-overlay{
        position: absolute;
        top: 0;
        left: 100%;
        width: 50%;
        transform: translate(-100%);

        height: 100vh;

        opacity: .8;
        background-color: black;
    }
`