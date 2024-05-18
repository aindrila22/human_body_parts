import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-end items-end w-full px-6 pt-5 gap-3">
      <Image src={'/bell.svg'} alt="" width={32} height={32} />
      <Image src={'/profile.svg'} alt="" width={32} height={32} />
    </div>
  )
}

export default Navbar
