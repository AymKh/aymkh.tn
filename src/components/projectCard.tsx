import { TProject } from '@/lib/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectCard({ project }: { project: TProject }) {
    return (
        <div className="flex flex-col  gap-12 bg-[#181A1B] text-white rounded-xl w-full">
            <Image src={project.image} alt="placeholder" width={300} height={300} className='block w-full mx-auto rounded-xl' />

            <div className='flex flex-col gap-12 p-12'>
                <h1 className='text-2xl font-normal uppercase lg:text-5xl'>{project.title}</h1>
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
        </div>
    )
}