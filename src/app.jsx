export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-200 text-slate-800">
      {/* SITE HEADER */}
      <header className="text-center py-16 bg-white shadow-sm">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          My Developer Portfolio
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          I've exchanged my dental tools for dev tools.
        </p>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        {/* ABOUT ME SECTION */}
        <section id="about" className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 border-l-4 border-indigo-500 pl-3">
            About Me
          </h2>

          <p className="leading-relaxed">
            After spending 17 years as a dental assistant, I decided it was time
            for a new adventure. I recently earned my Web Development
            Certificate from Southwestern Illinois College, and I'm excited to
            keep learning, building, and leveling up.
          </p>

          <p className="leading-relaxed">
            I'm a self-proclaimed word nerd, a collector of fun facts, and a
            shameless petter of all the dogs. If there's a pup within a 20-foot
            radius, I'm already on my way to say hello.
          </p>

          <p className="leading-relaxed">
            This portfolio is a growing collection of the projects I've built
            along my journey into tech. Thanks for stopping by. I'm glad you're
            here.
          </p>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-10">
          <h2 className="text-3xl font-bold text-slate-900 border-l-4 border-indigo-500 pl-3">
            Projects
          </h2>

          {/* PROJECT CARD 1 */}
          <article className="project-card bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <img
              src="YOUR-IMAGE"
              alt="Budget Tracker screenshot"
              className="project-image w-full h-48 object-cover rounded-lg mb-4"
            />

            <header>
              <h3 className="text-2xl font-semibold text-slate-900">
                Budget Tracker App
              </h3>
              <p className="tagline text-slate-500">
                A clean and simple way to track expenses.
              </p>
            </header>

            <section className="mt-4 space-y-2">
              <p>
                A React + Tailwind CSS application built in Visual Studio Code
                and deployed to Netlify. It helps users track their monthly
                expenses.
              </p>
              <p>
                <strong>Tech:</strong> JavaScript, React, Tailwind CSS, Netlify
              </p>
            </section>

            <footer className="links mt-6 flex gap-4">
              <a
                href="LIVE-DEMO"
                target="_blank"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Live Demo
              </a>
              <a
                href="GITHUB-REPO"
                target="_blank"
                className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-800 transition"
              >
                GitHub Repo
              </a>
            </footer>
          </article>

          {/* PROJECT CARD 2 */}
          <article className="project-card bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <img
              src="YOUR-IMAGE"
              alt="Weather App screenshot"
              className="project-image w-full h-48 object-cover rounded-lg mb-4"
            />

            <header>
              <h3 className="text-2xl font-semibold text-slate-900">
                50 States Weather App
              </h3>
              <p className="tagline text-slate-500">
                Real-time weather data for every U.S. state.
              </p>
            </header>

            <section className="mt-4 space-y-2">
              <p>
                A jQuery-powered weather dashboard built in Visual Studio Code.
                It pulls real-time data from a weather API and displays
                conditions for all 50 states.
              </p>
              <p>
                <strong>Tech:</strong> JavaScript, jQuery, Weather API
              </p>
            </section>

            <footer className="links mt-6">
              <a
                href="GITHUB-REPO"
                target="_blank"
                className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-800 transition"
              >
                GitHub Repo
              </a>
            </footer>
          </article>

          {/* PROJECT CARD 3 */}
          <article className="project-card bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <img
              src="YOUR-IMAGE"
              alt="Java Task Manager screenshot"
              className="project-image w-full h-48 object-cover rounded-lg mb-4"
            />

            <header>
              <h3 className="text-2xl font-semibold text-slate-900">
                Java Task Manager
              </h3>
              <p className="tagline text-slate-500">
                A simple console-based task organizer.
              </p>
            </header>

            <section className="mt-4 space-y-2">
              <p>
                A Java task management system built in Eclipse IDE. Demonstrates
                OOP principles, collections, and clean project structure.
              </p>
              <p>
                <strong>Tech:</strong> Java, Eclipse IDE
              </p>
            </section>

            <footer className="links mt-6">
              <a
                href="GITHUB-REPO"
                target="_blank"
                className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-800 transition"
              >
                GitHub Repo
              </a>
            </footer>
          </article>
        </section>
      </main>

      {/* SITE FOOTER */}
      <footer className="text-center py-8 text-slate-600">
        <p>&copy; 2026 Amanda Ellis — Always learning, always building.</p>
      </footer>
    </div>
  );
}
