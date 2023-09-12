import Image from 'next/image'
import "./header.scss"

export function Header() {
    return (
        <div className="header">
          <div>
            <h1> Hi, I'm Guilherme! 👋</h1>
            <h2>Software Engineer</h2>
          </div>
            <Image
                src="/me.jpeg"
                alt="Vercel Logo"
                width={325}
                height={310}
                priority
              />
        </div>
    )
}