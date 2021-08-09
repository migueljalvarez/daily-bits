import styled from 'styled-components'

export const DivRegister = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    padding-top: 20px;
`

export const Logo = styled.img`
    width: 40%;
`


export const Label = styled.label`
    width: 100%;
    max-width: 500px;
`


export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 8px 0px;
    border-radius: 4px; 
    border: none;
`

export const ALink = styled.a`
    color: #26b67d;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
`
export const Button = styled.button`
    padding: 10px;
    width: 100%;
    border-radius: 6px;
    border: none;
    margin: 10px 0;
    max-width: 256px;
    &:hover {
    cursor: pointer;
    }
`

export const Header = styled.header`
    text-align: center;
`

export const DivLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`