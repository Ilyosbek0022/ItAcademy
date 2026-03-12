import React from 'react'
import PrimaryButton from './buttons/btnprim'
import Image from 'next/image'

const Header = () => {
    
  return (
    <div>
         <header >
<div className="text text-white text-3xl font-bold"><Image src={"/vercel.svg"} height={60} width={120} alt='logo'/></div>
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