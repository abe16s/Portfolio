import Image from 'next/image';
import { HoverEffect } from './card-hover-component';

const Projects = () => {
  const projects = [
    { title: 'Local Idir Managing App', image: '/Idir.png', description: 'Idir managing application that helps facilitate the management of Idir members, monthly payments and other financial workings of Idir - Desktop App (Java Swing)', link: 'https://github.com/abe16s/IDIR' },
    { title: 'SkillTrade Web', image: '/SkillTradeWeb.png', description: 'A hub that is used to connect skilled technicians with customers easily - Web App', link: 'https://github.com/abe16s/SkillTrade' },
    { title: 'SkillTrade Mobile', image: '/SkillTradeMobile.jpg', description: 'A hub that is used to connect skilled technicians with customers easily - Mobile App (Flutter)', link: 'https://github.com/bexeGrace/flutter-2024-proj-SkillTrade-Bloc' },
    { title: 'User portal for insurance companies', image: '/Insurance.png', description: 'A portal that helps insurance customers manage their insurance easily from anywhere and reduces their physical visits to branches by 50% - Web App (Next.js)', link: 'https://github.com/Tamiru-Alemnew/insurance-company-system/tree/main/insurance' },
    { title: 'Task Manager API', image: 'https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg', description: 'A full back-end API project using golang and gin', link: 'https://github.com/abe16s/Task-Manager-API-Final' },
  ];

  return (
    <>
        <h2 className="text-lg md:text-4xl mt-24 mb-8 max-w-4xl font-extrabold ml-36 border-b-blue-400 border-b-2">
            Projects
        </h2>
        <HoverEffect 
            items={projects}
            className='w-3/4 mx-auto'
        />
    </>
  );
};

export default Projects;
