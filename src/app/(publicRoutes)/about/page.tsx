import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="relative z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Spotlight</span>
            </Link>
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">About Spotlight</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Revolutionizing the webinar industry with AI-powered technology, proudly made in Mumbai, India.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At Spotlight, we believe that every business deserves access to cutting-edge technology 
                that can transform their communication and engagement strategies. Our mission is to 
                democratize AI-powered webinar technology, making it accessible to businesses of all sizes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Founded in Mumbai, India, we're proud to be at the forefront of the AI revolution, 
                helping companies worldwide create more engaging, interactive, and profitable webinar experiences.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">10M+</div>
                  <div className="text-gray-400">Viewers Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">50K+</div>
                  <div className="text-gray-400">Webinars Hosted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">150+</div>
                  <div className="text-gray-400">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">99.9%</div>
                  <div className="text-gray-400">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Innovation</h3>
              <p className="text-gray-400">
                We constantly push the boundaries of what's possible with AI and streaming technology.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Customer Success</h3>
              <p className="text-gray-400">
                Your success is our success. We're committed to helping you achieve your business goals.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Security</h3>
              <p className="text-gray-400">
                Enterprise-grade security and compliance are built into everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="w-20 h-20 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                A
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Arjun Sharma</h3>
              <p className="text-violet-400 mb-4">CEO & Co-Founder</p>
              <p className="text-gray-400 text-sm">
                Former VP of Engineering at a leading SaaS company. 15+ years in AI and streaming technology.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                P
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Priya Patel</h3>
              <p className="text-violet-400 mb-4">CTO & Co-Founder</p>
              <p className="text-gray-400 text-sm">
                AI researcher with PhD from IIT Mumbai. Expert in machine learning and natural language processing.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                R
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Rahul Gupta</h3>
              <p className="text-violet-400 mb-4">VP of Product</p>
              <p className="text-gray-400 text-sm">
                Product leader with 12+ years at top tech companies. Passionate about user experience and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-gray-900 p-12 rounded-2xl border border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Have questions about our platform or want to learn more about how Spotlight can transform 
            your webinar strategy? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-3 text-gray-300">
              <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>hello@spotlight.ai</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 98765 43210</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}