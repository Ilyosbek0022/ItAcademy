import React from 'react'
import PrimaryButton from './buttons/btnprim'

const Header = () => {
    
  return (
    <div>
         <header >
<div className="text text-white text-3xl font-bold">It <span className="text-[#00e5ff]">Academy</span></div>
<div className="links flex gap-5">
  <a href="#">Home</a>
  <a href="#">Courses</a>
  <a href="#">About us</a>
  <a href="#">Contact us</a>
</div>
<div className="sign">
<PrimaryButton/>
</div>
       </header>
    </div>
  )
}

export default Header