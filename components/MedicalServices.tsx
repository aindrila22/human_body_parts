import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const data = [
  {
    id: 1,
    src: '/1.png',
    title: 'Symptom Checker',
    href: '/symptomchecker',
  },
  {
    id: 2,
    src: '/3.png',
    title: 'Telehealth',
    href: '#',
  },
  {
    id: 3,
    src: '/service.jpeg',
    title: 'Facility Search And Booking',
    href: '#',
  },
  {
    id: 4,
    src: '/delivery.png',
    title: 'Medicine Delivery',
    href: '#',
  },
]

const MedicalServices = () => {
  return (
    <div className="pb-5">
      <div className="text-xl text-[#484848] py-6 px-5 font-bold">
        Medical Services
      </div>
      <div className="grid grid-cols-2 w-full gap-3 mx-auto place-items-center px-5">
        {data.map((ele, idx) => {
          return (
            <Link
              href={ele.href}
              className="bg-[#E0F1F4] rounded-lg px-4 py-3 grid place-items-center mx-auto w-full h-36"
              key={idx}
            >
              <Image
                src={ele.src}
                alt={''}
                width={70}
                height={70}
                className={`${idx === 2 && 'w-full h-full'}`}
              />
              <div className="text-xs font-bold text-center">{ele.title}</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default MedicalServices
