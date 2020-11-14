import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavbarStyled = styled.div`
    background-color: #060b26;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
`
export const NavLink = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
`
export const NavMenuItems = styled.ul`
    width: 100%;
`
export const NavBarToogle = styled.li`
    background-color: #060b26;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
`
export const NavMenu = styled.div`
    background-color: #060b26;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;

    ${(props) => props.active && `
        left: 0;
        transition: 300ms;
    `}
`
export const NavMenuItem = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
`
export const NavMenuItemLink = styled(Link)`
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;

    &:hover {
        background-color: #1a83ff;
    }
`
export const SpanText = styled.span`
    margin-left: 16px;
`