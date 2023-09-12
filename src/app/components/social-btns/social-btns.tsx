import { GithubIcon } from "../icons/github-icon"
import { InstaIcon } from "../icons/insta-icon"
import { LinkedinIcon } from "../icons/linkedin-icon"
import { TwitterIcon } from "../icons/twitter-icon"

import "./social-btns.scss"

interface SocialBtnsProps {

}

export function SocialBtns(props : SocialBtnsProps) {
   return (
    <div className="social">
        <a href="https://www.instagram.com/guilherme.rubido/?next=%2F">
            <InstaIcon/>
        </a>
            
        <a href="https://www.linkedin.com/in/guilherme-rubido-954ba8231">
            <LinkedinIcon/>
        </a>
            
        <a href="https://github.com/GuilhermeRubido">
            <GithubIcon/>
        </a>
            
        <a href="https://twitter.com/guilhermerubid0">
            <TwitterIcon/>
        </a>
    </div>
   ) 
}