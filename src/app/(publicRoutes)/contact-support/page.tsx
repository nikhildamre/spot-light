import Link from 'next/link'

export default function ContactSupport() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-black"></div>
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      <div className="fixed inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Contact</span>
              <br />
              <span className="text-violet-400">Support</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get help from our expert support team. We're here 24/7 to ensure your webinars run smoothly.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Live Chat */}
            <div className="p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[280px] flex flex-col">
              <div className="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">Live Chat</h3>
                <p className="text-gray-400 mb-6">Get instant help from our support team. Available 24/7 for urgent issues.</p>
              </div>
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl transition-all flex-shrink-0">
                Start Chat
              </button>
            </div>

            {/* Email Support */}
            <div className="p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[280px] flex flex-col">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">Email Support</h3>
                <p className="text-gray-400 mb-6">Send us detailed questions and we'll respond within 2 hours during business hours.</p>
              </div>
              <a href="mailto:support@spotlight.ai" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all text-center flex-shrink-0">
                Send Email
              </a>
            </div>

            {/* Phone Support */}
            <div className="p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[280px] flex flex-col">
              <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">Phone Support</h3>
                <p className="text-gray-400 mb-6">Speak directly with our technical experts for complex issues and urgent matters.</p>
              </div>
              <a href="tel:+919876543210" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-all text-center flex-shrink-0">
                Call Now
              </a>
            </div>
          </div>

          {/* Support Categories */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-white">How Can We</span>
              <span className="text-violet-400"> Help You?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Technical Issues",
                  description: "Streaming problems, audio/video issues, platform bugs",
                  icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                },
                {
                  title: "Account & Billing",
                  description: "Subscription management, payment issues, plan changes",
                  icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                },
                {
                  title: "Feature Requests",
                  description: "New feature suggestions, integration requests",
                  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                },
                {
                  title: "Training & Setup",
                  description: "Onboarding help, best practices, configuration",
                  icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                }
              ].map((category, index) => (
                <div key={index} className="p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-violet-500/30 transition-all text-center">
                  <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{category.title}</h3>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800">
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="text-white">Send Us a</span>
                <span className="text-violet-400"> Message</span>
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-violet-500 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-violet-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Subject</label>
                  <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-violet-500 focus:outline-none transition-colors">
                    <option>Technical Issue</option>
                    <option>Account & Billing</option>
                    <option>Feature Request</option>
                    <option>Training & Setup</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Priority</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="priority" value="low" className="mr-2 text-violet-600" />
                      <span className="text-gray-300">Low</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="priority" value="medium" className="mr-2 text-violet-600" defaultChecked />
                      <span className="text-gray-300">Medium</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="priority" value="high" className="mr-2 text-violet-600" />
                      <span className="text-gray-300">High</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="priority" value="urgent" className="mr-2 text-violet-600" />
                      <span className="text-gray-300">Urgent</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-violet-500 focus:outline-none transition-colors resize-none"
                    placeholder="Please describe your issue or question in detail..."
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit"
                    className="bg-violet-600 hover:bg-violet-700 text-white px-12 py-4 rounded-xl transition-all transform hover:scale-105 text-lg font-semibold"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Response Time Info */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800">
                <div className="text-2xl font-bold text-violet-400 mb-2">&lt; 5 min</div>
                <div className="text-white font-medium mb-1">Live Chat</div>
                <div className="text-gray-400 text-sm">Average response time</div>
              </div>
              <div className="p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800">
                <div className="text-2xl font-bold text-violet-400 mb-2">&lt; 2 hours</div>
                <div className="text-white font-medium mb-1">Email Support</div>
                <div className="text-gray-400 text-sm">During business hours</div>
              </div>
              <div className="p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800">
                <div className="text-2xl font-bold text-violet-400 mb-2">24/7</div>
                <div className="text-white font-medium mb-1">Phone Support</div>
                <div className="text-gray-400 text-sm">For urgent issues</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}