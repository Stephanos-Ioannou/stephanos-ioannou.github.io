import createColoredSvgUrl from "../utils/coloredSvg";
import {
    siReact, siJavascript, siHtml5, siCss3, siGithub, siSalesforce,
    siNextdotjs, siWebstorm, siPython, siCsharp, siDotnet, siBitbucket
} from 'simple-icons';
import { ArrowUpOutlined } from "@ant-design/icons";

const jobData = [
    {
        period: "2024 — Present",
        position: "Junior Software Developer",
        company: "Nextue",
        description: "Further developed a tailored Salesforce application for an insurance company, optimizing their workflow and data management processes. Successfully integrated various features to meet the specific needs of the insurance sector, enhancing efficiency and user experience.",
        technologies:
            [{ icon: siSalesforce, color: '#00A1E0', name: 'Salesforce' },
            { icon: siJavascript, color: '#F7DF1E', name: 'JavaScript' },
            { icon: siWebstorm, color: '#00C4FF', name: 'WebStorm' },
            { icon: siHtml5, color: '#E34F26', name: 'HTML5' },
            { icon: siBitbucket, color: '#0052CC', name: 'BitBucket' }],
        link: "https://www.linkedin.com/company/nextue/?originalSubdomain=nl"
    },
    {
        period: "2023 — 2024",
        position: "Full Stack Intership",
        company: "Lizard Global",
        description: "Developed key features for the staff management application, Aposto, and Lizard Global’s personal website within an agile environment using JavaScript and React. Successfully integrated the website with the sales environment to streamline lead management. Produced a comprehensive data consistency report to guide Aposto’s migration from Firebase to a microservice architecture, recommending optimal solutions for maintaining data integrity.",
        technologies:
            [{ icon: siReact, color: '#61DAFB', name: 'React' },
            { icon: siNextdotjs, color: '#ffffff', name: 'Next.js' },
            { icon: siJavascript, color: '#F7DF1E', name: 'JavaScript' },
            { icon: siGithub, color: '#ffffff', name: 'GitHub' },
            { icon: siCss3, color: '#1572B6', name: 'CSS3' },
            ],
        link: "https://www.lizard.global/nl"
    },
    {
        period: "2022 — 2023",
        position: "Peercoach",
        company: "Hogeschool Rotterdam",
        description: "Assisted first-year students in their studies during my second year in the Computer Science program. Actively answered their questions in class and provided extra presentations to explain complex topics more clearly. Working closely with professors, I ensured that the students received the necessary support to thrive in their coursework. ",
        technologies:
            [{ icon: siCsharp, color: '#512BD4', name: 'C#' },
            { icon: siPython, color: '#3776AB', name: 'Python' },
            { icon: siDotnet, color: '#512BD4', name: '.NET' },
            ],
        link: "https://www.hogeschoolrotterdam.nl"
    }
];

// TODO add differentation for important words to pop out
const ExperienceSection = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold pt-6">My Experience</h1>
                <div className="line">
                    <div className="circle"></div>
                </div>
            </div>
            <div className="mt-6 flex flex-row">
                <div className="flex flex-col justify-center gap-4 w-47.5 italic fixed overflow-y-hidden text-sm">
                    <p>Computers have been a natural interest for me as far back as I can remember. I still think fondly of the first time i got invested into coding in high school when I was tasked with creating a 2D platformer. The project was so engaging that I found myself working on it long after school hours, enjoying the freedom in creating the game towards my vision.</p>
                    <p>My Bachelor in informatica exposed me to a wide range of technologies and concepts. I developed a solid foundation in C# and worked on several six-month-long projects, often serving as the Scrum Master or project leader. I got introduced to databases, web development, and other topics such as security, software design, and operating systems.</p>
                    <p>When I'm not programming, i'm usually playing piano/trumpet at the local jamsession or working out at the gym.</p>
                    <p>-Stephanos</p>
                </div>

                <div className="JobEntryContainer flex flex-col gap-4 w-3/5 overflow-y-auto h-screen hide-scrollbar" style={{ marginLeft: '50%' }}>
                    {jobData.map((job, index) => (
                        <JobEntry
                            key={index}
                            period={job.period}
                            position={job.position}
                            company={job.company}
                            description={job.description}
                            technologies={job.technologies}
                            link={job.link}
                        />
                    ))}
                    <div className="pl-8 text-sm inline-block">
                        <a href="/Stephanos Ioannou CV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                            <p className="mr-2">View Full Resume</p>
                            <ArrowUpOutlined className="transform rotate-45 transition-transform group-hover:-translate-y-1.5 group-hover:translate-x-1.5" />
                        </a>
                    </div>

                </div>
            </div>
        </div>

    );
};

const JobEntry = ({ period, position, company, link, description, technologies }) => {
    return (
        <a href={link} target="_blank" className="job-entry text-white group">
            <div className="flex flex-row m-4">
                <div className="w-1/4 flex justify-center">
                    <h2 className="text-xs font-medium mt-1">{period}</h2>
                </div>
                <div className="flex flex-col w-3/4 gap-4">
                    <h3 className="text-l font-bold">{position} · {company}  <ArrowUpOutlined className="pl-1 transform rotate-45 transition-transform group-hover:-translate-y-1.5 group-hover:translate-x-1.5" />
                    </h3>
                    <p className="text-sm">{description}</p>
                    <MiniTechnologyLogoList technologies={technologies} />
                </div>
            </div>
        </a>
    );
};

const MiniTechnologyLogoList = ({ technologies }) => {
    return (
        <div className="flex flex-wrap gap-7 flex-row mb-1">
            {technologies.map((tech) => (
                <img
                    key={tech.name}
                    className="mini-techIcon"
                    src={createColoredSvgUrl(tech.icon, tech.color)}
                    alt={`${tech.name} Logo`}
                />
            ))}
        </div>
    );
};

export default ExperienceSection;
