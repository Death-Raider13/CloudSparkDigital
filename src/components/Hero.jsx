import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-slate-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 animate-pulse-slow">
          <Sparkles className="w-5 h-5 text-accent" />
          <span className="text-white font-medium">2+ Years of Excellence</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Professional <span className="relative">
            <span className="bg-gradient-to-r from-accent via-accent-light to-white bg-clip-text text-transparent animate-gradient">
              Web Development
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent via-accent-light to-white blur-2xl opacity-50"></span>
          </span>
          <br />
          Services in Nigeria
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Building functional, static, and e-commerce websites with cutting-edge technologies.
          Transform your ideas into powerful digital solutions.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => handleScrollTo('portfolio')}
            className="group relative px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/50"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>View Portfolio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <button
            onClick={() => handleScrollTo('contact')}
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 transition-all duration-300 hover:bg-white hover:text-primary hover:scale-105 hover:shadow-2xl"
          >
            Get in Touch
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { label: 'Years Experience', value: '2+' },
            { label: 'Projects Completed', value: '20+' },
            { label: 'Happy Clients', value: '15+' },
          ].map((stat, index) => (
            <div key={index} className="glass rounded-2xl p-6">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
