import React from 'react'
import "./HeaderOption.css";

function HeaderOption({Icon, title}) {
  return (
    <div className="headerOption">
      {/* if i pass in an icon only then i shud render the icon as a componenet */}
      {Icon && <Icon className='headerOption_icon'/> } 
      <h3 className='headerOption_title'>{title}</h3>         
    </div>
  )
}

export default HeaderOption