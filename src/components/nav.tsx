import { TNavItems } from '@/lib/type';
import Link from 'next/link';
import React from 'react'

function Nav() {

    const routes: TNavItems[] = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Services',
            link: '/services'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Work',
            link: '/work'
        },
    ];

    return (
        <nav className='sticky top-0 flex flex-col items-center justify-between w-full gap-4 p-4 lg:gap-0 lg:flex-row bg-background min-h-[var(--navbar-height)] z-50'>
            <Link href={'/'} className='text-5xl font-bold lg:text-xl'>MAAK CORP</Link>
            <div className='flex gap-4'>
                {routes.map((route, index) => (
                    <Link href={route.link} key={index} className='font-light text-white uppercase'>{route.name}</Link>
                ))}
            </div>
        </nav>
    )
}

export default Nav