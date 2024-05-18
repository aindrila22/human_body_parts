import Image from 'next/image'
import React from 'react'

const Dialog = ({ onClose, children }: any) => {
  console.log(children)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-black bg-opacity-50">
      <div className="bg-white rounded-lg pt-3 shadow-lg">
        <div className="border-b border-gray-400 py-5">{children}</div>
        <div onClick={onClose} className="text-center py-4 text-[#007AFF]">
          Ok
        </div>
      </div>
    </div>
  )
}

export default Dialog
