import {
    siReact, siJavascript, siCss3, siHtml5,
    siNodedotjs, siNpm, siGithub, siCsharp, siDotnet,
    siTypescript, siPostgresql, siSalesforce, siNextdotjs, siVisualstudiocode, siWebstorm, siBitbucket
} from 'simple-icons';
import createColoredSvgUrl from '@/utils/coloredSvg';

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
        { icon: siCss3, color: '#1572B6', name: 'CSS3' },
        { icon: siHtml5, color: '#E34F26', name: 'HTML5' },
        { icon: siNextdotjs, color: '#ffffff', name: 'Next.js' }
    ],
    backend: [
        { icon: siNodedotjs, color: '#339933', name: 'Node.js' },
        { icon: siCsharp, color: '#512BD4', name: 'C#' },
        { icon: siDotnet, color: '#512BD4', name: '.NET' },
        { icon: siPostgresql, color: '#4169E1', name: 'PostgreSQL' },
        { icon: siTypescript, color: '#3178C6', name: 'TypeScript' },
        { icon: siSalesforce, color: '#00A1E0', name: 'Salesforce' },
    ],
    other: [
        { icon: siNpm, color: '#CB3837', name: 'NPM' },
        { icon: siGithub, color: '#ffffff', name: 'GitHub' },
        {icon : siBitbucket, color: '#0052CC', name: 'BitBucket'},
        { icon: siVisualstudiocode, color: '#007ACC', name: 'Visual Studio Code' },
        { icon: siWebstorm, color: '#00C4FF', name: 'WebStorm' }
    ]
};

const ResumeSection = () => {
    return (
        <div className="tech-section-container">
            <div>
                <h1 class="text-2xl font-bold m-0">Tech I Use</h1>
            </div>

            <div className="tech-section" style={{ border: '3px solid white' }}>
                <h3 className='p-3 italic font-semibold'>Frontend Fundamentals: Tools I Trust</h3>
                <TechnologyLogoList technologies={technologies.frontend} />
            </div>
            <div className="tech-section" style={{ border: '3px solid white' }}>
                <h3 className='p-3 italic font-semibold'>Backend Blueprint: My Essential Building Blocks</h3>
                <TechnologyLogoList technologies={technologies.backend} />
            </div>
            <div className="tech-section" style={{ border: '3px solid white' }}>
                <h3 className='p-3 italic font-semibold'>Tech Toolkit: My Everyday Essentials</h3>
                <TechnologyLogoList technologies={technologies.other} />
            </div>
        </div>
    );
};

export default ResumeSection;