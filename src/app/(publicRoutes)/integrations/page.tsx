import Link from 'next/link'

export default function Integrations() {
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
            Connect with Your
            <span className="text-violet-400 block">Favorite Tools</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Seamlessly integrate Spotlight with your existing workflow and tools to maximize productivity.
          </p>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">CRM</h3>
              <p className="text-gray-400 text-sm">Sync leads and contacts</p>
            </div>

            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Email Marketing</h3>
              <p className="text-gray-400 text-sm">Automate campaigns</p>
            </div>

            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Analytics</h3>
              <p className="text-gray-400 text-sm">Track performance</p>
            </div>

            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Payments</h3>
              <p className="text-gray-400 text-sm">Process transactions</p>
            </div>
          </div>

          {/* Popular Integrations */}
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Popular Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Salesforce */}
            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[180px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                SF
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Salesforce</h3>
              <p className="text-gray-400 text-sm">CRM Integration</p>
            </div>

            {/* HubSpot */}
            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[180px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                HS
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">HubSpot</h3>
              <p className="text-gray-400 text-sm">Marketing Hub</p>
            </div>

            {/* Mailchimp */}
            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[180px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                MC
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Mailchimp</h3>
              <p className="text-gray-400 text-sm">Email Marketing</p>
            </div>

            {/* Zapier */}
            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[180px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                Z
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Zapier</h3>
              <p className="text-gray-400 text-sm">Automation</p>
            </div>

            {/* Stripe */}
            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[180px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                S
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Stripe</h3>
              <p className="text-gray-400 text-sm">Payments</p>
            </div>

            {/* Google Analytics */}
            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[180px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                GA
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Google Analytics</h3>
              <p className="text-gray-400 text-sm">Web Analytics</p>
            </div>

            {/* Slack */}
            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[180px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                SL
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Slack</h3>
              <p className="text-gray-400 text-sm">Team Communication</p>
            </div>

            {/* Microsoft Teams */}
            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[180px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                MT
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Microsoft Teams</h3>
              <p className="text-gray-400 text-sm">Collaboration</p>
            </div>

            {/* Zoom */}
            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[180px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                Z
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Zoom</h3>
              <p className="text-gray-400 text-sm">Video Conferencing</p>
            </div>

            {/* Calendly */}
            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[180px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                C
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Calendly</h3>
              <p className="text-gray-400 text-sm">Scheduling</p>
            </div>

            {/* Notion */}
            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[180px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                N
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Notion</h3>
              <p className="text-gray-400 text-sm">Workspace</p>
            </div>

            {/* Airtable */}
            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all h-[180px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                AT
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Airtable</h3>
              <p className="text-gray-400 text-sm">Database</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Why Integrate?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[300px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Streamline Workflow</h3>
              <p className="text-gray-400">Automate repetitive tasks and connect your favorite tools for seamless productivity.</p>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[300px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Better Insights</h3>
              <p className="text-gray-400">Get comprehensive analytics by combining data from all your integrated platforms.</p>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[300px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Increase Revenue</h3>
              <p className="text-gray-400">Convert more leads with automated follow-ups and personalized customer journeys.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gray-900 p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Connect?</h2>
            <p className="text-gray-400 mb-8">
              Start integrating your favorite tools with Spotlight today.
            </p>
            <Link href="/sign-up" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl transition-all text-lg font-semibold">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}