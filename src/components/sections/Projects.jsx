import RevealOnScroll from "../RevealOnScroll"
const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 ">
    <RevealOnScroll>
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Agency AI</h3>
            <p className="text-gray-400 mb-4">
                A modern landing page for AI-powered agency
            </p>
            <div>
                {["Responsive","Animated","Theme toggle"].map((tech,key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3
                                rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                    {tech}
                                </span>
                ))}
            </div>
            <div className="flex justify-between items-center">
                <a href="https://starman37.github.io/Agency_AI/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View this project</a>
            </div>
            
        </div>
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Codeflow</h3>
            <p className="text-gray-400 mb-4">
                A sleek landing page for a developer-focused platform.
            </p>
            <div>
                {["Responsive","Animated","Theme toggle"].map((tech,key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3
                                rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                    {tech}
                                </span>
                ))}
            </div>
            <div className="flex justify-between items-center">
                <a href="https://starman37.github.io/codeflow/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View this project</a>
            </div>
            
        </div>
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">DigiClock</h3>
            <p className="text-gray-400 mb-4">
                A modern digital clock with a clean UI and smooth interactions.
            </p>
            <div>
                {["Animated","Theme toggle"].map((tech,key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3
                                rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                    {tech}
                                </span>
                ))}
            </div>
            <div className="flex justify-between items-center">
                <a href="https://starman37.github.io/DigiClock/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View this project</a>
            </div>
            
        </div>
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Developer Portfolio</h3>
            <p className="text-gray-400 mb-4">
               A clean and responsive portfolio to highlight work and skills.
            </p>
            <div>
                {["Responsive","Animated","Theme toggle"].map((tech,key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3
                                rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                    {tech}
                                </span>
                ))}
            </div>
            <div className="flex justify-between items-center">
                <a href="hhttps://starman37.github.io/KR_Portfolio/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View this project</a>
            </div>
            
        </div>
      </div>
    </div>
    </RevealOnScroll>
    </section>
  )
}

export default Projects
