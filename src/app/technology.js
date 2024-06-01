import {
    siReact, siJavascript, siCss3, siHtml5, siTailwindcss, siPython,
    siNodedotjs, siNpm, siGithub, siCsharp, siDotnet, siMongodb,
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
                    src={tech.iconUrl ? tech.iconUrl : createColoredSvgUrl(tech.icon, tech.color)}
                    alt={`${tech.name} Logo`}
                />
            ))}
        </div>
    );
};

const technologies = [
    { section: 'Languages I Speak', items: [
        { icon: siCsharp, color: '#512BD4', name: 'C#' },
        { icon: siTypescript, color: '#3178C6', name: 'TypeScript' },
        { icon: siJavascript, color: '#F7DF1E', name: 'JavaScript' },
        { icon: siPython, color: '#3776AB', name: 'Python' },
        { iconUrl: 'https://static-00.iconduck.com/assets.00/java-icon-378x512-w60vlu77.png', name: 'Java' },
    ]},
    { section: 'Frontend Fundamentals: Tools I Trust', items: [
        { icon: siReact, color: '#61DAFB', name: 'React' },
        { icon: siNextdotjs, color: '#ffffff', name: 'Next.js' },
        { icon: siTailwindcss, color: '#06B6D4', name: 'Tailwind CSS' },
        { icon: siCss3, color: '#1572B6', name: 'CSS3' },
    ]},
    { section: 'Backend Blueprint: My Essential Building Blocks', items: [
        { icon: siDotnet, color: '#512BD4', name: '.NET' },
        { icon: siNodedotjs, color: '#339933', name: 'Node.js' },
        { icon: siPostgresql, color: '#4169E1', name: 'PostgreSQL' },
        { icon: siMongodb, color: '#47A248', name: 'MongoDB' },
    ]},
    { section: 'Tech Toolkit: My Everyday Essentials', items: [
        { icon: siVisualstudiocode, color: '#007ACC', name: 'Visual Studio Code' },
        { icon: siNpm, color: '#CB3837', name: 'NPM' },
        { icon: siGithub, color: '#ffffff', name: 'GitHub' },
    ]}
];

const TechnologySection = () => {
    return (
        <div className="tech-section-container">
            <div>
                <h1 className="text-2xl font-bold pt-6">Tech I Use</h1>
                <div className="line">
                    <div className="circle"></div>
                </div>
            </div>

            <div className="flex flex-col mt-8 gap-10">
                {technologies.map((techSection) => (
                    <div className="tech-section" key={techSection.section}>
                        <h3 className="p-3 italic font-medium mb-1">{techSection.section}</h3>
                        <TechnologyLogoList technologies={techSection.items} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologySection;
