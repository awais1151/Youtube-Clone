import React from 'react'
import './sidebarrow.css';
function SidebarRow({ selected, title, Icon }) {
  return (
    <div className={`sidebarrows ${selected && "selected"}`}>
       
      <Icon className="icon" />
      <h2 className="title">{title}</h2>
       
    </div>
  )
}

export default SidebarRow