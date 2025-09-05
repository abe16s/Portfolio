import React from 'react'

const About = () => {
  return (
    <div id='about' className='h-[75vh] flex justify-center flex-col px-8 md:px-32 gap-5'>
        <h2 className='text-4xl font-extrabold'>About</h2> 
        <div className='flex gap-2'>
            <div className="flex-grow border-t-2 bg-white border-blue-500 w-2/12 h-fit mt-3"></div>
            <p className='md:text-lg'>
                Efficiency and scalability-driven software engineer with over two years of hands-on experience building applications, ranging from personal projects to large-scale government systems serving high volumes of users. 
                Currently a 5<sup>th</sup> year <span className='text-blue-500 font-bold'>Software Engineering</span> student at Addis Ababa University. 
                A <span className='text-blue-500 font-bold'>competitive programmer</span> with a good understanding of data structures and algorithms. 
                Focusing on learning and striving to cope up with the fast growing tech sector.
            </p>
        </div>
    </div>
  )
}

export default About