import Image from 'next/image';
import HomeImage from '../../public/AIDrawingcompress.png';

const HomeSection = () => {
    return (
        <div className="homeContentSection">
            <div className="w-3/4">
                <div className="NameTitle">
                    <h1 className="text-5xl font-bold">Stephanos</h1>
                    <h1 className="text-5xl font-bold">Ioannou</h1>
                </div>

                <h2 className="text-xl font-bold fadeInUp h2FadeInUp mt-3">Junior Software Developer</h2>
                <h3 className="fadeInUp h3FadeInUp mt-12 text-sm">Stephanos Ioannou, Junior Software Developer from Rotterdam, the Netherlands dedicated to crafting efficient and future-proof software solutions. With a keen interest in modern technologies, I am continuously developing my skills to build innovative and robust applications.</h3>
            </div>

            <div className="w-full flex justify-center">
                <Image src={HomeImage} priority={true} alt="Drawing of Stephanos" className=''></Image>
            </div>
        </div>
    );
};

export default HomeSection;
