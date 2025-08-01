import React from 'react'

function SectionTitle({ title, subTitle }: { title: string, subTitle?: string }) {
    return (
        <div>
            <p className="text-sm uppercase tracking-wide mb-2">{subTitle}</p>
            <h1 className="text-6xl font-bold  uppercase">{title}</h1>
        </div>
    )
}

export default SectionTitle