import Image from 'next/image';
import { HoverEffect } from './card-hover-component';

const Projects = () => {
  const projects = [
    { title: 'Local Idir Managing App', image: '/Idir.png', description: 'Idir managing application that helps facilitate the management of Idir members, monthly payments and other financial workings of Idir - Desktop App (Java Swing)', link: 'https://github.com/abe16s/IDIR' },
    { title: 'SkillTrade Web', image: '/SkillTradeWeb.png', description: 'A hub that is used to connect skilled technicians with customers easily - Web App', link: 'https://github.com/abe16s/SkillTrade' },
    { title: 'SkillTrade Mobile', image: '/SkillTradeMobile.jpg', description: 'A hub that is used to connect skilled technicians with customers easily - Mobile App (Flutter)', link: 'https://github.com/bexeGrace/flutter-2024-proj-SkillTrade-Bloc' },
    { title: 'User portal for insurance companies', image: '/Insurance.png', description: 'A portal that helps insurance customers manage their insurance easily from anywhere - Web App (Next.js)', link: 'https://github.com/Tamiru-Alemnew/insurance-company-system/tree/main/insurance' },
    { title: 'Task Manager API', image: 'https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg', description: 'A back-end API project using golang and gin, with full CRUD operations, database integration and authentication & authorization', link: 'https://github.com/abe16s/Task-Manager-API-Final' },
  ];

  return (
    <section id='projects'>
        <h2 className="md:text-4xl text-2xl md:mt-24 max-w-4xl font-extrabold lg:ml-36 md:mx-10 mx-4 my-8 border-b-blue-500 border-b-2">
            Projects
        </h2>
        <HoverEffect 
            items={projects}
            className='w-11/12 mx-auto'
        />
    </section>
  );
};

export default Projects;
