import './App.css';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black to-black text-white">
      {/* <Background3D /> */}
      <Navbar />

      <div id="home" className="relative z-20 flex flex-col items-center justify-center min-h-screen pt-20 px-4 text-center">
        <div className="relative group w-36 h-36 md:w-40 md:h-40 rounded-full overflow-visible">
        <div className="absolute inset-0 rounded-full animate-glow-ring blur-xl opacity-70 group-hover:opacity-100 transition duration-700 z-0"></div>

          <img
            src="/profile.jpeg"
            alt="Lakshya Manglani"
            className="w-full h-full rounded-full border-4 border-white shadow-xl transition-all duration-700 ease-in-out group-hover:scale-105 profile-img-animate relative z-10"
          />
        </div>


        <h1 className="mt-6 text-4xl md:text-6xl pb-4 font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-xl animate__animated animate__fadeIn animate__delay-2s">
          Lakshya Manglani
        </h1>


        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-400 font-medium">
          Full Stack Developer | AI ML | Open Source | IIT Madras '26
        </p>

        <div className="mt-4 max-w-2xl text-gray-300 px-4">
          <div className="mt-2">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full text-sm sm:text-lg font-medium hover:shadow-xl transition duration-300"
            >
              Let's Build Like Never Before
            </a>
          </div>
        </div>
      </div>


      <div id="about" className="z-20 min-h-screen flex flex-col items-center justify-center bg-black-800 text-gray-300 px-6 py-12 text-center font-sans">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 mt-8 tracking-wide">
          About Me
        </h2>

        <p className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-400 text-left animate__animated animate__fadeIn animate__delay-1s">
          Bonjour! I'm <span className="text-white font-semibold">Lakshya Manglani</span>, a Data Science undergrad at <span className="text-white font-semibold">IIT Madras</span>. I’m passionate about exploring AI and full-stack development.
          <br /><br />
          My skills include <span className="text-white font-semibold">JavaScript, Python, C++, SQL, DSA, AI/ML, MERN stack</span>, and backend frameworks. I love tackling complex problems and contributing to open-source.
          <br /><br />
          I'm currently open to exciting internships and project collaborations.
        </p>
      </div>

      <section id="projects" className="z-20 min-h-screen bg-black-800 text-white px-4 py-12 scroll-mt-10 md:scroll-mt-20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">My Projects</h2>

        <div className="w-full max-w-2xl mx-auto space-y-6">
          <div className="flex items-start gap-4 p-5 bg-gray-800 rounded-lg shadow-lg">
            <div className="text-2xl text-purple-400 mt-1">
              <i className="fas fa-chart-line"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Asset Investing App</h3>
              <p className="text-gray-400 text-md">
                MERN stack application for simulating and tracking asset investment with modern responsive UI and secure backend.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-gray-800 rounded-lg shadow-lg">
            <div className="text-2xl text-blue-400 mt-1">
              <i className="fas fa-home"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Household Services App</h3>
              <p className="text-gray-400 text-md">
                End-to-end app built with Flask, VueJS, SQLite, Redis & Celery for service bookings, dashboard access, and admin management.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-gray-800 rounded-lg shadow-lg">
            <div className="text-2xl text-green-400 mt-1">
              <i className="fas fa-university"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Bank Telemarketing Success Prediction</h3>
              <p className="text-gray-400 text-md">
                Developed an ML model to predict customer responses to banking product offers based on marketing campaign data.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 bg-gray-800 rounded-lg shadow-lg">
            <div className="text-2xl text-green-400 mt-1">
              <i className="fas fa-robot"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">AI Supply Chain Assistant</h3>
              <p className="text-gray-400 text-md">
                Built an LLM-powered tool for querying supply chain data and policies via vector search and SQL. Role-based access and regional control with FastAPI and React.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-20 min-h-screen flex flex-col items-center justify-center bg-black-800 text-white px-6 py-16 text-center scroll-mt-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">Let's Connect</h2>

        <p className="md:text-lg text-md text-gray-400 mb-8 max-w-xl">
          Feel free to reach out to me via any of the platforms below. I'm always open to new opportunities, collaborations, or just a tech chat!
        </p>

        <div className="flex space-x-6 md:space-x-10 md:text-3xl text-2xl z-30">
          <a
            href="https://github.com/22f2001166"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors duration-300"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lakshya-manglani-9b2635270/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:lakshyaonweb22@gmail.com"
            className="hover:text-red-400 transition-colors duration-300"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://x.com/__lakshyaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black-500 transition-colors duration-300"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
          <a
            href="https://instagram.com/__lakshya.a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <p className="mt-20 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Lakshya Manglani. All rights reserved.
        </p>
      </section>
    </div>
  );
}

export default App;
