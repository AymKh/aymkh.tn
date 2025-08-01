import { TStatsCard } from '@/lib/type'
import React from 'react'

function NumberCard({ label, description }: TStatsCard) {
    return (
        <div className='flex flex-col items-center justify-center text-xl font-medium'>
            <h2 className='text-8xl font-normal'>{label}</h2>
            <p>{description}</p>
        </div>
    )
}

export default NumberCard