// src/components/Contact.js

import React from "react";
import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <section id="contact" className="relative ">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap h-full">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=New+Jersey&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">New Jersey, USA</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto" className="text-indigo-400 leading-relaxed">
                <div className="">
                  <img
                    className="object-cover object-center rounded"
                    alt="email-pic"
                    src="./email.PNG"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">
            I'm currently looking for a Software Engineering position in the
            United State so If you have / know any open position in the Software
            Engineering field, feel free to contact me.
          </p>

          <a
            href="mailto:"
            className="text-white text-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Get in Touch
          </a>
        </form>
      </div>
      <div className="item-center flex justify-center align-center h-auto min-h-70 flex-col text-center p-3.5 pb-10">
        <ul className="container flex justify-between item-center w-1/4 m-auto">
          <li className=" mx-1 mb-4">
            <a href="https://github.com/dustin-nguyen">
              <Icon
                icon="iconoir:github-outline"
                width="40"
                height="40"
                className="opacity-60 transition ease-in-out  hover:opacity-100 hover:-translate-y-1 hover:scale-125 text-white hover:text-green-400"
              />
            </a>
          </li>
          <li className="mx-1  mb-4">
            <a href="https://www.linkedin.com/in/duchn/">
              <Icon
                icon="akar-icons:linkedin-box-fill"
                width="40"
                height="40"
                className="opacity-60 transition ease-in-out  hover:opacity-100 hover:-translate-y-1 hover:scale-125 text-white hover:text-green-400"
              />
            </a>
          </li>
          <li className="mx-1 mb-4">
            <a href="mailto">
              <Icon
                icon="clarity:email-solid"
                width="40"
                height="40"
                className="opacity-60 transition ease-in-out  hover:opacity-100 hover:-translate-y-1 hover:scale-125 text-white hover:text-green-400"
              />
            </a>
          </li>
        </ul>
        <div className="item-center text-center">
          Inspired by freecodecamp.org
        </div>
        <div className="item-center text-center"> Built by Duc Nguyen</div>
      </div>
    </section>
  );
}
