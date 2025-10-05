import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "CloudsparkDigital delivered an exceptional e-commerce platform that exceeded our expectations. The site is fast, beautiful, and our sales have increased by 150%!",
      client: "Sarah Johnson",
      company: "Marketplace Boutique",
      rating: 5,
    },
    {
      quote: "Working with CloudsparkDigital was a breeze. They understood our vision and brought it to life with stunning design and flawless functionality. Highly recommended!",
      client: "Michael Chen",
      company: "Envostructs",
      rating: 5,
    },
    {
      quote: "Professional, reliable, and incredibly talented. The website they built for us perfectly represents our brand and has received countless compliments from our community.",
      client: "Emily Rodriguez",
      company: "Andrew Cares Village",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6">
            <Quote className="w-5 h-5 text-accent" />
            <span className="text-white font-medium">Client Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our <span className="bg-gradient-to-r from-accent via-accent-light to-white bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-slide-in-from-bottom"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Rating Stars */}
              <div className="flex space-x-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-200 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Client Info */}
              <div className="border-t border-white/20 pt-4">
                <div className="font-bold text-white mb-1">{testimonial.client}</div>
                <div className="text-accent text-sm">{testimonial.company}</div>
              </div>

              {/* Decorative Gradient */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/20 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
          <div className="glass rounded-2xl p-6">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-4xl font-bold text-white mb-2">5.0</div>
            <div className="text-gray-300">Average Rating</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-4xl font-bold text-white mb-2">20+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Testimonials
