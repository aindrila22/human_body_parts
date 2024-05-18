import Image from 'next/image'
import React from 'react'

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 w-full h-16 grid grid-cols-4 place-items-center mx-auto bg-white shadow-inner rounded-2xl">
      <Image src={'/home.png'} alt="" width={28} height={28} />
      <Image src={'/care.png'} alt="" width={22} height={22} />
      <Image src={'/coverage.png'} alt="" width={44} height={44} />
      <Image src={'/claim.png'} alt="" width={24} height={24} />
    </div>
  )
}

export default BottomNav
