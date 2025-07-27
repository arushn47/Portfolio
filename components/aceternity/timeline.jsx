"use client";
import React from "react";
import { Timeline } from "@components/ui/timeline";

export function TimelineDemo() {
  const data1 = [
    {
      title: "2023 - 2027",
      content: (
        <div className="space-y-4 px-4 py-2 md:px-6 md:py-4">
          <h3 className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            VIT Bhopal University
          </h3>
          <p className="text-lg md:text-2xl font-medium text-neutral-800 dark:text-neutral-200">
            B.Tech - Computer Science and Engineering (Core)
          </p>
          <p className="text-md md:text-xl font-normal text-neutral-700 dark:text-neutral-300">
            CGPA: 8.03 (as of 2025)
          </p>
          <ul className="list-disc ml-5 space-y-1 text-sm md:text-lg text-neutral-600 dark:text-neutral-400">
            <li>EV Club - Technical Lead (2023-2025)</li>
            <li>Organized tech fests and club activities</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2021 - 2023",
      content: (
        <div className="space-y-4 px-4 py-2 md:px-6 md:py-4">
          <h3 className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            Sri Chaitanya College of Education
          </h3>
          <p className="text-lg md:text-2xl font-medium text-neutral-800 dark:text-neutral-200">
            Senior Secondary - PCMC (Physics, Chemistry, Math, Computer Science)
          </p>
          <p className="text-md md:text-xl font-normal text-neutral-700 dark:text-neutral-300">
            Grade: 87%
          </p>
        </div>
      ),
    },
    {
      title: "2020 - 2021",
      content: (
        <div className="space-y-4 px-4 py-2 md:px-6 md:py-4">
          <h3 className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            Sri Chaitanya College of Education
          </h3>
          <p className="text-lg md:text-2xl font-medium text-neutral-800 dark:text-neutral-200">
            Senior Secondary - Class 10 (CBSE)
          </p>
          <p className="text-md md:text-xl font-normal text-neutral-700 dark:text-neutral-300">
            Grade: 77.4%
          </p>
        </div>
      ),
    },
  ];

  const data2 = [
    {
      title: "Dec 2024 - Present",
      content: (
        <div className="space-y-4 px-4 py-2 md:px-6 md:py-4">
          <h3 className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            The Electric Vehicle Club - VIT Bhopal
          </h3>
          <p className="text-lg md:text-2xl font-medium text-neutral-800 dark:text-neutral-200">
            Technical Lead
          </p>
          <p className="text-md md:text-xl font-normal text-neutral-700 dark:text-neutral-300">
            <strong>Skills:</strong> Web Development · Technical Support · Team
            Management · Teamwork
          </p>
        </div>
      ),
    },
    {
      title: "Mar 2024 - Dec 2024",
      content: (
        <div className="space-y-4 px-4 py-2 md:px-6 md:py-4">
          <h3 className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            The Electric Vehicle Club - VIT Bhopal
          </h3>
          <p className="text-lg md:text-2xl font-medium text-neutral-800 dark:text-neutral-200">
            Graphic Design Co-Lead
          </p>
          <p className="text-md md:text-xl font-normal text-neutral-700 dark:text-neutral-300">
            <strong>Skills:</strong> Canva · Graphic Design · Web Design · Logo
            Design · Team Management · Teamwork · Creativity Skills
          </p>
        </div>
      ),
    },
    {
      title: "Jan 2024 - Mar 2024",
      content: (
        <div className="space-y-4 px-4 py-2 md:px-6 md:py-4">
          <h3 className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            The Electric Vehicle Club - VIT Bhopal
          </h3>
          <p className="text-lg md:text-2xl font-medium text-neutral-800 dark:text-neutral-200">
            Graphic Design Team
          </p>
          <p className="text-md md:text-xl font-normal text-neutral-700 dark:text-neutral-300">
            <strong>Skills:</strong> Canva · Graphic Design
          </p>
        </div>
      ),
    },
    {
      title: "Oct 2023 - Jan 2024",
      content: (
        <div className="space-y-4 px-4 py-2 md:px-6 md:py-4">
          <h3 className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            The Electric Vehicle Club - VIT Bhopal
          </h3>
          <p className="text-lg md:text-2xl font-medium text-neutral-800 dark:text-neutral-200">
            Volunteer
          </p>
          <p className="text-md md:text-xl font-normal text-neutral-700 dark:text-neutral-300">
            <strong>Skills:</strong> Volunteering
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-hidden p-4 md:p-10">
      <Timeline data={data1} title={"Education"} />
      <div className="my-20"></div>
      <Timeline data={data2} title={"Experience"} />
    </div>
  );
}
