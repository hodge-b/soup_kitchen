import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: .5rem 1rem;
    border-bottom: 1px solid black;

    .nav-container{
        i{
            font-size: 1.3rem;
        }
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