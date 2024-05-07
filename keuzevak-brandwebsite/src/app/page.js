"use client";
import React, { useState } from "react";
import HomeSection from "./home";
import ResumeSection from "./resume";
import {
  ContactsOutlined,
  CodeOutlined,
  ProfileOutlined,
  MailFilled,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";

export default function App() {
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    setCurrent(e);
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
      <div className="min-h-screen bg-[#0d1017] flex justify-center items-center">
        <div className="w-5/6 space-y-6 shadow-2xl flex flex-row justify-center items-center">
          <Sidebar />

          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between h-10">
              <Button className="h-full font-bold" icon={<MailFilled />}>
                ioannoustephanos2002@gmail.com
              </Button>
              <div className="flex flex-row gap-2">
                <Button className="h-full" icon={<CodeOutlined />} onClick={() => onClick('works')}>Works</Button>
                <Button className="h-full" icon={<ProfileOutlined />} onClick={() => onClick('resume')}>Resume</Button>
                <Button className="h-full" icon={<ContactsOutlined />} onClick={() => onClick('contact')}>Contact</Button>
              </div>
            </div>

            {renderContent()}
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

const Sidebar = () => {
  return (
    <div className="w-2/12 flex flex-col items-center justify-center gap-5">
      <a
        href="https://www.linkedin.com/in/stephanos-ioannou-a6b41a25b/"
        target="_blank"
        className="text-3xl"
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

const WorksSection = () => {
  return (
    <div className="homeContentSection">
      <h2 className="text-xl">Works Section Content</h2>
      {/* Add more content for Works Section here */}
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
