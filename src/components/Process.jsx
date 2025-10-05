import { Search, Palette, Code, Rocket } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Planning',
      description: 'We begin by understanding your goals, target audience, and project requirements. Through detailed consultations, we create a comprehensive roadmap for success.',
      number: '01',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'Design & Prototyping',
      description: 'Our designers craft beautiful, user-centric interfaces. We create interactive prototypes and iterate based on your feedback to ensure the design is perfect.',
      number: '02',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Code,
      title: 'Development & Testing',
      description: 'Using cutting-edge technologies, we bring the design to life. Rigorous testing ensures your website is fast, secure, and works flawlessly across all devices.',
      number: '03',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We handle the deployment and ensure a smooth launch. Post-launch, we provide ongoing support and maintenance to keep your website running at peak performance.',
      number: '04',
      color: 'from-green-500 to-teal-500',
    },
  ]

  return (
    <section id="process" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Rocket className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Our Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our proven 4-step process ensures your project is delivered on time, on budget, and exceeds expectations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 z-0"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-zoom-in"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {/* Timeline Connector - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 top-32 bottom-0 w-1 bg-gradient-to-b from-primary to-accent transform -translate-x-1/2 z-0"></div>
                )}

                <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-100 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 rounded-2xl -z-10 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-2xl -z-10"></div>

                  {/* Number Badge */}
                  <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} mb-6 mt-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative Elements */}
                  <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${step.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 -z-10`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to start your project?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300"
              >
                Get Started Now
              </button>
              <button
                onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-primary font-semibold rounded-full border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Process
