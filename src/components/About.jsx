import { Globe, Zap, ShoppingCart, ArrowRight } from 'lucide-react'

const About = () => {
  const services = [
    {
      icon: Zap,
      title: 'Functional Websites',
      description: 'Interactive, dynamic web applications built with modern frameworks. From dashboards to complex SaaS platforms, we create responsive and feature-rich solutions.',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: Globe,
      title: 'Static Websites',
      description: 'Lightning-fast, SEO-optimized static sites perfect for portfolios, blogs, and landing pages. Built for performance and search engine visibility.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Websites',
      description: 'Full-featured online stores with secure payments, inventory management, and seamless checkout experiences. Scale your business online with confidence.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">CloudsparkDigital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 2 years of experience, we specialize in creating exceptional web experiences
            that drive results. Our expertise spans across modern technologies and best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 rounded-2xl -z-10 transition-opacity duration-300`}></div>
              <div className="absolute inset-0.5 bg-white rounded-2xl -z-10"></div>

              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl ${service.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-8 h-8 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} strokeWidth={2} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>

              {/* Decorative Elements */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl -z-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to bring your vision to life?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's collaborate and create something extraordinary together.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
