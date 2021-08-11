import styled from 'styled-components'

export const Title = styled.h1`
    color: var(--color-white);
    margin-left: 10px;
    font-size: 22px;
`

export const StatiticsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    padding: 0 16px;
    border-radius: 10px;
    border: solid 2px var(--color-gray);
    margin: 15px auto;
`

export const Times = styled.p`
    display: flex;
    font-weight: bold;
    align-self: center;
    font-size: 16px;

    color: var(--color-white);
`

export const TimesSvg = styled.svg`
    fill: var(--color-gray);
`

export const Response = styled.p`
    display: flex;
    font-weight: bold;
    align-self: center;
    font-size: 16px;

    color: var(--color-white);
`

export const ResponseSvg = styled.svg`
    stroke: var(--color-gray);
`

export const ResponseSuccess = styled.p`
    display: flex;
    font-weight: bold;
    align-self: center;
    font-size: 16px;

    color: var(--color-white);
`

export const ResponseFailed = styled.p`
    display: flex;
    font-weight: bold;
    align-self: center;
    font-size: 16px;

    color: var(--color-white);
`

export const Span = styled.span`
    margin: 0px 5px;
`

export const Select = styled.select`
    background-color: unset;
    color: white;
    padding: 0.5em 2.5em 0.5em 0.9em;
    border: none;
    appearance: none;
    background-image: url("../assets/svg/arrowDown.svg");
    background-repeat: no-repeat;
    background-position: right;

`

export const CountTimes = styled.p`
    color: var(--color-white);
`

export const CountResponse = styled.p`
    color: var(--color-white);
`

export const CountResponseSuccess = styled.p`
    color: var(--color-green);
`

export const CountResponseFailed = styled.p`
    color: var(--color-red);
`