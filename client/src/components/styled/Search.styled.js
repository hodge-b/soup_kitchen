import styled from 'styled-components';

export const StyledSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid black;

    .form-group{
        width: 80%;
        padding: .5rem;

        border: 1px solid black;
        border-radius: 5px;
        text-align: center;
    }
    .form-group > input {
        width: 100%;
        border: none;
        font-size: 1.5rem;
    }
    .search-input:focus{
        outline: none;
    }
`