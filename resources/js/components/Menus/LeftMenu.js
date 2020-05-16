import React from 'react'
import LeftMemberMenu from './LeftMemberMenu'
import LeftGuestMenu from './LeftGuestMenu'

const LeftMenu = (props) => {
    if(props.auth)
    {
        return <LeftMemberMenu />
    }
    else
    {
        return <LeftGuestMenu />
    }
}

export default LeftMenu
