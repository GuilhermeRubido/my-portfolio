import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Information() {
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languagesInfo">
          <span>🇧🇷 PT-BR - Native Speaker</span>
          <span>🇺🇸 EN - Fluente</span>
          <span>🇪🇸 ES - Fluente</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educationalInfo">
          <span></span>
          <span>🎓 Programmer graduated from Trybe's Web Development course with a major focus on JavaScript, React, MySQL, TypeScript, HTML and CSS.</span>
        </div>
      </div>
    )
}