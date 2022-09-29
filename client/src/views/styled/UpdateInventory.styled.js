import styled from 'styled-components';

export const StyledUpdateInventory = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-bottom: 1rem;

    h2{
        padding: 1rem 0;
    }
    .form-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        width: 90%;
        padding: 1rem .5rem;

        box-shadow: 0px 0px 3px 0px black;
        border-radius: 5px;
    }
    .form-group{
        position: relative;
        display: flex;
        justify-content: center;

        width: 80%;
        padding: .7rem;
        margin-bottom: 1rem;

        border: 1px solid;
        border-radius: 5px;
    }
    .form-group > label{
        position: absolute;
        top: -10px;
        left: 10px;
        width: max-content;

        font-size: .8rem;
        text-align: center;
        background-color: white;
    }
    .form-group > input{
        width: 100%;
        font-size: 1.5rem;
        border: none;
    }
    .form-group > input:focus{
        outline: none;
    }
    .form-button-container{
        display: flex;
        justify-content: space-evenly;

        width: 100%;
    }
    .form-button-container > button{
        padding: .5rem;
    }
    .btn--delete{
        color: red;
    }

    @media only screen and (min-width: 768px){
        
        .form-container{
            width: 60%;
        }
        .form-group{
            width: 80%;
        }
        .form-group > label{
            width: 35%;
            font-size: 1rem;
        }
    }
    
`