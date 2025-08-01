import Link from 'next/link'
import React from 'react'

function HeroSection() {
    return (
        <section className='flex flex-col justify-between px-4 h-sahredSection'>
            <div className='flex flex-col justify-center w-full lg:h-[800px] h-screen'>
                <p className='lg:font-medium leading-tight tracking-normal uppercase lg:text-[110px] text-3xl lg:text-left text-center decoration-solid text-[#E8E6E3]'>
                    👋 I'm <a href="https://app.diligentspace.com/profiles/freelancers/659d351039659a24404590a2" target='_blank' className='font-semibold text-white'>aymen khedhriya</a>
                    <br />
                    software developer
                    <br />
                    & founder of MAAK corp
                </p>
            </div>

            <div className='hidden lg:flex flex-col items-start gap-4 lg:justify-between lg:gap-0 lg:flex-row text-xl font-thin`'>
                <p>
                    Based in <a href="https://en.wikipedia.org/wiki/Tunisia" target='_blank' className='font-semibold text-white'>TUNISIA</a>
                    <br />
                    and working worldwide
                </p>
                <p className='lg:text-right lg:max-w-[600px]'>
                    SAAS products for small and medium sized businesses.
                    <br />
                    Project management and Consulting <Link href={'/services'} className='font-bold underline'>services</Link>.
                </p>
            </div>
        </section>
    )
}

export default HeroSection