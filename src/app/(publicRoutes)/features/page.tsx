import Link from 'next/link'

export default function Features() {
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
            Powerful Features for
            <span className="text-violet-400 block">Modern Webinars</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Everything you need to create engaging, interactive, and profitable webinar experiences.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Features */}
            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[450px] flex flex-col">
              <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-white">AI Voice Assistants</h3>
                <p className="text-gray-400 mb-6 flex-grow">GPT-4 powered AI agents that engage with your audience in real-time.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Natural conversation flow</li>
                  <li>• Lead qualification</li>
                  <li>• Multi-language support</li>
                  <li>• Custom voice training</li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[450px] flex flex-col">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-white">4K Live Streaming</h3>
                <p className="text-gray-400 mb-6 flex-grow">Ultra-high definition streaming with global CDN delivery.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Adaptive bitrate streaming</li>
                  <li>• Multi-camera support</li>
                  <li>• Screen sharing</li>
                  <li>• Recording & playback</li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[450px] flex flex-col">
              <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-white">Audience Engagement</h3>
                <p className="text-gray-400 mb-6 flex-grow">Interactive tools to keep your audience engaged throughout.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Live polls & Q&A</li>
                  <li>• Breakout rooms</li>
                  <li>• Chat moderation</li>
                  <li>• Gamification</li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[450px] flex flex-col">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-white">Advanced Analytics</h3>
                <p className="text-gray-400 mb-6 flex-grow">Comprehensive insights into viewer behavior and engagement.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Real-time metrics</li>
                  <li>• Conversion tracking</li>
                  <li>• Audience insights</li>
                  <li>• ROI analysis</li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[450px] flex flex-col">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-white">Revenue Optimization</h3>
                <p className="text-gray-400 mb-6 flex-grow">Built-in tools to maximize your webinar revenue.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Payment processing</li>
                  <li>• Subscription management</li>
                  <li>• Automated invoicing</li>
                  <li>• Revenue analytics</li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[450px] flex flex-col">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-white">Enterprise Security</h3>
                <p className="text-gray-400 mb-6 flex-grow">Bank-grade security and compliance for your peace of mind.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• SOC 2 Type II certified</li>
                  <li>• End-to-end encryption</li>
                  <li>• SSO & SAML support</li>
                  <li>• GDPR compliant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gray-900 p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8">
              Experience all these powerful features with our free trial.
            </p>
            <Link href="/sign-up" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl transition-all text-lg font-semibold">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}