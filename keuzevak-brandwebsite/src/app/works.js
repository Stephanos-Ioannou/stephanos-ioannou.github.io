import createColoredSvgUrl from "@/utils/coloredSvg";
import {
    siReact, siJavascript, siCss3, siHtml5,
    siNodedotjs, siNpm, siGithub, siCsharp, siDotnet,
    siTypescript, siPostgresql, siSalesforce, siNextdotjs, siVisualstudiocode, siWebstorm
} from 'simple-icons';

const jobData = [
    {
        period: "2024 — Present",
        position: "Junior Software Developer",
        company: "Nextue",
        description: "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
        technologies:
            [{ icon: siSalesforce, color: '#00A1E0', name: 'Salesforce' },
            { icon: siJavascript, color: '#F7DF1E', name: 'JavaScript' },
            { icon: siHtml5, color: '#E34F26', name: 'HTML5' },
            { icon: siWebstorm, color: '#00C4FF', name: 'WebStorm' }],
        link: "https://www.linkedin.com/company/nextue/?originalSubdomain=nl"
    },
    {
        period: "2023 — 2024",
        position: "Full Stack Intership",
        company: "Lizard Global",
        description: "Developed and maintained full-stack solutions for a staff-management platform. Worked with modern frameworks and technologies to deliver high-performance applications.",
        technologies:
            [{ icon: siReact, color: '#61DAFB', name: 'React' },
            { icon: siJavascript, color: '#F7DF1E', name: 'JavaScript' },
            { icon: siNextdotjs, color: '#ffffff', name: 'Next.js' },
            { icon: siNodedotjs, color: '#339933', name: 'Node.js' },
            { icon: siGithub, color: '#ffffff', name: 'GitHub' }
            ],
        link: "https://www.lizard.global/nl"
    }, {
        period: "2024 — Present",
        position: "Junior Software Developer",
        company: "Nextue",
        description: "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
        technologies:
            [{ icon: siSalesforce, color: '#00A1E0', name: 'Salesforce' },
            { icon: siJavascript, color: '#F7DF1E', name: 'JavaScript' },
            { icon: siHtml5, color: '#E34F26', name: 'HTML5' },
            { icon: siWebstorm, color: '#00C4FF', name: 'WebStorm' }],
        link: "https://www.linkedin.com/company/nextue/?originalSubdomain=nl"
    },
    {
        period: "2023 — 2024",
        position: "Full Stack Intership",
        company: "Lizard Global",
        description: "Developed and maintained full-stack solutions for a staff-management platform. Worked with modern frameworks and technologies to deliver high-performance applications.",
        technologies:
            [{ icon: siReact, color: '#61DAFB', name: 'React' },
            { icon: siJavascript, color: '#F7DF1E', name: 'JavaScript' },
            { icon: siNextdotjs, color: '#ffffff', name: 'Next.js' },
            { icon: siNodedotjs, color: '#339933', name: 'Node.js' },
            { icon: siGithub, color: '#ffffff', name: 'GitHub' }
            ],
        link: "https://www.lizard.global/nl"
    },

];

const JobEntry = ({ period, position, company, link, description, technologies }) => {
    return (
        <a href={link} target="_blank" className="job-entry text-white shadow-md flex flex-row pt-4">
            <div className="w-1/4 flex justify-center mt-0.5">
                <h2 className="text-sm font-medium">{period}</h2>
            </div>
            <div className="flex flex-col w-3/4 gap-3">
                <h3 className="text-l font-bold">{position} · {company}</h3>
                <p className="text-medium">{description}</p>
                <MiniTechnologyLogoList technologies={technologies} />
            </div>
        </a>
    );
};


const MiniTechnologyLogoList = ({ technologies }) => {
    return (
        <div className="mini-logo-list">
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

// TODO add differentation for important words to pop out
const WorksSection = () => {
    return (
        <div>
            <div>
                <h1 class="text-2xl font-bold pt-10">My Experience</h1>
            </div>
            <div className="mt-10">
                <div className="backstory font fixed overflow-y-hidden flex flex-col">
                    <p>Computers have been a natural interest for me as far back as I can remember. I still think fondly of the first time i got invested into coding in high school when I was tasked with creating a 2D platformer. The project was so engaging that I found myself working on it long after school hours, fully immersed in the challenges and joys of development. I then pursued a Bachelor's in Informatica at the Hogeschool Rotterdam</p>
                    <p>When I'm not programming, i'm usually playing piano/trumpet at the local jamsession or working out at the gym.</p>
                    <p>-Stephanos</p>
                </div>

                <div className="JobEntryContainer flex flex-col gap-4 w-1/2 overflow-y-auto h-screen hide-scrollbar" style={{ marginLeft: '50%' }}>
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
                </div>
            </div>
        </div>

    );
};

export default WorksSection;
