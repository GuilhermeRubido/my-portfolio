import { Header } from "./components/header/header";
import { Experience } from "./components/experience/experience";
import { Information } from "./components/information/information";
import { EmailIcon } from "./components/icons/email-icon";
import { SocialBtns } from "./components/social-btns/social-btns";

import "../styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      <Information/>
        <div className="buttons">
          <SocialBtns/>
          <a className="primaryBtn" href="mailto:rubidoguilherme@gmail.com"> 
          Contact me! 
          <EmailIcon/>
          </a>
        </div>
    </main>
  )
}
