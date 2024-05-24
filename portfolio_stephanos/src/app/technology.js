import {
    siReact, siJavascript, siCss3, siHtml5, siTailwindcss,
    siNodedotjs, siNpm, siGithub, siCsharp, siDotnet,
    siTypescript, siPostgresql, siSalesforce, siNextdotjs, siVisualstudiocode, siWebstorm, siBitbucket
} from 'simple-icons';
import createColoredSvgUrl from '../utils/coloredSvg';

const TechnologyLogoList = ({ technologies }) => {
    return (
        <div className="logo-list">
            {technologies.map((tech) => (
                <img
                    key={tech.name}
                    className="TechIcon"
                    src={createColoredSvgUrl(tech.icon, tech.color)}
                    alt={`${tech.name} Logo`}
                />
            ))}
        </div>
    );
};

const technologies = {
    frontend: [
        { icon: siReact, color: '#61DAFB', name: 'React' },
        { icon: siJavascript, color: '#F7DF1E', name: 'JavaScript' },
        { icon: siTailwindcss, color: '#06B6D4  ', name: 'Tailwind CSS' },
        { icon: siNextdotjs, color: '#ffffff', name: 'Next.js' },
        { icon: siCss3, color: '#1572B6', name: 'CSS3' },
        { icon: siHtml5, color: '#E34F26', name: 'HTML5' },
    ],
    backend: [
        { icon: siNodedotjs, color: '#339933', name: 'Node.js' },
        { icon: siPostgresql, color: '#4169E1', name: 'PostgreSQL' },
        { icon: siCsharp, color: '#512BD4', name: 'C#' },
        { icon: siTypescript, color: '#3178C6', name: 'TypeScript' },
        { icon: siDotnet, color: '#512BD4', name: '.NET' },
        { icon: siSalesforce, color: '#00A1E0', name: 'Salesforce' },
    ],
    other: [
        { icon: siVisualstudiocode, color: '#007ACC', name: 'Visual Studio Code' },
        { icon: siNpm, color: '#CB3837', name: 'NPM' },
        { icon: siBitbucket, color: '#0052CC', name: 'BitBucket' },
        { icon: siGithub, color: '#ffffff', name: 'GitHub' },
        { icon: siWebstorm, color: '#00C4FF', name: 'WebStorm' }
    ]
};

const TechnologySection = () => {
    return (
        <div className="tech-section-container">
            <div>
                <h1 class="text-2xl font-bold pt-6">Tech I Use</h1>
                <div className="line">
                    <div className="circle"></div>
                </div>
            </div>

            <div className='flex flex-col mt-8 gap-10'>
                <div className="tech-section">
                    <h3 className='p-3 italic font-medium'>Frontend Fundamentals: Tools I Trust</h3>
                    <TechnologyLogoList technologies={technologies.frontend} />
                </div>
                <div className="tech-section">
                    <h3 className='p-3 italic font-medium'>Backend Blueprint: My Essential Building Blocks</h3>
                    <TechnologyLogoList technologies={technologies.backend} />
                </div>
                <div className="tech-section">
                    <h3 className='p-3 italic font-medium'>Tech Toolkit: My Everyday Essentials</h3>
                    <TechnologyLogoList technologies={technologies.other} />
                </div>
            </div>
        </div>
    );
};

export default TechnologySection;