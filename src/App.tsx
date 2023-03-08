import Resume from "./assets/resume.pdf";
import MyImage from "./assets/images/Obaseki_Noruwa.jpg";
import Haraka from "./assets/images/haraka.png";
import Ecolabz from "./assets/images/ecolabz.png";
import { useRef } from "react";
function App() {
  const menuBtn = useRef<HTMLDivElement | null>(null);
  const navItem = useRef<HTMLDivElement | null>(null);

  const about = useRef<HTMLDivElement | null>(null);
  const experience = useRef<HTMLDivElement | null>(null);
  const work = useRef<HTMLDivElement | null>(null);
  const contact = useRef<HTMLDivElement | null>(null);


  const toggleMenu = () => {
    menuBtn.current?.classList.toggle("active");
    navItem.current?.classList.toggle("hidden");
  };

  const goToAbout = () => {
    setTimeout(() => {
      about.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }, 100);

    toggleMenu();
  };

  const goToExperience = () => {
    setTimeout(() => {
      experience.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
    toggleMenu();
  };

  const goToWork = () => {
    setTimeout(() => {
      work.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
    toggleMenu();
  };

  const goToContact = () => {
    setTimeout(() => {
      contact.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
    toggleMenu();
  };

  return (
    <>
      <nav className="lg:px-14 sm:px-8 px-2 grid grid-cols-8 lg:h-[5.5rem] sm:h-[4rem] h-[4rem]  items-center sticky top-0 z-40  border-t border-transparent backdrop-blur-md">
        <a
          href="/"
          className="col-span-2 lg:text-3xl text-2xl font-extrabold text-indigo-800 relative sm:top-0 sm:left-0 "
        >
          Nor
          <span className="text-red-400">uwa</span>
        </a>
        <div
          className="col-span-6 lg:grid hidden lg:relative lg:top-0 lg:right-0 fixed top-0 right-0 lg:h-12 lg:w-full w-4/5  h-screen lg:items-center lg:bg-transparent bg-white z-30 lg:overflow-hidden overflow-y-auto transition ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none"
          ref={navItem}
        >
          <ul className="lg:place-content-end place-content-center lg:mt-0 mt-20 flex lg:flex-row flex-col flex-wrap items-center w-full lg:space-x-12 lg:space-y-0 space-y-8">
            <li>
              <h5
                onClick={goToAbout}
                className="lg:text-base text-lg lg:font-semibold font-normal text-slate-900 px-2 py-2 cursor-pointer hover:text-indigo-900"
              >
                About
              </h5>
            </li>

            <li>
              <h5
                onClick={goToExperience}
                className="lg:text-base text-lg lg:font-semibold font-normal text-slate-900 px-2 py-2 cursor-pointer hover:text-indigo-900"
              >
                Experience
              </h5>
            </li>
            <li>
              <h5
                onClick={goToWork}
                className="lg:text-base text-lg lg:font-semibold font-normal text-slate-900 px-2 py-2 cursor-pointer hover:text-indigo-900"
              >
                Work
              </h5>
            </li>
            <li>
              <a
                onClick={goToContact}
                className="lg:text-base text-lg lg:font-semibold font-normal text-slate-900 px-2 py-2 cursor-pointer hover:text-indigo-900"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href={Resume}
                className="lg:text-base text-lg lg:font-semibold font-normal text-indigo-800  border-2 border-indigo-700  px-4 py-2 rounded-md"
                download
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div
          onClick={toggleMenu}
          className="menu-btn fixed top-2 right-1 lg:hidden flex items-center justify-center z-50"
          ref={menuBtn}
        >
          <div className="menu-btn__burger"></div>
        </div>
      </nav>
      <div className="hidden fixed top-0 lg:left-14 w-[4rem] h-screen lg:grid">
        <ul className="place-content-center flex flex-col space-y-12">
          <li>
            <a href="https://github.com/noruwa03">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github transition ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none  hover:-translate-y-1 stroke-indigo-800 hover:stroke-red-500"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/obasekinoruwa">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-twitter transition ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none  hover:-translate-y-1 stroke-indigo-800 hover:stroke-red-500"
              >
                <title>Twitter</title>
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/obaseki-noruwa-184a4020b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin transition ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none  hover:-translate-y-1 stroke-indigo-800 hover:stroke-red-500"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <section id="" className="lg:pt-28 pt-16 pb-16 lg:px-48 sm:px-8 px-2">
        <h1 className="lg:text-2xl text-lg font-semibold text-slate-600 lg:mb-0 mb-2">
          Hi, my name is
        </h1>
        <h2 className="lg:text-7xl sm:text-5xl text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-600 font-bold lg:my-4 my-1">
          Obaseki Noruwa.
        </h2>
        <h3 className="lg:text-6xl sm:text-5xl text-4xl text-indigo-800 font-bold lg:my-4 my-0">
          Tech enthusiast from Nigeria.
        </h3>
        <p className="lg:w-3/5 w-5/5 mt-8  sm:mb-16  mb-20 lg:text-lg text-base text-slate-700 font-normal">
          I stay updated on all the latest trends and developments associated
          with frontend web development and I have the knowledge to apply this
          information where appropriate. I have great organizational and time
          utilization skill with a willingness to learn.
        </p>
        <a
          href="mailto:noruwaobaseki@gmail.com"
          className="px-10 lg:py-4 py-3 lg:text-lg text-base text-indigo-800 font-bold rounded-md border-[3px] border-indigo-700"
        >
          Hire me
        </a>
      </section>

      <section
        id="about"
        ref={about}
        className="lg:py-32 py-20 lg:px-48 sm:px-8 px-2"
      >
        <h1 className="lg:text-3xl text-2xl font-bold text-indigo-800 mb-8">
          About Me
        </h1>
        <div className="grid lg:grid-cols-8 grid-cols-4 gap-x-20 gap-y-8">
          <div className="lg:col-span-5 col-span-4">
            <p className="lg:text-lg text-base text-slate-600 font-normal mb-4">
              Hi there, My name is Noruwa and I am able to design, code and
              deploy web apps in an organized and efficient manner. I am an avid
              learner, quick to grasp new technologies to design effective and
              scalable products
            </p>
            <p className="lg:text-lg text-base text-slate-600 font-normal mb-4">
              I have experience implementing links, tools and similar features
              into web designs and I can prepare documents and keep accurate
              daily reports. I use good judgment and i have the ability to
              manage my time wisely to meet deadlines. I have excellent verbal
              and written skills that make it easy to understand information and
              to articulate my ideas clearly, so others can understand.
            </p>
            <p className="lg:text-lg text-base text-slate-600 font-normal mb-4">
              Here is a list of languages and tools i use:
            </p>
            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-2 space-y-1">
                <div className="flex flex-row flex-wrap items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-record stroke-indigo-800"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                  </svg>
                  <h4 className="lg:text-base text-base text-slate-600 font-normal">
                    HTML, CSS, SCSS
                  </h4>
                </div>
                <div className="flex flex-row flex-wrap items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-record stroke-indigo-800"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                  </svg>
                  <h4 className="lg:text-base text-base text-slate-600 font-normal">
                    JavaScript ES6+
                  </h4>
                </div>
                <div className="flex flex-row flex-wrap items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-record stroke-indigo-800"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                  </svg>
                  <h4 className="lg:text-base text-base text-slate-600 font-normal">
                    Typescript
                  </h4>
                </div>
                <div className="flex flex-row flex-wrap items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-record stroke-indigo-800"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                  </svg>
                  <h4 className="lg:text-base text-base text-slate-600 font-normal">
                    Vue Js & Nuxt Js
                  </h4>
                </div>
              </div>

              <div className="col-span-2 space-y-1">
                <div className="flex flex-row flex-wrap items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-record stroke-indigo-800"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                  </svg>
                  <h4 className="lg:text-base text-base text-slate-600 font-normal">
                    React Js & Next Js
                  </h4>
                </div>
                <div className="flex flex-row flex-wrap items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-record stroke-indigo-800"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                  </svg>
                  <h4 className="lg:text-base text-base text-slate-600 font-normal">
                    Figma
                  </h4>
                </div>
                <div className="flex flex-row flex-wrap items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-record stroke-indigo-800"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                  </svg>
                  <h4 className="lg:text-base text-base text-slate-600 font-normal">
                    Node
                  </h4>
                </div>
                <div className="flex flex-row flex-wrap items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-record stroke-indigo-800"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                  </svg>
                  <h4 className="lg:text-base text-base text-slate-600 font-normal">
                    PHP & Laravel
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-4 lg:mt-0 mt-12">
            <img
              src={MyImage}
              alt="Obaseki Noruwa"
              className="rounded-md shadow shadow-gray-200 lg:w-full sm:w-3/5 w-4/5 mx-auto"
            />
          </div>
        </div>
      </section>

      <section
        id="experience"
        ref={experience}
        className="lg:py-32 py-20 lg:px-48 sm:px-8 px-2"
      >
        <h1 className="lg:text-3xl text-2xl font-bold text-indigo-800 mb-8">
          Where I’ve Worked
        </h1>
        <div className="grid lg:grid-cols-8 sm:grid-cols-6 grid-col-4 gap-8">
          <div className="lg:col-span-4 sm:col-span-3 col-span-4">
            <a
              href="/"
              className="lg:text-2xl text-base text-slate-700 font-semibold"
            >
              Ecolabz
            </a>
            <p className="lg:text-lg text-base text-slate-600 font-normal mt-2 mb-4">
              Frontend Engineer @ Ecolabz
              <span className="block text-base font-semibold text-indigo-700">
                June 2022 - Present
              </span>
            </p>
            <div className="">
              <div className="space-y-2">
                <div>
                  <h4 className="lg:text-base text-base text-slate-600 font-normal">
                    Collaborated with the ui/ux designer to build the website,
                    Write modern, maintainable code for ecolabz web projects
                    projects.
                  </h4>
                </div>
                <div>
                  <h4 className="lg:text-base text-base text-slate-600 font-normal">
                    Integrated third-party mailchimp API to improved product
                    accessibility and communication.
                  </h4>
                </div>
                <div>
                  <h4 className="lg:text-base text-base text-slate-600 font-normal">
                    Work with different tools, platforms, frameworks, and
                    backend as a service such as firebase.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        ref={work}
        className="lg:py-32 py-20 lg:px-48 sm:px-8 px-2"
      >
        <h1 className="lg:text-3xl text-2xl font-bold text-indigo-800 mb-8">
          Things I've Built
        </h1>
        <div className="grid sm:grid-cols-8 grid-cols-4 gap-8 space-y-16">
          <div className="sm:col-span-4 col-span-4">
            <img src={Haraka} alt="Haraka" className="mb-4" />
            <a
              href="https://haraka.shop"
              className="lg:text-2xl text-lg text-slate-800 font-semibold underline decoration-wavy decoration-indigo-800"
            >
              Haraka shop
            </a>
            <p className="text-base text-slate-800 mt-6">
              Haraka is an online food and grocery order and delivery platform.
              Skip the confusing hours of searching and comparing vendors with
              all stores, reviews and delivery within your reach.
            </p>
          </div>
          <div className="sm:col-span-4 col-span-4">
            <img src={Ecolabz} alt="Ecolabz" className="mb-4" />
            <a
              href="https://ecolabz.io"
              className="lg:text-2xl text-lg text-slate-800 font-semibold underline decoration-wavy decoration-indigo-800"
            >
              Ecolabz
            </a>
            <p className="text-base text-slate-800 mt-6">
              Ecolabz is a startup venture studio that focuses on ideating,
              creating, designing, developing and launching startups and
              companies.
            </p>
          </div>
        </div>
      </section>

      <section className="lg:py-32 py-20 lg:px-48 sm:px-8 px-2">
        <h1 className="lg:text-3xl text-2xl text-center font-bold text-indigo-800 mb-8">
          Other activities
        </h1>
        <div className="grid lg:grid-cols-9 sm:grid-cols-6 grid-cols-4 gap-8">
          <div className="lg:col-span-3 sm:col-span-3 col-span-4 bg-indigo-100 rounded-md shadow shadow-gray-200 hover:bg-indigo-200 cursor-default p-6">
            <div className=" space-y-4">
              <a
                href="https://arbuzzer.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link stroke-indigo-700"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>

              <h3 className="font-bold text-lg text-slate-600">Arbuzzer</h3>
              <p className="text-base text-slate-800">
                A single web page application of a logistics and supply chain
                service provider.
              </p>
              <div className="flex flex-row flex-wrap space-x-4">
                <p className="text-base font-semibold text-slate-800">Stack:</p>
                <p className="text-base font-normal text-slate-800">HTML</p>
                <p className="text-base font-normal text-slate-800">CSS</p>
                <p className="text-base font-normal text-slate-800">
                  JavaScript
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 sm:col-span-3 col-span-4 bg-indigo-100 rounded-md shadow shadow-gray-200 p-6">
            <div className=" space-y-4">
              <a
                href="https://devontrade.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link stroke-indigo-700"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>

              <h3 className="font-bold text-lg text-slate-600">Devon trade</h3>
              <p className="text-base text-slate-800">
                Devon is a group of financial and cryptocurrency experts that
                invest in mining and cryptocurrency trading.
              </p>
              <div className="flex flex-row flex-wrap space-x-4">
                <p className="text-base font-semibold text-slate-800">Stack:</p>
                <p className="text-base font-normal text-slate-800">HTML</p>
                <p className="text-base font-normal text-slate-800">CSS</p>
                <p className="text-base font-normal text-slate-800">
                  JavaScript
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 sm:col-span-3 col-span-4 bg-indigo-100 rounded-md shadow shadow-gray-200 p-6">
            <div className=" space-y-4">
              <a
                href="https://saas-hospital.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link stroke-indigo-700"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>

              <h3 className="font-bold text-lg text-slate-600">
                Hospital dashboard
              </h3>
              <p className="text-base text-slate-800">
                A multi page web ui for the management of patients, and services
                in an hospital.
              </p>
              <div className="flex flex-row flex-wrap space-x-4">
                <p className="text-base font-semibold text-slate-800">Stack:</p>
                <p className="text-base font-normal text-slate-800">HTML</p>
                <p className="text-base font-normal text-slate-800">CSS</p>
                <p className="text-base font-normal text-slate-800">
                  JavaScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        ref={contact}
        className="lg:py-32 py-20 lg:px-48 sm:px-8 px-2"
      >
        <h2 className="lg:text-5xl text-3xl  text-indigo-800 text-center font-bold">
          Get In Touch
        </h2>
        <div className="lg:w-3/5 w-5/5 mx-auto my-8">
          <p className="lg:text-lg text-base text-center text-slate-800 mb-14">
            I’m currently open for a new job opportunity, If you think i can add
            value to your company or team, my inbox is always open. Whether you
            have a question or just want to say hi, kindly click the button
            below and send me a message.
          </p>
          <div className="">
            <div className="flex flex-row justify-center">
              <a
                href="mailto:noruwaobaseki@gmail.com"
                className="px-10 py-4 lg:text-lg text-base text-indigo-800 font-bold rounded-md border-[3px] border-indigo-700"
              >
                Say Hi
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-20 pb-8 lg:px-48 sm:px-8 px-2">
        <div className="lg:hidden grid">
          <ul className="place-content-center flex flex-row space-x-10 my-8">
            <li>
              <a href="https://github.com/noruwa03">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github transition ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none  hover:-translate-y-1 stroke-indigo-800 hover:stroke-red-500"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/obasekinoruwa">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-twitter transition ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none  hover:-translate-y-1 stroke-indigo-800 hover:stroke-red-500"
                >
                  <title>Twitter</title>
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/obaseki-noruwa-184a4020b">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin transition ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none  hover:-translate-y-1 stroke-indigo-800 hover:stroke-red-500"
                >
                  <title>LinkedIn</title>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="sm:grid">
          <div className="sm:flex sm:flex-row sm:place-content-center text-slate-800 text-center">
            Design inspiration by{" "}
            <a
              href="https://brittanychiang.com/"
              className="mx-2 text-indigo-800 font-semibold"
            >
              Brittany Chiang.
            </a>
            Built by
            <span className="text-indigo-800 font-semibold ml-2">
              Obaseki Noruwa
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
