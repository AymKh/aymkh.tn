'use client'
import SectionTitle from '@/components/ui/sectionTitle'
import PhotoCollage from '@/components/ui/photoCollage'
import React from 'react'

function page() {

  const milestones = [
    {
      title: "MOS CHAMPIONSHIP 2019",
      date: "JUN 17, 2019",
      description: [
        "Competed in the Microsoft Office Specialist National Championship on June 17, 2019, at SmartFuture's headquarters in Tunis.",
        "Achieved a perfect score in just 9 minutes, securing first place nationally and earning qualification to represent Tunisia at the world championship finals.",
        "This achievement demonstrated exceptional proficiency in Microsoft Office applications and problem-solving under pressure.",
      ],
      images: [
        {
          source: "/assets/mos/01/mos2019-1.png",
        },
        {
          source: "/assets/mos/01/mos2019-2.png",
        },
        {
          source: "/assets/mos/01/mos2019-3.png",
        },
      ],
    },
    {
      title: "Recognition by the Minister of Education",
      date: "JUN 28, 2019",
      description: [
        "Following my national championship win, I was honored to meet Slim Khalbous, Tunisia's Minister of Higher Education and Scientific Research, on June 28, 2019.",
        "This recognition highlighted the significance of academic excellence and technical proficiency in advancing Tunisia's educational initiatives.",
        "The meeting was part of a ceremony celebrating outstanding student achievements in technology and innovation.",
      ],
      images: [
        {
          source: "/assets/mos/02/mos-1.png",
        },
        {
          source: "/assets/mos/02/mos-2.png",
        },
        {
          source: "/assets/mos/02/mos-3.png",
        },
        {
          source: "/assets/mos/02/mos-4.png",
        },
      ],
    },
    {
      title: "MOS World Championship Finals in New York",
      date: "JUL 9, 2019",
      description: [
        "Represented Tunisia at the Microsoft Office Specialist World Championship in New York City, competing against the top student champions from over 100 countries.",
        "This international experience provided invaluable exposure to global standards of technical excellence and connected me with talented peers from around the world.",
        "The journey reinforced my commitment to continuous learning and excellence in technology.",
      ],
      images: [
        {
          source: "/assets/mos/03/mos-1.png",
        },
      ],
    },
  ];

  return (
    <div className="px-4 max-w-[var(--max-width)] flex flex-col gap-24 items-start lg:py-24 py-16 lg:px-0 mx-auto">
      <SectionTitle title='I did what?' subTitle="Milestones" />

      {
        milestones.map((milestone, index) => (
          <div key={index} className="border-t border-border py-12 w-full">
            <span>{milestone.date}</span>
            <h2 className="text-4xl font-bold mb-10">{milestone.title}</h2>
            <div className='grid lg:grid-cols-2 gap-8'>
              <div className='w-full flex flex-col gap-4'>
                {milestone.description.map((text: string, index: number) => (
                  <p key={index} >{text}</p>
                ))}
              </div>
              <div className='w-full'>
                <PhotoCollage images={milestone.images} />
              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default page