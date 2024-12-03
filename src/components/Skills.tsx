import React from 'react'

function Skills() {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 className='text-4xl md:text-5xl'>My Technical Skills</h2>
          <p className='text-yellow-600 pt-2'>
            I am a versatile professional with expertise in graphic design, web development, and programming.Combining creativity with technical skills, I craft visually appealing and user friendly solutions, delivering impactful digital experiences tailored to client needs.
            </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-amber-50 text-3xl sm:text-4xl'>
            <div className='space-y-3'>
              <h2>Html</h2>
              <h2>Css</h2>
              <h2>Javascript</h2>

            </div>
            <div className='space-y-2'>
              <h2>Typescript</h2>
              <h2>Node.js</h2>
              <h2>React.js</h2>

            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
