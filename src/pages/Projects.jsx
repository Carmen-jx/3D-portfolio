import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const Projects = () => {
  return (
    <section className='max-container bg-slate-900'>
    <h1 className= "head-text text-slate-200">
      My <span className="blue-gradient_text font-semibold drop-shadow">
      Projects
      </span>
    </h1>

    <div className='mt-5 flex flex-col gap-3 text-slate-300'>
      <p>
        tbd
      </p>
    </div>

    <div className='flex flex-wrap my-20 gap-16'>
      {projects.map((project) => (
        <div className='lg:w-[400px] w-full text-slate-200' key={project.name}>
          <div className='block-container w-12 h-12'> 
            <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                src ={project.iconUrl}
                alt="threads"
                className='w-1/2 h-1/2 object-contain'/>
              </div>
          </div>

          <div className='mt-5 flex flex-col'>
            <h4 className='text-2xl font-poppins font-semibold'>
              {project.name}
            </h4>
            <p className='mt-2 text-slate-500'>
              {project.description}
            </p>
            <div className='mt-5 flex items-center gap-2 font-poppin'>
              <Link
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className='font-semibold text-slate-200'
              >
                Live Link
              </Link>
              <img
                src={arrow}
                alt="arrow"
                className='w-4 h-4 object-contain'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Projects