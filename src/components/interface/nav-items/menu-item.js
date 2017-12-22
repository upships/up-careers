import React from 'react'
import { Link } from 'react-router-dom'

const CustomMenu = ({ menu }) => {

      return (

        <Link className="navbar-item" to={ menu.link }>{ menu.label }</Link>

      )
}

export default CustomMenu
