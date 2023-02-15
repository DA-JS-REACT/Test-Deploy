
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'


/**
 * Layout that contains the different pages
 * @returns  {React.ReactElement}
 */
export function Layout() {
    return (
        <div className="Layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}