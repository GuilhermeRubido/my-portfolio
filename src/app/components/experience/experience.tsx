/* eslint-disable react/no-unescaped-entities */
import { SectionTitle } from "../sectionTitle/section-title";

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience() {
    return(
        <div className="experience">
          <SectionTitle text="About me:"/>
          <p>I was born and live in Santos, SP, Brazil. I started studying programming in 2022, when I joined Trybe's Web Development course, a one-year course with four modules: Fundamentals, Front-End, Back-End and Computer Science. I've been studying programming ever since and trying to develop in new technologies in the field.</p>
          <div className="experienceTime">
           <Skill image="/js 2.png" measure={1} years="1 years"/>
           <Skill image="/ts 2.png" measure={1} years="1 years"/>
           <Skill image="/js 2.png" measure={1} years="1 years"/>
           <Skill image="/java 2.png" measure={0} years="0 years"/>
          </div>
        </div>
  )
}