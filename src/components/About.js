// src/components/About.js

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
          {/* <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div> */}
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
