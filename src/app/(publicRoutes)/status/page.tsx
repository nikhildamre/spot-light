import Link from 'next/link'

export default function Status() {
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
            System
            <span className="text-violet-400 block">Status</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Real-time status and performance metrics for all Spotlight services and infrastructure.
          </p>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse mr-3"></div>
              <h2 className="text-2xl font-bold text-white">All Systems Operational</h2>
            </div>
            <p className="text-center text-gray-400">
              All services are running normally. Last updated: April 1, 2026 at 14:23 UTC
            </p>
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Service Status</h2>
          <div className="space-y-4">
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Webinar Platform</h3>
                    <p className="text-gray-400 text-sm">Core webinar hosting and streaming services</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">Operational</div>
                  <div className="text-gray-400 text-sm">99.99% uptime</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <div>
                    <h3 className="text-lg font-bold text-white">AI Voice Assistant</h3>
                    <p className="text-gray-400 text-sm">GPT-4 powered voice interactions and responses</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">Operational</div>
                  <div className="text-gray-400 text-sm">99.95% uptime</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Streaming Infrastructure</h3>
                    <p className="text-gray-400 text-sm">Global CDN and video delivery network</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">Operational</div>
                  <div className="text-gray-400 text-sm">99.98% uptime</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <div>
                    <h3 className="text-lg font-bold text-white">API Services</h3>
                    <p className="text-gray-400 text-sm">REST API and webhook delivery</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">Operational</div>
                  <div className="text-gray-400 text-sm">99.97% uptime</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Authentication</h3>
                    <p className="text-gray-400 text-sm">User login and security services</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">Operational</div>
                  <div className="text-gray-400 text-sm">99.99% uptime</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Database</h3>
                    <p className="text-gray-400 text-sm">Data storage and retrieval systems</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">Operational</div>
                  <div className="text-gray-400 text-sm">99.96% uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[200px] flex flex-col justify-center">
              <div className="text-4xl font-bold mb-2 text-green-400">99.9%</div>
              <div className="text-gray-400">Overall Uptime</div>
              <div className="text-gray-500 text-sm mt-2">Last 30 days</div>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[200px] flex flex-col justify-center">
              <div className="text-4xl font-bold mb-2 text-violet-400">45ms</div>
              <div className="text-gray-400">API Response Time</div>
              <div className="text-gray-500 text-sm mt-2">Global average</div>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[200px] flex flex-col justify-center">
              <div className="text-4xl font-bold mb-2 text-blue-400">150+</div>
              <div className="text-gray-400">Global Regions</div>
              <div className="text-gray-500 text-sm mt-2">CDN coverage</div>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[200px] flex flex-col justify-center">
              <div className="text-4xl font-bold mb-2 text-purple-400">0</div>
              <div className="text-gray-400">Active Incidents</div>
              <div className="text-gray-500 text-sm mt-2">Current status</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Recent Incidents</h2>
          <div className="space-y-6">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4 mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">No recent incidents</h3>
                    <p className="text-gray-400">All systems have been running smoothly. Our last incident was resolved on March 15, 2026.</p>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">
                  All clear
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gray-900 p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-6 text-white">Stay Updated</h2>
            <p className="text-gray-400 mb-8">
              Subscribe to status updates and get notified about any service disruptions or maintenance windows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-grow bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500"
              />
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl transition-all font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}