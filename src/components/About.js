// src/components/About.js

import { Icon } from "@iconify/react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
          <h1 className="title-font sm:text-4xl text-2xl mb-4  font-medium text-cyan-400">
            About me
          </h1>
          {/* <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Duc Nguyen.
              </h2> */}
          <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white display:inline-block">
            "I love to build amazing apps."
          </h3>
          <p className="mb-8 leading-relaxed">
            Hello! My name is Duc Nguyen and I enjoy creating things that can
            enhance people's quality of life.
          </p>
          <ul className="list-none">
            <div className="tracking-widest text-base title-font font-medium text-green-400 mb-2">
              Hobbies:
            </div>
            <li className="mb-2 ml-4 font-normal items-center">
              <div className="flex">
                <Icon icon="twemoji:hiking-boot" className=" w-6 h-6 mr-2" />
                <span className="text-white">
                  <i className="fas fa-phone-alt mr-2 " />
                  Hiking
                </span>
              </div>
            </li>
            <li className="mb-2 ml-4 font-normal items-center">
              <div className="flex">
                <Icon
                  icon="map:kayaking"
                  className=" text-yellow-400 w-6 h-6 mr-2"
                />
                <span className="text-white">
                  <i className="fas fa-phone-alt mr-2 " />
                  Kayaking
                </span>
              </div>
            </li>
            <li className="mb-2 ml-4 font-normal items-center">
              <div className="flex">
                <Icon icon="noto:person-swimming" className=" w-6 h-6 mr-2" />
                <span className="text-white">
                  <i className="fas fa-phone-alt mr-2 " />
                  Swiming
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-1/2 lg:h-1/3">
          <img
            className="object-cover object-center rounded"
            alt="profie-pic"
            src="./profie.jpg"
          />
        </div>
      </div>
    </section>
  );
}
