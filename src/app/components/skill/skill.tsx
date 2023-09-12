import Image from "next/image"

import "./skill.scss"

interface SkillProps {
    image: string,
    years: string,
    measure: number,
}

export function Skill(props : SkillProps){
    return(
        <div className="experienceLanguage">
            <Image
                src={props.image}
                alt="Skill Logo"
                width={40}
                height={40}
                priority
            />
            <div className="experienceUnit">
                <div className={`experienceMeasure measure-${props.measure}`}>
                    <span>{props.years}</span>
                </div>
            </div>
      </div>
    )
}