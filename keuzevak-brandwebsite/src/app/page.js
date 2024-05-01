"use client";
import React, { useState } from "react";
import { Menu } from "antd";
import {
  ContactsOutlined,
  CodeOutlined,
  ProfileOutlined,
  MailOutlined,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import frontalpicture from "../img/frontalview.jpeg";
import Image from "next/image";
import { Button } from "antd";

const menuItems = [
  {
    label: "Works",
    key: "works",
    icon: <CodeOutlined />,
  },
  {
    label: "Resume",
    key: "resume",
    icon: <ProfileOutlined />,
  },
  {
    label: "Contact",
    key: "contact",
    icon: <ContactsOutlined />,
  },
];

export default function Profile() {
  const [current, setCurrent] = useState("Home");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const renderContent = () => {
    switch (current) {
      case "Home":
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
    <div className="min-h-screen bg-[#0d1017] flex justify-center pt-24">
      <div className="w-3/5 space-y-6 shadow-2xl flex flex-row">
        <Sidebar />

        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <Button className="h-full" icon={<MailOutlined />}>
              ioannoustephanos2002@gmail.com
            </Button>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={menuItems}
            />
          </div>

          {renderContent()}
        </div>
      </div>
    </div>
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

const HomeSection = () => {
  return (
    <div className="contentSection">
      <div></div>

      <div></div>
      <h2 className="text-xl">Homepage</h2>
      <Image src={frontalpicture} alt="profile" className="w-half"></Image>
    </div>
  );
};

const WorksSection = () => {
  return (
    <div className="contentSection">
      <h2 className="text-xl">Works Section Content</h2>
      {/* Add more content for Works Section here */}
    </div>
  );
};

const ResumeSection = () => {
  return (
    <div className="contentSection">
      <h2 className="text-xl">Resume Section Content</h2>
      {/* Add more content for Resume Section here */}
    </div>
  );
};

const ContactSection = () => {
  return (
    <div className="contentSection">
      <h2 className="text-xl">Contact Section Content</h2>
      {/* Add more content for Contact Section here */}
    </div>
  );
};
