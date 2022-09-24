import styled from 'styled-components';

export const StyledSearch = styled.div`
    position: relative;
    padding: 1rem 0;

    width: 50%;

    .form-group{
        position: relative;
        display: flex;
        justify-content: center;

        padding: .7rem;
        margin-bottom: 1rem;

        border: 1px solid;
        border-radius: 5px;
    }
    .form-group > label{
        position: absolute;
        top: -13px;
        left: 15px;
        width: 28%;
        text-align: center;
        background-color: white;
    }
    .form-group > input{
        width: 100%;
        font-size: 1.5rem;
        border: none;
        text-align: center;
    }
    .form-group > input:focus{
        outline: none;
    }
`