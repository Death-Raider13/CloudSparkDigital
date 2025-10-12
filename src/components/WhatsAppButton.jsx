import { useState, useEffect } from 'react'
import { MessageCircle, X, Send, Clock } from 'lucide-react'

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = '+2348143598369'
  const message = encodeURIComponent('Hello! I\'m interested in your web development services. Can we discuss my project?')

  // Show button after a delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/234${phoneNumber.slice(1)}?text=${message}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  if (!isVisible) return null

  return (
    <>
      {/* WhatsApp Popup */}
      <div className={`fixed bottom-20 right-4 sm:bottom-24 sm:right-8 z-50 transition-all duration-500 ease-out ${
        isOpen 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
      }`}>
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 max-w-sm relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-50"></div>
          
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200 z-10"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                {/* Online indicator */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  CloudsparkDigital
                </h3>
                <div className="flex items-center space-x-1 text-sm text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Online now</span>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-4 relative">
              <p className="text-gray-700 text-sm leading-relaxed">
                👋 Hi there! Welcome to CloudsparkDigital!
                <br />
                <br />
                Ready to bring your web project to life? Let's chat about your ideas!
              </p>
              <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>Just now</span>
                </div>
                <div className="text-blue-500">✓✓</div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Start Conversation</span>
            </button>

            {/* Quick Info */}
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">
                Usually replies within minutes
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-200/30 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-100/40 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
        </div>

        {/* Triangle pointer */}
        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={togglePopup}
        className={`fixed bottom-6 right-4 sm:right-8 z-50 group transition-all duration-500 ${
          isOpen ? 'scale-110' : 'hover:scale-110'
        }`}
        aria-label="WhatsApp Chat"
      >
        {/* Main Button */}
        <div className={`relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'rotate-180' : 'hover:rotate-12'
        }`}>
          {isOpen ? (
            <X className="w-7 h-7 text-white transition-transform duration-300" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" />
          )}
          
          {/* Pulse rings when closed */}
          {!isOpen && (
            <>
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
              <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-30"></div>
            </>
          )}
        </div>

        {/* Notification badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
            1
          </div>
        )}

        {/* Tooltip */}
        <div className={`absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover:opacity-100'
        }`}>
          Chat with us!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
        </div>
      </button>
    </>
  )
}

export default WhatsAppButton
