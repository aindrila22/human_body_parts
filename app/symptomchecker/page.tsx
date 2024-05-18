'use client'

import Dialog from '@/components/Dialog'
import { BodyComponent } from '@darshanpatel2608/human-body-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type BodyPartParams = {
  [key: string]: {
    selected: boolean
    custom?: {
      color: 'default' | 'selected'
    }
  }
}
const initialParams: BodyPartParams = {
  head: { selected: true, custom: { color: 'default' } },
  chest: { selected: true, custom: { color: 'default' } },
  stomach: { selected: true, custom: { color: 'default' } },
  left_shoulder: { selected: true, custom: { color: 'default' } },
  left_arm: { selected: true, custom: { color: 'default' } },
  left_hand: { selected: true, custom: { color: 'default' } },
  right_shoulder: { selected: true, custom: { color: 'default' } },
  right_arm: { selected: true, custom: { color: 'default' } },
  right_hand: { selected: true, custom: { color: 'default' } },
  left_leg_upper: { selected: true, custom: { color: 'default' } },
  left_leg_lower: { selected: true, custom: { color: 'default' } },
  left_foot: { selected: true, custom: { color: 'default' } },
  right_leg_upper: { selected: true, custom: { color: 'default' } },
  right_leg_lower: { selected: true, custom: { color: 'default' } },
  right_foot: { selected: true, custom: { color: 'default' } },
}

const SymptomChecker = () => {
  const [params, setParams] = useState<BodyPartParams>(initialParams)
  const [open, setOpen] = useState(false)
  const handleToggle = () => setOpen((prev) => !prev)
  const [partName, setPartName] = useState('')
  const handlePartClick = (partId: string) => {
    setPartName(partId)
    setOpen(true)
    setParams((prevParams: any) => ({
      ...prevParams,
      [partId]: {
        ...prevParams[partId],
        color: prevParams[partId].color === 'default' ? 'selected' : 'default',
      },
    }))
  }

  const router = useRouter()

  return (
    <main className="md:hidden block">
      <div className="grid grid-cols-6 px-5 w-full place-items-center mx-auto mt-8">
        <div />
        <div className="text-lg text-center w-full col-span-4 text-[#484848] py-3 px-5 font-bold">
          Symptoms Checker
        </div>
        <div onClick={() => router.push('/')}>
          <Image src={'/cross.png'} alt={''} width={19} height={19} />
        </div>
      </div>
      <div className="mt-8 border-b border-[#848484] px-5">
        <div className="grid grid-cols-6 w-full place-items-center mx-auto ">
          <div className="text-[#65B9C6] text-base">Search</div>
          <div className="text-base text-center w-full col-span-4 text-[#484848] py-3 px-5 ">
            Point on the Body
          </div>
          <div />
        </div>
      </div>
      {open && (
        <Dialog onClose={handleToggle}>
          <div className="px-6">
            <p className="font-bold">Hurr you clicked &quot;{partName}&quot;</p>
          </div>
        </Dialog>
      )}

      <BodyComponent
        partsInput={params}
        onClick={handlePartClick}
        mode="missing"
        height="600px"
        width="300px"
      />
    </main>
  )
}

export default SymptomChecker
