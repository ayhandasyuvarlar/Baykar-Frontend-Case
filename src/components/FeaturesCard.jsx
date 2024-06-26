/* eslint-disable no-unused-vars */
import React from 'react'

// eslint-disable-next-line react/prop-types
const FeaturesCard = ({title , subTitle ,icon , bgIcon , children}) => {
  return (
    <div className="w-full  lg:w-[374px] h-[205px] flex flex-col justify-around items-center lg:items-start">
        <div className='relative'>
            <img src={bgIcon} alt="" className="object-cover absolute left-7" />
            <img src={icon} alt="" className="  object-cover" />
        </div>
        <div className='flex flex-col justify-center items-center lg:items-start'>
            <h1 className="text-[20px] font-medium  leading-[22px]">
                {title}
            </h1>
           {children}
        </div>
    </div>
  )
}

export default FeaturesCard