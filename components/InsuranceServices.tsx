import Image from 'next/image'
import React from 'react'

const InsuranceServices = () => {
  return (
    <div className="pb-20">
      <div className="text-xl text-[#484848] py-3 px-5 font-bold">
        Insurance Services
      </div>
      <div className="grid grid-cols-1 w-full gap-3 mx-auto place-items-center px-5">
        {[1, 2, 3, 4].map((idx) => {
          return (
            <div
              className="bg-[#E0F1F4] rounded-lg flex justify-between mx-auto w-full h-[68px]"
              key={idx}
            >
              <div className="flex justify-center items-start w-10/12 px-6 gap-3 py-4">
                <Image src={'/security.png'} alt={''} width={38} height={38} />
                <div className="text-[11px] text-left w-full">
                  <div className="font-semibold">Insurance Coverage</div>
                  <div>Check your benefits and coverage</div>
                </div>
              </div>
              <div className="w-2/12 justify-end flex items-start p-1">
                <Image src={'/lock.png'} alt={''} width={8} height={8} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InsuranceServices
