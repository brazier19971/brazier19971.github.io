import * as React from 'react'
import ResponsiveDrawer from './ResponsiveDrawer'

import {
  container,
  heading,
  
} from './layout.module.css'
const Layout = ({ pageTitle, children }) => {
   
  return (
    
    <main className={container}>
        <ResponsiveDrawer></ResponsiveDrawer>

    
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>

    
  )
}
export default Layout