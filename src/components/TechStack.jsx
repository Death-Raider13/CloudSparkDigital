import { Code2, Flame, Database, Wind } from 'lucide-react'

const TechStack = () => {
  const technologies = [
    {
      name: 'Vite',
      icon: '⚡',
      description: 'Lightning-fast build tool',
      color: 'from-purple-500 to-yellow-500',
    },
    {
      name: 'React',
      icon: '⚛️',
      description: 'UI Component Library',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      name: 'TypeScript',
      icon: '📘',
      description: 'Type-safe JavaScript',
      color: 'from-blue-500 to-blue-700',
    },
    {
      name: 'Next.js',
      icon: '▲',
      description: 'React Framework',
      color: 'from-gray-800 to-black',
    },
    {
      name: 'Firebase',
      icon: '🔥',
      description: 'Backend & Database',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      name: 'Tailwind CSS',
      icon: '🎨',
      description: 'Utility-First CSS',
      color: 'from-cyan-400 to-blue-600',
    },
  ]

  return (
    <section id="tech" className="py-24 bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6">
            <Code2 className="w-5 h-5 text-accent" />
            <span className="text-white font-medium">Cutting-Edge Tools</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Powered by <span className="bg-gradient-to-r from-accent via-accent-light to-white bg-clip-text text-transparent">Modern Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We leverage the latest and most powerful technologies to build fast, scalable, and maintainable web applications.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 animate-slide-in-from-bottom"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {tech.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {tech.name}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {tech.description}
              </p>

              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Stats or Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="glass rounded-2xl p-6">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300">Modern Stack</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-4xl font-bold text-white mb-2">Fast</div>
            <div className="text-gray-300">Performance</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-4xl font-bold text-white mb-2">Scalable</div>
            <div className="text-gray-300">Architecture</div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default TechStack
