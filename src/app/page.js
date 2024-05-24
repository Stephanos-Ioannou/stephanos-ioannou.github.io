"use client";
import React, { useState } from "react";
import HomeSection from "./home";
import TechnologySection from "./technology";
import ExperienceSection from "./experience";
import {
  CodeOutlined,
  ProfileOutlined,
  MailFilled,
  HomeFilled,
  ProjectOutlined,
} from "@ant-design/icons";
import { siLinkedin, siGithub } from "simple-icons";
import createColoredSvgUrl from "@/utils/coloredSvg";

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
    <div className="p-20 bg-[#0d0d0d] flex justify-center items-center">
      <div className="xl:w-2/3 lg:w-3/4 p-6 shadow-2xl flex flex-col justify-center">
        <div className="flex flex-col">
          <NavBar changeTab={changeTab} />

          <div className="flex flex-row">
            <Sidebar />
            <div
              className={`content-animate ${
                animate ? "content-exit-active" : ""
              } w-full`}
            >
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NavBar = ({ changeTab }) => (
  <div className="flex flex-row">
    <div
      className="text-3xl cursor-pointer w-1/12 flex justify-center items-center"
      onClick={() => changeTab("home")}
      style={{ width: "1.75rem", height: "1.75rem" }} // Ensure consistent dimensions
    >
      <HomeFilled />
    </div>
    <a
      href="mailto:ioannoustephanos2002@gmail.com" // Using mailto protocol
      className="text-sm bg-[#0d0d0d] text-white px-1.5 ml-20 h-8 flex items-center justify-center gap-2 button-hover"
    >
      <MailFilled />
      ioannoustephanos2002@gmail.com
    </a>

    <div className="flex flex-row gap-0.5 ml-auto">
      <NavbarButton
        icon={ProfileOutlined}
        onClick={() => changeTab("experience")}
      >
        Experience
      </NavbarButton>
      <NavbarButton icon={CodeOutlined} onClick={() => changeTab("tech")}>
        Tech
      </NavbarButton>
      {/* <NavbarButton icon={ProjectOutlined} onClick={() => changeTab('projects')}>Projects</NavbarButton> */}
    </div>
  </div>
);

const Sidebar = () => (
  <div className="w-1/12 flex flex-col gap-4 h-full">
    <a
      href="https://www.linkedin.com/in/stephanos-ioannou-a6b41a25b/"
      target="_blank"
      className="text-3xl mt-72"
    >
      <img
        key={"linkedin"}
        className="w-7 h-7" // Tailwind CSS for width and height 30px
        src={createColoredSvgUrl(siLinkedin, "#ffffff")}
        alt={`LinkedIn Logo`}
      />
    </a>
    <a
      href="https://github.com/Stephanos2911"
      target="_blank"
      className="text-3xl"
    >
      <img
        key={"github"}
        className="w-7 h-7" // Tailwind CSS for width and height 30px
        src={createColoredSvgUrl(siGithub, "#ffffff")}
        alt={`Github Logo`}
      />
    </a>
  </div>
);

const Projects = () => <div></div>;

const NavbarButton = ({ onClick, icon: Icon, children, className = "" }) => (
  <button
    onClick={onClick}
    className={`bg-[#0d0d0d] text-base text-white px-1.5 h-8 flex items-center justify-center gap-2 button-hover ${className}`}
    style={{ borderRadius: "0" }}
  >
    {Icon && <Icon />}
    {children}
  </button>
);
