import { TProject } from '@/lib/type'
import Link from 'next/link'
import React from 'react'

export default function useCaseCard({ project }: { project: TProject }) {
    return (
        <div className='flex flex-col gap-4 bg-[#181A1B] text-white p-12 rounded-xl w-full'>
            <h1 className='text-2xl font-bold capitalize lg:text-5xl'>{project.title}</h1>
            {project.client && <h3 className='text-xl font-semibold'>For {project.client}</h3>}
            <p className='text-base font-light'>{project.description}</p>
            <div className='flex flex-col gap-1'>
                <div className='flex flex-wrap gap-1'>
                    {
                        project.tags.map((tag: string, index: number) => (
                            <span key={index} className='bg-[#414042] text-white opacity-70 px-2 py-1 rounded-lg'>#{tag}</span>
                        ))
                    }
                </div>
                <div className='flex flex-wrap gap-1'>
                    {
                        project.techStack.map((tech: string, index: number) => (
                            <span key={index} className='bg-[#414042] text-white opacity-70 px-2 py-1 rounded-lg'>#{tech}</span>
                        ))
                    }
                </div>
            </div>
            {
                project.link &&
                <Link href={'work/' + project.id} className='w-full px-4 py-2 text-center text-black bg-white rounded-lg lg:w-fit hover:bg-stone-200'>Read more</Link>
            }
        </div>
    )
}