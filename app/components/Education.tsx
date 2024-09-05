import React from 'react'
import { Timeline } from './timeline'
import Image from 'next/image'

const Education = () => {
    const data = [
        {
            title: "Software Engineering (BSc.)",
            time: "Mar 2022 - 2026 (expected)",
            content: (
              <div className='flex gap-5 items-start h-[20vh] justify-end'>
                <Image
                    src={"/AAU.png"}
                    alt="Addis Ababa University logo"
                    width={50}
                    height={50}
                    className='w-1/12'
                />
                <p className="text-neutral-200 w-4/5 block">
                    Currently studying Software Engineering at <a href="https://www.aau.edu.et/" target='_blank' className='font-semibold text-blue-500 hover:text-blue-400'>Addis Ababa University</a>. 
                    A 4<sup>th</sup> year student expecting to graduate in 2026. 
                    Having an impressive CGPA of 3.97 out of 4.0.
                </p>
              </div>
            ),
          },
          {
            title: "Competitive Programming & Coding Bootcamp",
            time: "Nov 2023 - Present",
            content: (
              <div className='flex gap-5 items-start h-[20vh] justify-end'>
                <Image
                    src="/A2SV.svg"
                    alt="A2SV logo"
                    width={100}
                    height={100}
                    // className='w-1/5'
                />
                <p className="text-neutral-200 w-4/5 block">
                    Currently attending <a href='https://a2sv.org/' target='_blank' className='font-semibold text-blue-500 hover:text-blue-400'>Africa to Silicon Valley</a> (A2SV), a Google-backed competitive tech academy that has enabled 60+ students to secure internships and full-time positions in top tech companies.
                    Completed over <span className='font-bold'>2000 hours</span> of training in data structures and algorithms and solved more than <span className='font-bold'>1000 problems</span> on LeetCode and Codeforces.
                    Learning and working on different software development skills and projects.
                </p>
              </div>
            ),
          },
    ]
  return (
    <div className="w-full fade-out-top mb-8">
      <Timeline data={data} />
    </div>
  )
}

export default Education