import { projects, services } from '@/lib/data'
import { TProject } from '@/lib/type'
import Image from 'next/image';
import React from 'react'

export default async function page({ params }: { params: Promise<{ id: string }> }) {

    const data: TProject[] = [
        ...projects,
        ...services,
    ]
    const routeParams = await params;
    const project = data.find(item => item.id === routeParams.id);

    return (
        <section className='px-4 lg:max-w-[var(--max-width)] lg:py-24 py-16 lg:px-0 mx-auto'>

            <div className='w-full flex lg:flex-row flex-col gap-12'>
                <section className='lg:w-[400px] w-full flex flex-col gap-8'>
                    <h1 className='text-6xl font-bold capitalize'>{project?.title}</h1>
                    <a href={project?.link} className='bg-white text-black px-4 py-2 rounded-lg w-full text-center hover:bg-stone-200'>View live demo</a>
                    <div className='hidden lg:block'>
                        <h3 className='font-semibold capitalize underline text-xl'>Tech Stack</h3>
                        <ul className='pl-2'>
                            {
                                project?.techStack.map((ts: string, index: number) => <li key={index}>{ts}</li>)
                            }
                        </ul>
                    </div>
                </section>


                <section className='w-full flex flex-col gap-4'>
                    <Image src={project?.image ?? ''} alt="preview" width={700} height={400} />
                    <h3 className='font-semibold capitalize underline text-xl'>Overview</h3>
                    <p className='text-base font-light'>{project?.longDescription}</p>
                </section>
            </div>

        </section>
    )
}