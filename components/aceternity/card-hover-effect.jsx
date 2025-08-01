"use client";
import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-6xl mx-auto px-8 mb-30">
            <HoverEffect items={skills} />
        </div>
    );
}

export const skills = [
    { title: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" /> },
    { title: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" /> },
    { title: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /> },
    { title: "Python", link: "https://www.python.org/", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" /> },
    { title: "React.js", link: "https://react.dev/", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" /> },
    { title: "Next.js", link: "https://nextjs.org/", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" style={{ filter: "invert(1)" }} /> },
    { title: "Node.js", link: "https://nodejs.org/", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /> },
    { title: "Express.js", link: "https://expressjs.com/", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" style={{ filter: "invert(1)" }}/> },
    { title: "Tailwind CSS", link: "https://tailwindcss.com/", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" /> },
    { title: "Flask", link: "https://flask.palletsprojects.com/", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" style={{ filter: "invert(1)" }}/> },
    { title: "Git", link: "https://git-scm.com/", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" /> },
    { title: "GitHub", link: "https://github.com/", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{ filter: "invert(1)" }}/> },
    { title: "Docker", link: "https://www.docker.com/", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" /> },
    { title: "MongoDB", link: "https://www.mongodb.com/", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" /> },
    { title: "AWS", link: "https://aws.amazon.com/", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" /> },
];