import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id : 0,
        title : "Attendance Card",
        desc : "It is a Html Css & Javascript based card for collect student's attendance.",
        img : "/project-1.jpg",
        tags : ["Html" , "Css" , "Javascript" , "Typescript"],
    },

    {
        id : 1,
        title : "Simple Portfolio",
        desc : "It is a Html & Css based project which is simple portolio.",
        img : "/project-2.jpg",
        tags : ["Html" , "Css" , "Typescript"],
    },

    {
        id : 2,
        title : "Calculator",
        desc : "It is a Html Css & Javascript based project a simple calculator.",
        img : "/project-3.jpg",
        tags : ["Html" , "Css" , "Javascript" , "Next.js"],
    },

    {
        id : 3,
        title : "Static Interactive Resume",
        desc : "It is a Html Css & Typescript based project of resume builder.",
        img : "/project-4.jpg",
        tags : ["Html" , "Css" , "Typescript" ],
    },

    {
        id : 4,
        title : "Landing Page",
        desc : "It is a Html Css & Javascript which is landing page website.",
        img : "/project-5.jpg",
        tags : ["Html" , "Css" , "Javascript"],
    },

    {
        id : 5,
        title : "My Website",
        desc : "It is a Html Css & Javascript based project of my first website.",
        img : "/project-6.jpg",
        tags : ["Html" , "Css" , "Javascript"],
    },
    
];

const Projects = () => {
  return (
    <div  id='projects' className='container pt-35'>
        <Heading title='My Projects' />
        <div className='grid gap-8 xl:gap-0 xl:gap-y-100 md:grid-cols-2 lg:grid-cols-2 place-items-flex'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}

            />))}
        </div>
      
    </div>
  )
}

export default Projects
