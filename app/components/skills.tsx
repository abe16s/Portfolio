import React from 'react'
import Image from 'next/image'
import styles from "../styles/skills.module.css"

const Skills = () => {

    const skillsRow1 = (
        <div className='flex md:animate-loop-scroll-left group-hover:paused justify-around w-full flex-shrink-0 flex-wrap md:flex-nowrap'>
            <Image src="https://www.logo.wine/a/logo/Python_(programming_language)/Python_(programming_language)-Logo.wine.svg" alt='Python' width={170} height={70} className='w-20 h-12 md:w-44 md:h-20'/>
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt='JavaScript' width={70} height={70} className='w-10 md:w-20' />
            <Image src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt='TypeScript' width={70} height={70} className='w-10 md:w-20' />
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt='Java' width={70} height={70} className='w-12 md:w-20' />
            <Image src="https://dart.dev/assets/img/logo/logo-white-text.svg" alt='Dart' width={170} height={70} className='w-20 h-12 md:w-44 md:h-20' />
            <Image src="https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg" alt='Go' width={120} height={70} className='w-16 h-12 md:w-28 md:h-20' />
        </div>
    )

    const skillsRow2 = (
        <div className='flex md:animate-loop-scroll-right group-hover:paused justify-around w-full flex-shrink-0 flex-wrap md:flex-nowrap'>
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt='HTML' width={70} height={70} className='w-12 md:w-20' />
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt='CSS' width={70} height={70} className='w-12 md:w-20' />
            <Image src="https://storage.googleapis.com/cms-storage-bucket/1870bdaf4a9523a10d5b.svg" alt='Flutter' width={170} height={70}  className='w-20 h-12 md:w-44 md:h-20'/>
            <Image src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt='Tailwind CSS' width={70} height={70} className='w-12 md:w-20' />
            <Image src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" alt='NestJS' width={70} height={70} className='w-12 md:w-20' />
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt='React' width={70} height={70} className='w-12 md:w-20' />
            <Image src="/nextjs.png" alt='Next.js' width={150} height={70} className='w-20 h-12 md:w-36 md:h-20' />
        </div>
    )

    const skillsRow3 = (
        <div className='flex md:animate-loop-scroll-left group-hover:paused justify-around w-full flex-shrink-0 flex-wrap md:flex-nowrap'>
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt='MySQL' width={100} height={100} className='w-14 md:w-24' />
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt='MongoDB' width={70} height={70} className='w-12 md:w-20' />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/6/62/Git-logo-orange.svg" alt='Git' width={100} height={100} className='w-14 md:w-24' />
            <Image src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt='Postman' width={70} height={70} className='w-10 md:w-20' />
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt='Docker' width={70} height={70} className='w-12 md:w-20' />
            <Image src="https://jupyter.org/assets/homepage/main-logo.svg" alt='Jupyter Notebook' width={70} height={70} className='w-12 md:w-20'/>
        </div>
    )
  return (
    <>
        <h2 className="md:text-4xl text-2xl md:mt-24 max-w-4xl font-extrabold lg:ml-36 md:mx-10 mx-4 my-8 border-b-blue-500 border-b-2">
            Skills & Technologies
        </h2>
        <div className={`hidden md:flex overflow-hidden m-auto flex-col gap-12 group text-white py-8 ${styles.logos}`}>
            <div className='w-full flex group:hover'>
                {skillsRow1}
                {skillsRow1}
            </div>
            <div className='w-full flex group:hover'>
                {skillsRow2}
                {skillsRow2}
            </div>
            <div className='w-full flex group:hover'>
                {skillsRow3}
                {skillsRow3}
            </div>
        </div>

        {/* Mobile View */}
        <div className={`md:hidden flex overflow-hidden m-auto flex-wrap group text-white py-8 ${styles.logos}`}>
            {skillsRow1}
            {skillsRow2}
            {skillsRow3}
        </div>
    </>
  )
}

export default Skills