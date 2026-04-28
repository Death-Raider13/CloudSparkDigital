import { Briefcase, TrendingUp, Users, Code, Linkedin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'AJOF Engineering Nigeria Limited',
      role: 'Social Media Lead',
      period: 'Feb 2024 - March 2024 (Active)',
      description: 'Strategic social growth for a technical niche. Focused on LinkedIn expansion and technical content strategy for geotechnical and civil engineering services.',
      metrics: [
        { label: 'Network Engagement', value: '30+' },
        { label: 'Followers', value: '35' },
        { label: 'Niche', value: 'Technical' },
      ],
      link: 'https://www.linkedin.com/company/ajof-enginnering-nigeria-limited',
      icon: Linkedin,
      color: 'blue',
    },
    {
      company: 'Nomolabs',
      role: 'Product Growth Lead (Foundational)',
      period: 'April 2024 - Present',
      description: 'Engineering the growth foundation for a new SaaS domain. Implementing 0-1 launch strategy, waitlist conversion architecture, and technical SEO structure.',
      metrics: [
        { label: 'Domain Age', value: '1 Month' },
        { label: 'SEO Status', value: 'Indexing' },
        { label: 'Growth Phase', value: 'Launch' },
      ],
      link: 'https://www.nomolabs.io/',
      icon: TrendingUp,
      color: 'purple',
    },
    {
      company: 'SME Grant Platform',
      role: 'Full-Stack Developer & Growth Engineer',
      period: '2023 - Present',
      description: 'Developing and scaling a secure investment platform. Focused on building robust financial systems with a focus on user acquisition and security.',
      metrics: [
        { label: 'Type', value: 'Fintech' },
        { label: 'Stack', value: 'Full-JS' },
        { label: 'Scale', value: 'High' },
      ],
      icon: Code,
      color: 'cyan',
    }
  ]

  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Growth Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Recent <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Combining engineering precision with growth strategy to build and scale digital products.
          </p>
        </div>

        {/* Experience Timeline/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-${exp.color}-500/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <exp.icon className={`w-8 h-8 text-${exp.color}-500`} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.company}</h3>
              <p className="text-primary font-semibold mb-4">{exp.role}</p>
              <p className="text-sm text-gray-500 mb-6">{exp.period}</p>

              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {exp.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {exp.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{metric.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{metric.label}</div>
                  </div>
                ))}
              </div>

              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
                >
                  View Details <TrendingUp className="w-4 h-4 ml-2" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
