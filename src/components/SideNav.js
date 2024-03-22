import React, { useEffect } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SideNav = (props) => {
    const { routes, activePage, onPageChange } = props

    useEffect(() => {
        console.log(routes)
    }, [])
    return (
        <nav className='flex flex-col iitems-start justify-between gap-5 w-full'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="flex flex-col items-start justify-between gap-3">
                {
                    routes.map((group, index) => {
                        return (
                            <div key={index} className="flex flex-col items-start justify-start gap-2">
                                <h3 className="bold-text">{group.heading}</h3>
                                {
                                    group.links.map((link) => {
                                        return (
                                            <div className={`flex flex-row items-center justify-center gap-3 ${activePage === link.path ? link.backgroundStyle : link.borderStyle}`} key={link.name} onClick={() => onPageChange(link.path)}>
                                                {
                                                    link.icon && <FontAwesomeIcon icon={link.icon} size='lg' />
                                                }
                                                <NavLink activeClassName="active" to={link.path} className={`bold-text ${activePage === link.path ? 'active' : ''}`}>{link.name}</NavLink>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default SideNav