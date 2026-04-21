import Link from 'next/link'

export default function Help() {
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
            Help Center
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Find answers to common questions, tutorials, and get the support you need.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for help articles..."
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="#" className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all group h-[200px] flex flex-col">
              <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold mb-2 text-white">Getting Started</h3>
                <p className="text-gray-400 text-sm">Learn the basics of creating your first webinar</p>
              </div>
            </Link>

            <Link href="#" className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all group h-[200px] flex flex-col">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold mb-2 text-white">AI Assistant Setup</h3>
                <p className="text-gray-400 text-sm">Configure and customize your AI voice assistant</p>
              </div>
            </Link>

            <Link href="#" className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all group h-[200px] flex flex-col">
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold mb-2 text-white">Streaming Quality</h3>
                <p className="text-gray-400 text-sm">Optimize your video and audio settings</p>
              </div>
            </Link>

            <Link href="#" className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all group h-[200px] flex flex-col">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold mb-2 text-white">Billing & Payments</h3>
                <p className="text-gray-400 text-sm">Manage your subscription and billing</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              <button className="w-full p-6 text-left hover:bg-gray-800 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">How do I create my first webinar?</h3>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-400">
                  Creating your first webinar is easy! Simply log in to your dashboard, click "Create Webinar", 
                  fill in the basic details like title, description, and schedule, then configure your AI assistant 
                  and streaming settings. Our setup wizard will guide you through each step.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              <button className="w-full p-6 text-left hover:bg-gray-800 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Can I customize my AI assistant's voice?</h3>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-400">
                  Yes! You can choose from multiple voice options including different accents, languages, and speaking styles. 
                  Professional and Enterprise plans also allow you to train custom voices using your own audio samples.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              <button className="w-full p-6 text-left hover:bg-gray-800 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">What's the maximum number of attendees?</h3>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-400">
                  It depends on your plan: Starter supports up to 100 attendees, Professional up to 1,000, 
                  and Enterprise has unlimited attendees. All plans maintain the same high-quality streaming experience.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              <button className="w-full p-6 text-left hover:bg-gray-800 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">How do I integrate with my CRM?</h3>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-400">
                  We support direct integrations with popular CRMs like Salesforce, HubSpot, and Pipedrive. 
                  You can also use our API or Zapier integration to connect with any other system. 
                  Check our integrations page for the full list.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              <button className="w-full p-6 text-left hover:bg-gray-800 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Is my data secure?</h3>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-400">
                  Absolutely! We're SOC 2 Type II certified, GDPR compliant, and use enterprise-grade encryption. 
                  All data is encrypted in transit and at rest. We also offer SSO, SAML, and other enterprise security features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Still Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[320px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Live Chat</h3>
              <p className="text-gray-400 mb-6">Get instant help from our support team</p>
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl transition-all font-semibold">
                Start Chat
              </button>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[320px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Email Support</h3>
              <p className="text-gray-400 mb-6">Send us a detailed message</p>
              <Link href="mailto:support@spotlight.ai" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-all font-semibold inline-block">
                Send Email
              </Link>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[320px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Phone Support</h3>
              <p className="text-gray-400 mb-6">Call us for urgent issues</p>
              <Link href="tel:+919876543210" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl transition-all font-semibold inline-block">
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}