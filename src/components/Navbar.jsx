import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <img 
                src="/Logo.png" 
                alt="CloudsparkDigital Logo" 
                className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-accent/20 blur-xl group-hover:bg-accent/40 transition-all"></div>
            </div>
            <span className={`text-2xl font-bold transition-colors ${scrolled ? 'text-gray-900' : 'text-white'} group-hover:text-accent`}>
              CloudsparkDigital
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'
                } ${
                  activeSection === link.href.substring(1)
                    ? scrolled
                      ? 'text-primary'
                      : 'text-accent'
                    : ''
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full"></span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="glass rounded-2xl p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-primary text-white'
                    : scrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
