import Link from 'next/link'

export default function Contact() {
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

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Get in
            <span className="text-violet-400 block">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Have questions about Spotlight? We'd love to hear from you. Reach out to our team for support, sales, or partnerships.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[300px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Sales</h3>
              <p className="text-gray-400 mb-6">Ready to get started? Talk to our sales team about pricing and plans.</p>
              <Link href="mailto:sales@spotlight.ai" className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl transition-all font-semibold">
                Contact Sales
              </Link>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[300px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Support</h3>
              <p className="text-gray-400 mb-6">Need help with your account or have technical questions?</p>
              <Link href="/help" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-all font-semibold">
                Get Support
              </Link>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[300px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Partners</h3>
              <p className="text-gray-400 mb-6">Interested in becoming a technology or reseller partner?</p>
              <Link href="/partners" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl transition-all font-semibold">
                Partner With Us
              </Link>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[300px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Press</h3>
              <p className="text-gray-400 mb-6">Media inquiries, press releases, and brand assets.</p>
              <Link href="/press" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all font-semibold">
                Media Kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">Mumbai (HQ)</h3>
                <p className="text-gray-400 mb-4">Bandra Kurla Complex<br />Mumbai, Maharashtra 400051<br />India</p>
                <p className="text-violet-400">+91 98765 43210</p>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">San Francisco</h3>
                <p className="text-gray-400 mb-4">SOMA District<br />San Francisco, CA 94105<br />United States</p>
                <p className="text-violet-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">London</h3>
                <p className="text-gray-400 mb-4">Canary Wharf<br />London E14 5AB<br />United Kingdom</p>
                <p className="text-violet-400">+44 20 7946 0958</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-900 p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl transition-all text-lg font-semibold">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}