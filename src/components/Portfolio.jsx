import { useState } from 'react'
import { ExternalLink, Filter } from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      title: 'Marketplace Ecommerce',
      description: 'Full-featured e-commerce marketplace with product listings, cart functionality, and secure checkout. Built with modern web technologies for optimal performance.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['React', 'E-commerce', 'Firebase'],
      category: 'E-commerce',
      link: 'https://marketplace-ecommerce-one.vercel.app/',
    },
    {
      title: 'Envostructs',
      description: 'Professional construction and engineering company website showcasing services, projects, and company information with elegant design.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      category: 'Static',
      link: 'https://envostructs.vercel.app',
    },
    {
      title: 'Andrew Cares Village',
      description: 'Community-focused website for a care village providing information about services, facilities, and community programs.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      tags: ['React', 'Static', 'Responsive'],
      category: 'Static',
      link: 'https://andrewcaresvillage.netlify.app',
    },
    {
      title: 'Mitsonic',
      description: 'Modern audio and music technology website with sleek design and interactive elements showcasing products and services.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
      tags: ['Vite', 'React', 'Modern UI'],
      category: 'Functional',
      link: 'http://mitsonic.netlify.app',
    },
    {
      title: 'Lordz',
      description: 'Creative portfolio and brand website with stunning visuals and smooth animations. Designed to captivate and engage visitors.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'Animations', 'Portfolio'],
      category: 'Static',
      link: 'https://lordz.netlify.app/',
    },
    {
      title: 'Custom Solutions',
      description: 'We specialize in creating custom web solutions tailored to your specific needs. From concept to deployment, we deliver excellence.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      tags: ['Custom', 'Full Stack', 'Firebase'],
      category: 'Functional',
      link: '#contact',
    },
  ]

  const filters = ['All', 'Functional', 'Static', 'E-commerce']

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
            <span className="text-primary font-medium">Our Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects. Each one crafted with precision and passion.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
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
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
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
                    <span>View Live Site</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
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

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group/link"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-primary shadow-lg">
                {project.category}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Have a project in mind? Let's make it happen!
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
