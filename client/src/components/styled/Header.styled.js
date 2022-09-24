import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 1rem;
    width: 100%;
    border-bottom: 1px solid black;

    ul{
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        width: 50%;

        list-style: none;
    }
`