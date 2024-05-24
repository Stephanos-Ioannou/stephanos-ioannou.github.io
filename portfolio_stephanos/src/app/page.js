"use client";
import React, { useState } from "react";
import HomeSection from "./home";
import TechnologySection from "./technology";
import ExperienceSection from "./experience";
import {
  CodeOutlined,
  ProfileOutlined,
  MailFilled,
  GithubFilled,
  LinkedinFilled,
  HomeFilled,
  ProjectOutlined
} from "@ant-design/icons";

export default function App() {
  const [current, setCurrent] = useState("home");
  const [animate, setAnimate] = useState(false);

  const changeTab = (newTab) => {
    if (newTab !== current) {
      setAnimate(true);
      setTimeout(() => {
        setCurrent(newTab);
        setAnimate(false);
      }, 500);
    }
  };

  const renderContent = () => {
    switch (current) {
      case "home":
        return <HomeSection />;
      case "experience":
        return <ExperienceSection />;
      case "tech":
        return <TechnologySection />;
      case "projects":
        return <Projects />;
      default:
        return null;
    }
  };

  return (
    <div className="p-20 bg-[#000000] flex justify-center items-center">
      <div className="w-10/12 p-6 shadow-2xl flex flex-col justify-center">
        <div className="flex flex-col">
          <NavBar changeTab={changeTab} />

          <div className="flex flex-row">
            <Sidebar/>
            <div className={`content-animate ${animate ? "content-exit-active" : ""} w-full`}>
              {renderContent()}
            </div>
          </div>


        </div>

      </div>
    </div>
  );
}

const NavBar = ({ changeTab }) => {
  return (
    <div className="flex flex-row h-10">
      <div
        className="text-3xl cursor-pointer w-1/12"
        onClick={() => changeTab('home')}
      >
        <HomeFilled />
      </div>
      <a
        href="mailto:ioannoustephanos2002@gmail.com" // Using mailto protocol
        className="text-sm bg-[#000000] text-white px-1.5 ml-8 h-8 flex items-center justify-center gap-2 button-hover ml-10"
        style={{ borderRadius: '0', textDecoration: 'none' }}
      >
        <MailFilled />
        ioannoustephanos2002@gmail.com
      </a>
      <div className="flex flex-row gap-0.5 ml-auto">
        <NavbarButton icon={ProfileOutlined} onClick={() => changeTab('experience')}>Experience</NavbarButton>
        <NavbarButton icon={CodeOutlined} onClick={() => changeTab('tech')}>Tech</NavbarButton>
        {/* <NavbarButton icon={ProjectOutlined} onClick={() => changeTab('projects')}>Projects</NavbarButton> */}
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-1/12 flex flex-col gap-3 h-full">
      <a
        href="https://www.linkedin.com/in/stephanos-ioannou-a6b41a25b/"
        target="_blank"
        className="text-3xl mt-72"
      >
        <LinkedinFilled />
      </a>
      <a
        href="https://github.com/Stephanos2911"
        target="_blank"
        className="text-3xl"
      >
        <GithubFilled />
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
    </div>
  );
};

const NavbarButton = ({ onClick, icon: Icon, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#000000] text-base text-white px-1.5 h-8 flex items-center justify-center gap-2 button-hover ${className}`}
      style={{ borderRadius: '0' }}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
};
