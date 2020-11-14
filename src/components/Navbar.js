import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { SidebarData } from './SidebarData'
import { NavbarStyled, NavLink, NavMenuItems, NavBarToogle, NavMenu, NavMenuItem, NavMenuItemLink, SpanText } from './style'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const toggleSidebar = () => setSidebar(prevSidebar => !prevSidebar)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <NavbarStyled>
                    <NavLink to='#'>
                        <FaIcons.FaBars onClick={toggleSidebar} />
                    </NavLink>
                </NavbarStyled>

                <NavMenu active={sidebar}>
                    <NavMenuItems onClick={toggleSidebar}>
                        <NavBarToogle>
                            <NavLink to='#'>
                                <AiIcons.AiOutlineClose />
                            </NavLink>
                        </NavBarToogle>

                        {SidebarData.map((item, index) => {
                            return (
                                <NavMenuItem key={index}>
                                    <NavMenuItemLink to={item.path} >
                                        {item.icon}
                                        <SpanText>{item.title}</SpanText>
                                    </NavMenuItemLink>
                                </NavMenuItem>
                            )
                        })}

                    </NavMenuItems >
                </NavMenu >
            </IconContext.Provider >
        </>
    )
}

export default Navbar
