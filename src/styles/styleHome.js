import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const TextHeader = styled.p`
    color: var(--color-white);
    text-align: center;
    padding: 5px 20px;
`

export const ContainerCategories = styled.div`
    display: flex;
    justify-content: center;
`

export const LogoImg = styled.img`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 95px;
    padding: 5px;
    border: var(--color-white) solid 9px;
    border-radius: 50%;
  `

export const Categories = styled(Link)`
    color: var(--color-white);
    text-decoration: none !important;
    margin: 0 10px;
    text-align: center;
`