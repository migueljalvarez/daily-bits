import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FooterDiv = styled.footer`
    display: flex;
    background-color: var(--color-darkgray);
    align-items: center;
    padding: 15px 35px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
`

export const Ir = styled(Link)`
    display: flex;
    flex-direction: column;
    float: left;
    list-style: none;
    color: var(--color-white);
    text-decoration: none;

    display: flex;
    align-items: center;
`

export const Icon = styled.svg`
    width: 24px;
    height: 24px;
`

export const Path = styled.path`
    fill: var(--color-white);
`
  