// src/components/Projects.js

//import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import { Icon } from "@iconify/react";

function checkNullOrUndefined(props) {
  if (props === null || props === undefined || props === "") return false;
  return true;
}

function RenderProjectButton(props) {
  if (checkNullOrUndefined(props.demo))
    return <RenderDemoButton demo={props.demo} />;
  if (checkNullOrUndefined(props.github))
    return <RenderGitHubButton github={props.github} />;
}

function RenderDemoButton(props) {
  return (
    <a
      href={props.demo}
      className=" mx-auto  text-white title-font font-medium bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-800 rounded "
    >
      TRY IT NOW
    </a>
  );
}

function RenderGitHubButton(props) {
  return (
    <a
      href={props.github}
      className="mx-auto   text-white title-font font-medium bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-800 rounded "
    >
      GitHub Link
    </a>
  );
}

function RenderGitHubIcon(props) {
  if (
    props.github !== null &&
    props.github !== "" &&
    props.github !== undefined
  )
    return (
      <a href={props.github}>
        {" "}
        <Icon
          icon="eva:github-outline"
          className=" mx-auto inline-block w-6 h-6 flex-shrink-0 text-white hover:text-cyan-500"
        />
      </a>
    );
}

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <Icon
            icon="mdi:xml"
            width="30"
            height="30"
            className="mx-auto inline-block w-10 mb-4"
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p> */}
        </div>
        <div className="flex flex-wrap -m-4 items-stretch">
          {projects.map((project) => (
            <a href={project.link} className="sm:w-1/2 w-100 p-4 inline-flex">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-60 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 h-full">
                  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row ">
                    <div className="flex items-center justify-between">
                      <Icon
                        icon="bi:folder-fill"
                        className="mx-auto inline-block w-6 h-6 flex-shrink-0  hover:text-white"
                      />
                    </div>
                    <div className="flex justify-end flex-1  ">
                      <RenderGitHubIcon github={project.github} />
                    </div>
                  </div>

                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{project.description}</p>
                  <RenderProjectButton
                    demo={project.demo}
                    github={project.github}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
