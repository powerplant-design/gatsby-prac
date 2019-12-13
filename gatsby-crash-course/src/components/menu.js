import React from 'react'
import { Link } from "gatsby"

 const Menu = () => (
        <div style={{
            background: `#1c1c1c`,
            paddingTop: `0.6rem`
        }}>
            <ul style={{
                listStyle: `none`,
                display: `flex`,
                justifyContent: `space-evenly`}}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about/">ABOUT</Link></li>
                <li><Link to="/services/">SERVICES</Link></li>
                {/* <li><Link to="/">HOME</Link></li> */}
            </ul>
        </div>
    )


export default Menu;