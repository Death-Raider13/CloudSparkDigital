import { BarChart3, Search, Globe, Zap, CheckCircle2 } from 'lucide-react'

const SEOExpertise = () => {
  const seoProjects = [
    {
      title: 'Nomolabs.io',
      category: 'Foundation & Strategy',
      impact: '0-1 Launch Readiness',
      description: 'Implementing technical SEO foundation for a fresh domain. Focused on conversion-centric architecture and initial indexing speed.',
      points: [
        'Title & Meta tag optimization',
        'Open Graph protocol for social reach',
        'Waitlist conversion funnel design',
        'Performance-first architecture'
      ],
      stats: { label: 'Tech Score', value: '100/100' }
    },
    {
      title: 'Global Tech Marketplace',
      category: 'Ranking & Growth',
      impact: 'Traffic Optimization',
      description: 'Helped in optimizing the SEO ranking for a major tech marketplace. Focused on long-tail keywords and content hierarchy.',
      points: [
        'Keyword research & cluster mapping',
        'Backlink strategy implementation',
        'Content authority building',
        'Core Web Vitals optimization'
      ],
      stats: { label: 'Organic Growth', value: '+140%' }
    },
    {
      title: 'Local Engineering Services',
      category: 'Ranking & Authority',
      impact: 'Local Search Dominance',
      description: 'Engineered a local SEO strategy that pushed a service business from page 5 to the #1 spot for multiple high-intent keywords.',
      points: [
        'Local citation building',
        'GMB optimization & management',
        'Geo-targeted content clusters',
        'Review acquisition strategy'
      ],
      stats: { label: 'Ranking', value: '#1 Spot' }
    }
  ]

  return (
    <section id="seo" className="py-24 bg-gradient-to-br from-slate-900 to-primary-dark text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6">
            <Search className="w-5 h-5 text-accent" />
            <span className="text-white font-medium">SEO & Visibility</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Product <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">Growth SEO</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Not just ranking, but growing. I specialize in technical SEO that fuels user acquisition and product visibility.
          </p>
        </div>

        {/* SEO Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {seoProjects.map((project, index) => (
            <div
              key={index}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-accent/50 transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-accent text-sm font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                </div>
                <div className="bg-accent/20 p-3 rounded-2xl">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-white mb-1">{project.stats.value}</div>
                <div className="text-gray-400 text-sm">{project.stats.label}</div>
              </div>

              <p className="text-gray-300 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all">
                {project.description}
              </p>

              <ul className="space-y-3 mb-8">
                {project.points.map((point, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs text-gray-500 uppercase tracking-widest">Impact</span>
                <div className="text-white font-medium">{project.impact}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Growth Philosophy */}
        <div className="mt-16 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Globe className="w-8 h-8 text-accent mx-auto mb-4" />
              <h4 className="font-bold mb-2 text-xl">Visibility First</h4>
              <p className="text-gray-400 text-sm">Ensuring products are discoverable where it matters most.</p>
            </div>
            <div>
              <Zap className="w-8 h-8 text-accent mx-auto mb-4" />
              <h4 className="font-bold mb-2 text-xl">Technical Edge</h4>
              <p className="text-gray-400 text-sm">Zero-latency indexing and high-performance core vitals.</p>
            </div>
            <div>
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-4" />
              <h4 className="font-bold mb-2 text-xl">Conversion Focus</h4>
              <p className="text-gray-400 text-sm">Turning search visitors into active product users.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SEOExpertise
import { TrendingUp } from 'lucide-react'
