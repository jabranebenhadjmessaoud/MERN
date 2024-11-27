import React from 'react'
import SubContent from './SubContent'
import Advertisement from './Advertisement'

const MainContent = () => {
return (
    <div className='maincon'>
        <div className='yellowbox'>
            <SubContent/>
            <SubContent/>
            <SubContent/>
        </div>
        <Advertisement/>
    </div>
    
)
}

export default MainContent