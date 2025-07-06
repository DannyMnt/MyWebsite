import linkedinLogo from "./assets/LinkedinIcon.png";
import githubLogo from "./assets/GitHubIcon.png";
import instagramLogo from "./assets/InstagramIcon.png";
import { useState, useEffect } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const projectsSection = document.getElementById("projects");

      if (aboutSection && projectsSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top;
        const projectsTop = projectsSection.getBoundingClientRect().top;

        if (
          aboutTop < window.innerHeight / 2 &&
          aboutTop > -window.innerHeight / 2
        ) {
          setActiveSection("about");
        } else if (
          projectsTop < window.innerHeight / 2 &&
          projectsTop > -window.innerHeight / 2
        ) {
          setActiveSection("projects");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen lg:flex lg:max-w-[1300px] lg:mx-auto">
      <aside className="w-full lg:w-[500px] lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between px-8 py-12">
        <div>
          <h1 className="text-white text-5xl font-extrabold mb-2">
            Daniel Munteanu
          </h1>
          <h2 className="text-white text-xl font-medium mb-4">
            Software Engineering Student
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            @ VIA University College
          </p>
          <nav className="flex flex-col gap-6 mt-8">
            <button
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`flex items-center gap-4 text-gray-400 uppercase tracking-widest transition ${
                activeSection === "about"
                  ? "text-white font-bold"
                  : "hover:text-white"
              }`}
            >
              <span className="h-px w-12 bg-gray-500 hidden sm:inline-block" />
              About
            </button>

            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`flex items-center gap-4 text-gray-400 uppercase tracking-widest transition ${
                activeSection === "projects"
                  ? "text-white font-bold"
                  : "hover:text-white"
              }`}
            >
              <span className="h-px w-12 bg-gray-700 hidden sm:inline-block" />
              Projects
            </button>
          </nav>
        </div>
        <div className="flex gap-6 mt-12">
          <a
            href="https://github.com/DannyMnt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubLogo}
              className="w-7 h-7 opacity-70 hover:opacity-100 transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-munteanu-523960253/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinLogo}
              className="w-7 h-7 opacity-70 hover:opacity-100 transition"
            />
          </a>
          <a
            href="https://www.instagram.com/daniel._mnt/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramLogo}
              className="w-7 h-7 opacity-70 hover:opacity-100 transition"
            />
          </a>
        </div>
      </aside>

      <main className="flex-1 lg:w-[600px] px-8 py-12">
        <section id="about" className="w-full lg:max-w-none">
          <div className="space-y-6">
            <p className="text-gray-400 text-lg text-[17px]">
              I am a 4th semester software engineering student in Denmark,
              originally from Romania
            </p>
            <p className="text-gray-400 text-lg text-[17px]">
              I consider myself a person open to any new challenge, looking to
              pursue it together with a team, to share thoughts and ideas for
              the best outcome. Being a part of someone’s dream project is a
              huge responsability but with the right skills to conquer
              obstacles, everything fades into reality. To me, it comes down to
              collaboration, innovation and constant growth. These are some of
              the key aspects I am looking for in a working environment.
            </p>
            <p className="text-gray-400 text-lg text-[17px]">
              During my university studies I have been involved in several
              projects, some of which are listed below. On top of that I have
              also worked on personal projects, which I am always happy to share
              and discuss with anyone interested.
            </p>

            <div id="projects" className="mt-30">
              <div className="group flex items-start gap-4 hover:bg-[#213c5e] p-4 rounded-lg transition mt-20">
                <div className="text-gray-400 justify-center items-start left-0 w-40 text-[14px]">
                  <p>MAY 2024</p>
                </div>
                <div className="w-full">
                  <p className="text-lg group-hover:text-[#6fc0b4] transition-colors duration-200">
                    Healthcare Clinic Management App
                  </p>
                  <br />
                  <p className="text-gray-400 text-[14px]">
                    Built a clinic management app for healthcare clinics using
                    multiple servers communicating through gRPC and different types of clients.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-8">
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      Java
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      C#
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      Blazor
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      gRPC
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      REST API
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      JUnit
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      PostgreSQL
                    </p>
                  </div>
                </div>
              </div>
              <div className="group flex items-start gap-4 hover:bg-[#213c5e] p-4 rounded-lg transition mt-20">
                <div className="text-gray-400 justify-center items-start left-0 w-40 text-[14px]">
                  <p>JULY 2024</p>
                </div>
                <div className="w-full">
                  <p className="text-lg group-hover:text-[#6fc0b4] transition-colors duration-200">
                    Subscriptions Management App
                  </p>
                  <br />
                  <p className="text-gray-400 text-[14px]">
                    Built a subscriptions management app on mobile iOS devices as a personal project to discover mobile development
                    and SwiftUI.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-8">
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      Swift
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      SwiftUI
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      Firebase
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      REST API
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      Javascript
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      Express
                    </p>
                  </div>
                </div>
              </div>
              <div className="group flex items-start hover:bg-[#213c5e] p-4 rounded-lg transition mt-20 w-full">
                <div className="text-gray-400 justify-center items-start left-0 w-50 text-[14px]">
                  <p>MAY 2025</p>
                </div>
                <div className="w-full">
                  <p className="text-lg group-hover:text-[#6fc0b4] transition-colors duration-200">
                    Smart Plant Pot App
                  </p>
                  <br />
                  <p className="text-gray-400 text-[14px]">
                    Took part as a backend developer in a multiple departments
                    project where we created a smart plant pot that can be
                    controlled via a web application. Auto-watering was
                    implemented using a water pump and an ML Model to predict
                    the soil moisture.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-8">
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      Python
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      FastAPI
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      MongoDB
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      Docker
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      CI/CD
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      GitHub Actions
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      ML Models
                    </p>
                  </div>
                </div>
              </div>
              <div className="group flex items-start gap-4 hover:bg-[#213c5e] p-4 rounded-lg transition mt-20">
                <div className="text-gray-400 justify-center items-start left-0 w-50 text-[14px]">
                  <p>JULY 2025</p>
                </div>
                <div className="w-full">
                  <p className="text-lg group-hover:text-[#6fc0b4] transition-colors duration-200">
                    F1 Race Winner Predictor
                  </p>
                  <br />
                  <p className="text-gray-400 text-[14px]">
                    Developed a machine learning model to predict the winner of
                    a Formula 1 race using historical data from the 1950-2024 seasons.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-8">
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      Python
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      Pandas
                    </p>
                    <p className="backdrop-blur-sm bg-[#1a2f49] px-4 py-1 rounded-2xl text-[#6fc0b4] text-[14px]">
                      TensorFlow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
