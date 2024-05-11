"use client";
import React, { useState } from "react";
import HomeSection from "./home";
import ResumeSection from "./resume";
import WorksSection from "./works";
import {
  ContactsOutlined,
  CodeOutlined,
  ProfileOutlined,
  MailFilled,
  GithubFilled,
  LinkedinFilled,
  HomeFilled
} from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";

export default function App() {
  const [current, setCurrent] = useState("home");
  const [animate, setAnimate] = useState(false);

  const changeTab = (newTab) => {
    if (newTab !== current) {
      setAnimate(true);
      setTimeout(() => {
        setCurrent(newTab);
        setAnimate(false);
      }, 500);  // Match the timeout with CSS transition duration
    }
  };

  const renderContent = () => {
    switch (current) {
      case "home":
        return <HomeSection />;
      case "works":
        return <WorksSection />;
      case "resume":
        return <ResumeSection />;
      case "contact":
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <ConfigProvider theme={{
      token: {
        // Seed Token
        colorPrimary: '#0d1017',
        colorTextBase: '#ffffff',
        colorBgBase: '#0d1017',
        colorPrimaryHover: '#ffffff',
        colorPrimaryBgHover: '#ffffff',
        colorBorder: '#0d1017',
        // Alias Token
      },
    }}>
      <div className="p-16 bg-[#0d1017] flex justify-center items-center">
        <div className="w-5/6 shadow-2xl flex flex-row justify-center">

          <Sidebar changeTab={changeTab} />

          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between h-10">
              <Button className="font-bold h-full" icon={<MailFilled />}>
                ioannoustephanos2002@gmail.com
              </Button>
              <div className="flex flex-row gap-2">
                <Button className="h-full" icon={<CodeOutlined />} onClick={() => changeTab('works')}>Works</Button>
                <Button className="h-full" icon={<ProfileOutlined />} onClick={() => changeTab('resume')}>Resume</Button>
                <Button className="h-full" icon={<ContactsOutlined />} onClick={() => changeTab('contact')}>Contact</Button>
              </div>
            </div>

            <div className={`content-animate ${animate ? "content-exit-active" : ""}`}>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

const Sidebar = ({ changeTab }) => {
  return (
    <div className="w-1/12 flex flex-col gap-5 h-full justify-center">
      <div
        className="text-3xl cursor-pointer"
        onClick={() => changeTab('home')}>
        <HomeFilled />
      </div>
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

const ContactSection = () => {
  return (
    <div className="homeContentSection">
      <h2 className="text-xl">Contact Section Content</h2>
      {/* Add more content for Contact Section here */}
    </div>
  );
};
