import Link from 'next/link'

export default function Press() {
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
              â† Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Press &
            <span className="text-violet-400 block">Media</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Latest news, press releases, and media resources about Spotlight's AI-powered webinar platform.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Latest Press Releases</h2>
          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between">
                <div className="mb-4 md:mb-0 flex-grow">
                  <div className="text-sm text-violet-400 mb-2">April 1, 2026</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Spotlight Raises $50M Series B to Revolutionize AI-Powered Webinars</h3>
                  <p className="text-gray-300 mb-4">Mumbai-based startup secures funding from leading VCs to expand AI voice assistant technology and global reach.</p>
                  <Link href="#" className="text-violet-400 hover:text-violet-300 font-semibold">Read More â†’</Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between">
                <div className="mb-4 md:mb-0 flex-grow">
                  <div className="text-sm text-violet-400 mb-2">March 15, 2026</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Spotlight Launches GPT-4 Integration for Real-Time Webinar Assistance</h3>
                  <p className="text-gray-300 mb-4">New AI features enable natural conversations with attendees, boosting engagement by 300%.</p>
                  <Link href="#" className="text-violet-400 hover:text-violet-300 font-semibold">Read More â†’</Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between">
                <div className="mb-4 md:mb-0 flex-grow">
                  <div className="text-sm text-violet-400 mb-2">February 28, 2026</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Spotlight Reaches 10,000+ Enterprise Customers Milestone</h3>
                  <p className="text-gray-300 mb-4">Platform now serves major corporations across 150+ countries with 99.9% uptime.</p>
                  <Link href="#" className="text-violet-400 hover:text-violet-300 font-semibold">Read More â†’</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Media Kit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">Brand Assets</h3>
                <p className="text-gray-400 mb-6">High-resolution logos, brand guidelines, and visual assets.</p>
                <Link href="#" className="text-violet-400 hover:text-violet-300 font-semibold">Download â†’</Link>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">Fact Sheet</h3>
                <p className="text-gray-400 mb-6">Company overview, key statistics, and executive bios.</p>
                <Link href="#" className="text-violet-400 hover:text-violet-300 font-semibold">Download â†’</Link>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">Product Screenshots</h3>
                <p className="text-gray-400 mb-6">High-quality screenshots and product demos.</p>
                <Link href="#" className="text-violet-400 hover:text-violet-300 font-semibold">Download â†’</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Press */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gray-900 p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-6 text-white">Media Inquiries</h2>
            <p className="text-gray-400 mb-8">
              For press inquiries, interviews, or additional information, please contact our media team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:press@spotlight.ai" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl transition-all text-lg font-semibold">
                Contact Press Team
              </Link>
              <Link href="#" className="border border-gray-700 hover:border-violet-500 text-white px-8 py-4 rounded-xl transition-all text-lg font-semibold">
                Schedule Interview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
