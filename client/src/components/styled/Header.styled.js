import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: .5rem;
    width: 100%;
    border-bottom: 1px solid black;

    i{
        margin-right: 1rem;
    }
    ul{
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        width: 50%;

        list-style: none;
    }
`