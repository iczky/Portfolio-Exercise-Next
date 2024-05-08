"use client";

import React from "react";
import { IconContext } from "react-icons";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

interface WorkProps {
  title: string;
  url: string;
}

const Works: React.FC<WorkProps> = ({ title, url }) => {
  return (
    <div className="flex pb-8 border-b-stone-400 border-b-2 gap-20 mt-8 first:mt-0 last:border-none justify-between">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl">{title}</h1>
        <p className="text-sm">
          Brand Design &nbsp;&nbsp;- &nbsp;&nbsp;Webflow Development
          &nbsp;&nbsp;-&nbsp;&nbsp; Web Design
        </p>
      </div>
      <div className="flex items-center">
        <IconContext.Provider
          value={{
            color: "black",
            size: "5em",
          }}>
          <a href={url} target="_blank">
            <BsFillArrowUpRightCircleFill />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Works;
