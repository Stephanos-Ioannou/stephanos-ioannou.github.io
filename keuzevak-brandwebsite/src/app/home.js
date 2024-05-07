import React from 'react';
import Image from 'next/image';
import frontalpicture from '../img/frontcrop.png';

const HomeSection = () => {
    return (
        <div className="homeContentSection">
            <div className="introTextBox">
                <div className="NameTitle">
                    <h1 className="text-5xl font-bold">Stephanos</h1>
                    <h1 className="text-5xl font-bold">Ioannou</h1>
                </div>

                <h2 className="text-xl font-bold fadeInUp h2FadeInUp">Junior Software Developer</h2>
                <h3 className="fadeInUp h3FadeInUp">Stephanos Ioannou, Junior Software Developer from Rotterdam, the Netherlands dedicated to crafting efficient and future-proof software solutions. With a keen interest in modern technologies, I am continuously developing my skills to build innovative and robust applications.</h3>
            </div>

            <Image src={frontalpicture} alt="profile" className="homeImage"></Image>
        </div>
    );
};

export default HomeSection;
