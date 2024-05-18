import Image from 'next/image'
import React from 'react'

const Description = () => {
  return (
    <div className="w-full block  px-3 pt-6 pb-3 text-white">
      <div className="flex justify-between items-end gap-6 w-full bg-[#65B9C6] rounded-lg shadow-md">
        <div className="space-y-4 px-4 py-5">
          <div className="text-2xl font-medium">Our Network</div>
          <div className="text-sm leading-snug">
            Navigate within our network of healthcare providers
          </div>
          <div className="flex text-base justify-between items-center gap-4 px-4 py-2 my-4 rounded-3xl bg-white text-black">
            <label className="text-sm">Search Network</label>
            <Image src={'/arrow.png'} alt="" width={16} height={16} />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <Image src={'/doctor.png'} alt="" width={200} height={200} />
        </div>
      </div>
    </div>
  )
}

export default Description
