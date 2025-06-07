import React, { useState } from 'react'
import NavBar from './HomePage/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './HomePage/Footer'

function Layout() {
    const [selectedLocation, setSelectedLocation] = useState("nagpur");

    return (
        <>
            <NavBar />
            <Outlet />
            <Footer setSelectedLocation={setSelectedLocation} />
        </>
    )
}

export default Layout
