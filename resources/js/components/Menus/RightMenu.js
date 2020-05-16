import React from 'react'
import { Link } from 'react-router-dom'
import {
    Nav, NavDropdown,
    Form,
} from 'react-bootstrap'
import RightMemberMenu from './RightMemberMenu'
import RightGuestMenu from './RightGuestMenu'

const RightMenu = (props) => {
    if(props.auth)
    {
        return <RightMemberMenu />
    }
    else
    {
        return <RightGuestMenu />
    }
}
export default RightMenu
