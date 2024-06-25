import React from 'react'
import { images } from '../../services/config/images'

export default function SlantedContainer({ firstHeading, secondHeading, description, img }) {
    return (
        <div
            className="mt-[200px] custom-height text-white w-[300px]  border-l-[1px] border-r-[1px] border-b-[1px]  rounded-bl-3xl rounded-br-3xl border-[#b6b6bd] backdrop-blur-[7.5px] "
        >
            <div className=' right-[0.4%] max-w-[120%] relative bottom-[106px]'>

                <img src={images.transparentContainerTop} className='absolute w-[100.8%] max-w-[120%] ' />
                <div className="px-7  relative top-[50px]">
                    {img ?
                        <div className='w-auto pb-7 mb-7   border-b-[1px] border-[#b6b6bd]'>
                            <img src={img} className='w-[40%]' />
                        </div>
                        :
                        <div className='ClashDisplay text-5xl font-bold w-auto pb-7 mb-7   border-b-[1px] border-[#b6b6bd]'>
                            {firstHeading}
                        </div>
                    }
                    <div className='ClashDisplay text-xl mb-7'>
                        {secondHeading}
                    </div>
                    <div className='ClashDisplay text-l'>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}
