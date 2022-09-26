import styled from 'styled-components';

export const StyledAddInventoryView = styled.section`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;

    padding: 1rem;

    .card-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        padding: 1rem;
        width: 50%;
        box-shadow: 0px 0px 2px 0px black;
        border-radius: 5px;
        text-align: center;

        h2{
            margin-bottom: 2rem;
        }
        
        .form-group{
            position: relative;
            display: flex;
            justify-content: center;
    
            padding: .7rem;
            margin-bottom: 2rem;
    
            border: 1px solid;
            border-radius: 5px;
        }
        .form-group > label{
            position: absolute;
            top: -13px;
            left: 15px;
            width: 40%;
            text-align: center;
            background-color: white;
        }
        .form-group > input{
            width: 100%;
            font-size: 1rem;
            border: none;
            text-align: center;
        }
        .form-group > input:focus{
            outline: none;
        }
        button{
            padding: .5rem;
            width: max-content;
        }
    }
`