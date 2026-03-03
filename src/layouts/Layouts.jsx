import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import "../styles/app.layout.css"
import AnnouncementBar from "./AnnouncementBar"
import Header from "./Header"
import Footer from "./Footer"

const Layouts = () => {
  return (
    <>
    <AnnouncementBar />
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layouts