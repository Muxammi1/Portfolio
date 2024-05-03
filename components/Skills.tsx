import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className='heading'>Education & <span className='text-[#008080]'>Skills</span></h1>
        <div className='w-[80%] mx-auto pt-[4rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
          <div>
            <SkillsItem title="React Dev" year="2023 - 2024"/>
            <SkillsItem title="Next Dev" year="2023 - 2024"/>
            <SkillsLanguage Skill1="html" Skill2="css" Skill3="javascript" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]"/>
          </div>
          <div>
            <SkillsItem title="Next Js Dev" year="2024 - 2025"/>
            <SkillsItem title="Node Js Dev" year="2024 - 2025"/>
            <SkillsLanguage Skill1="React Js" Skill2="Next Js" Skill3="Typescript" level1="w-[81%]" level2="w-[78%]" level3="w-[60%]"/>
          </div>
        </div>
    </div>
  )
}

export default Skills