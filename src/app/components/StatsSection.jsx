"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { oxanium } from "../styles/fonts";

const maxProjectsCompleted = 8;
const maxSquareFootage = 321456;
const maxPlaceholder = 54320;

export default function StatsSection() {
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [squareFootage, setSquareFootage] = useState(0);
  const [placeholder, setPlaceholder] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      const projectsInterval = setInterval(() => {
        // Increment projectsCompleted by 1 until it reaches maxProjectsCompleted
        if (projectsCompleted < maxProjectsCompleted) {
          setProjectsCompleted((prevCount) => prevCount + 1);
        }
      }, 200);

      return () => {
        clearInterval(projectsInterval);
      };
    }
  }, [inView, projectsCompleted]);

  useEffect(() => {
    if (inView) {
      const squareFootageInterval = setInterval(() => {
        // Increment squareFootage by 100 until it reaches maxSquareFootage
        if (squareFootage < maxSquareFootage) {
          setSquareFootage((prevCount) => prevCount + 100);
        }
      }, 1);

      return () => {
        clearInterval(squareFootageInterval);
      };
    }
  }, [inView, squareFootage]);

  useEffect(() => {
    if (inView) {
      const placeholderInterval = setInterval(() => {
        // Increment placeholder by 50 until it reaches maxPlaceholder
        if (placeholder < maxPlaceholder) {
          setPlaceholder((prevCount) => prevCount + 50);
        }
      }, 5);

      return () => {
        clearInterval(placeholderInterval);
      };
    }
  }, [inView, placeholder]);

  const formatNumberWithCommas = (number) => {
    return number.toLocaleString();
  };

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-3 text-white h-fit"
    >
      <div className="bg-clutchBlue-800 col-span-1 flex flex-row">
        <div className="flex w-8 bg-gray-800"></div>
        <div className=" flex flex-col justify-between w-full">
          <div className="flex flex-grow flex-col gap-2 px-4 py-6 justify-center ">
            <h3 className={`${oxanium.className} text-lg font-semibold`}>
              Projects Completed
            </h3>
            <p className="text-6xl">
              {formatNumberWithCommas(
                projectsCompleted >= maxProjectsCompleted
                  ? maxProjectsCompleted
                  : projectsCompleted
              )}
            </p>
          </div>

          <div className="h-2 w-full bg-gray-700"></div>
        </div>
      </div>

      <div className="bg-clutchBlue-700 col-span-1 flex flex-row">
        <div className="flex w-8 bg-gray-600"></div>
        <div className=" flex flex-col justify-between w-full">
          <div className="flex flex-grow flex-col gap-2 px-4 py-6 justify-center ">
            <h3 className={`${oxanium.className} text-lg font-semibold`}>
              Square Footage
            </h3>
            <p className="text-6xl">
              {formatNumberWithCommas(
                squareFootage >= maxSquareFootage
                  ? maxSquareFootage
                  : squareFootage
              )}
            </p>
          </div>

          <div className="h-2 w-full bg-gray-500"></div>
        </div>
      </div>

      <div className="bg-clutchBlue-600 col-span-1 flex flex-row">
        <div className="flex w-8 bg-gray-400"></div>
        <div className=" flex flex-col justify-between w-full">
          <div className="flex flex-grow flex-col gap-2 px-4 py-6 justify-center ">
            <h3 className={`${oxanium.className} text-lg font-semibold`}>
              Placeholder
            </h3>
            <p className="text-6xl">
              {formatNumberWithCommas(
                placeholder >= maxPlaceholder ? maxPlaceholder : placeholder
              )}
            </p>
          </div>

          <div className="h-2 w-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
