import { useState } from 'react'
import { ExternalLink, Filter } from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      title: 'Iwalewa Cooperative',
      description: 'Comprehensive cooperative management system with complex loan modules, interest automation, and multi-tier admin authentication.',
      image: '/iwalewa-dashboard.png',
      tags: ['React', 'Firebase', 'Financial-Logic'],
      category: 'Websites & Apps',
      link: '#',
    },
    {
      title: 'SME Grant Platform',
      description: 'Investment and grant management platform designed for scale and security in the financial technology sector.',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop',
      tags: ['TypeScript', 'Full-Stack', 'Secure'],
      category: 'Websites & Apps',
      link: 'https://sme-grant-platform-psi.vercel.app/',
    },
    {
      title: 'Workchain Platform',
      description: 'Next-generation recruitment and payroll automation system with institutional-grade branding and authentication flow.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Automation', 'HR Tech'],
      category: 'Websites & Apps',
      link: 'https://workchain-new.vercel.app/',
    },
    {
      title: 'AJOF Engineering Nigeria Limited',
      description: 'Strategic social media management and growth for a specialized geotechnical engineering firm.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      tags: ['LinkedIn', 'Digital Strategy', 'Niche-Growth'],
      category: 'Social Media Management',
      link: 'https://www.linkedin.com/company/ajof-enginnering-nigeria-limited',
    },
    {
      title: 'Nomolabs.io',
      description: 'Foundational product launch and SEO architecture for an upcoming tech platform.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['SEO', 'Growth', 'Launch'],
      category: 'SEO Expertise',
      link: 'https://www.nomolabs.io/',
    },
    {
      title: 'Fero MarketHub',
      description: 'Innovative digital marketplace focusing on seamless buyer-seller interactions (In Production).',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      tags: ['Marketplace', 'React', 'Startup'],
      category: 'Websites & Apps',
      link: 'https://feromarkethub-frontend.vercel.app/',
    },
  ]

  const filters = ['All', 'Websites & Apps', 'Social Media Management', 'SEO Expertise']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Filter className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Selected Works</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of digital products, growth strategies, and search optimizations built to perform.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-accent/30 scale-105'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-600 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-zoom-in"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* View Button Overlay */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="bg-white text-primary px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transform scale-90 group-hover:scale-100 transition-transform">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-bold text-primary shadow-lg">
                {project.category}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to grow your product?
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
