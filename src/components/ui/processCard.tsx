import { TProcessItem } from '@/lib/type'
import React from 'react'

function ProcessCard({ title, duration, description, customList }: TProcessItem) {
    return (
        <div className='border border-border rounded-lg p-8 flex flex-col gap-8 min-w-[460px] bg-[#252527]'>
            <div>
                <h1 className='text-2xl uppercase font-normal'>{title}</h1>
                <span className='font-thin text-sm'>{duration}</span>
            </div>
            <p className='font-normal text-base'>{description}</p>

            <ul className='list-disc text-sm pl-4'>
                {
                    customList.map((item, index) => (
                        <li key={index} className='font-thin'>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProcessCard