import styled from 'styled-components'

export const Title = styled.h1`
    color: var(--color-white);
    margin-left: 10px;
    font-size: 22px;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: var(--color-white);
`

export const LogoutBtn = styled.input`
    color: var(--color-red);
    background-color: unset;
    width: fit-content;
    margin: auto;
    border: none;

    &:hover{
        cursor: pointer;
    }
`

export const User = styled.h3`
    margin-block-start: unset;
    margin-block-end: unset;
`

export const Email = styled.p`
    margin-block-start: unset;
    margin-block-end: unset;
    font-size: small;
`

export const Image = styled.img`
    margin: auto;
    width: 100px;
    border-radius: 50%;
`