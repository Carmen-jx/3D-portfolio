import React from 'react'
import { experiences, skills } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import CTA from '../components/CTA';


const About = () => {
  return (
    <section className='max-container bg-slate-900'>
      <h1 className= "head-text text-slate-100"> 
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">
        Carmen
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-300'>
        <p>
          
Currently enrolled as a second-year student at Seneca College, I am passionately delving into computer programming and analysis. My academic journey began at the University of Waterloo, where I completed a Bachelor of Science degree, majoring in Honors Science and minoring in Biology between 2017 and 2021. My educational trajectory took a turn when I pursued an accelerated nursing program at York University in 2021, but regrettably had to halt due to health concerns. During this interlude, I seized the opportunity to explore programming out of personal interest, eventually committing to it as my full-time pursuit. My diverse academic experiences have equipped me with a multifaceted skill set, blending scientific inquiry, critical analysis, and an understanding of healthcare dynamics, which I believe will significantly enrich my journey as a future software developer.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className="subhead-text text-slate-200">
          My Skills
        </h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map( (skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                src={skill.imageUrl}
                alt={skill.name}
                className= "w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text text-slate-200"> Work Experiences</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-300'>
          <p>
            While my background may not boast the most extensive work experience as a computer software engineer, 
            my diverse professional journey, including roles as a nursing placement student, has equipped me with 
            a unique skill set. These experiences have honed my abilities in teamwork, problem-solving, and effective 
            communication, qualities essential for success in any field. Moreover, my exposure to healthcare environments 
            has instilled a meticulous attention to detail and a dedication to ethical practices. As I transition into a 
            programming career, I bring a holistic perspective and a well-rounded set of skills that I believe will 
            contribute significantly to the dynamic and collaborative nature of the software development landscape.
          </p>
        </div>
        <div className='mt-12 flex bg-slate-500'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img 
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'/>
                  </div>
                  }
                  iconStyle={
                   { background: experience.iconBg}
                  }
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColour: experience.iconBg,
                  boxShadow: 'none',
                }}
                >    
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                    {experience.company_name}

                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      
      <hr className='border-slate-200'/>
      <CTA/>
    </section>
  )
}

export default About