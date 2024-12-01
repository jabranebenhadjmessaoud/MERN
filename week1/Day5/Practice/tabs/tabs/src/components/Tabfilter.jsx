import React from 'react'

const Tabfilter = ({setSelectedtab}) => {
return (
    <div className='d-flex justify-content-around'>
        {/*  */}
        <button className='btn btn-secondary' onClick={()=>setSelectedtab("tab1")}>Tab1</button>
        <button className='btn btn-secondary' onClick={()=>setSelectedtab("tab2")}>Tab2</button>
        <button className='btn btn-secondary' onClick={()=>setSelectedtab("tab3")}>Tab3</button>
        
    </div>
)
}

export default Tabfilter