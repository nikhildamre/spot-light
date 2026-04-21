import Link from 'next/link'

export default function API() {
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
            Powerful API for
            <span className="text-violet-400 block">Developers</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Build custom integrations and extend Spotlight's capabilities with our comprehensive REST API.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl transition-all font-semibold">
              View Documentation
            </Link>
            <Link href="#" className="border border-gray-700 hover:border-violet-500 text-white px-8 py-4 rounded-xl transition-all font-semibold">
              Get API Key
            </Link>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">RESTful API</h3>
                <p className="text-gray-400">Clean, intuitive REST API with JSON responses and standard HTTP status codes.</p>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">Secure Authentication</h3>
                <p className="text-gray-400">OAuth 2.0 and API key authentication with rate limiting and security monitoring.</p>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">Real-time Webhooks</h3>
                <p className="text-gray-400">Get instant notifications about webinar events, registrations, and user actions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Quick Start Example</h2>
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Create a Webinar</h3>
              <span className="text-sm text-gray-400">POST /api/v1/webinars</span>
            </div>
            <pre className="bg-black p-6 rounded-xl overflow-x-auto">
              <code className="text-green-400 text-sm">
{`curl -X POST https://api.spotlight.ai/v1/webinars \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "My Awesome Webinar",
    "description": "Learn about AI-powered webinars",
    "scheduled_at": "2026-04-01T15:00:00Z",
    "duration": 3600,
    "settings": {
      "max_attendees": 1000,
      "enable_ai_assistant": true,
      "enable_recording": true
    }
  }'`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Available Endpoints</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 h-[300px] flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-white">Webinars</h3>
              <ul className="space-y-3 text-gray-300 flex-grow">
                <li className="flex justify-between">
                  <span>GET /webinars</span>
                  <span className="text-gray-500">List webinars</span>
                </li>
                <li className="flex justify-between">
                  <span>POST /webinars</span>
                  <span className="text-gray-500">Create webinar</span>
                </li>
                <li className="flex justify-between">
                  <span>GET /webinars/:id</span>
                  <span className="text-gray-500">Get webinar</span>
                </li>
                <li className="flex justify-between">
                  <span>PUT /webinars/:id</span>
                  <span className="text-gray-500">Update webinar</span>
                </li>
                <li className="flex justify-between">
                  <span>DELETE /webinars/:id</span>
                  <span className="text-gray-500">Delete webinar</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 h-[300px] flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-white">Attendees</h3>
              <ul className="space-y-3 text-gray-300 flex-grow">
                <li className="flex justify-between">
                  <span>GET /attendees</span>
                  <span className="text-gray-500">List attendees</span>
                </li>
                <li className="flex justify-between">
                  <span>POST /attendees</span>
                  <span className="text-gray-500">Register attendee</span>
                </li>
                <li className="flex justify-between">
                  <span>GET /attendees/:id</span>
                  <span className="text-gray-500">Get attendee</span>
                </li>
                <li className="flex justify-between">
                  <span>PUT /attendees/:id</span>
                  <span className="text-gray-500">Update attendee</span>
                </li>
                <li className="flex justify-between">
                  <span>DELETE /attendees/:id</span>
                  <span className="text-gray-500">Remove attendee</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 h-[300px] flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-white">Analytics</h3>
              <ul className="space-y-3 text-gray-300 flex-grow">
                <li className="flex justify-between">
                  <span>GET /analytics/webinars/:id</span>
                  <span className="text-gray-500">Webinar stats</span>
                </li>
                <li className="flex justify-between">
                  <span>GET /analytics/engagement</span>
                  <span className="text-gray-500">Engagement data</span>
                </li>
                <li className="flex justify-between">
                  <span>GET /analytics/revenue</span>
                  <span className="text-gray-500">Revenue metrics</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 h-[300px] flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-white">AI Assistant</h3>
              <ul className="space-y-3 text-gray-300 flex-grow">
                <li className="flex justify-between">
                  <span>GET /ai-assistants</span>
                  <span className="text-gray-500">List assistants</span>
                </li>
                <li className="flex justify-between">
                  <span>POST /ai-assistants</span>
                  <span className="text-gray-500">Create assistant</span>
                </li>
                <li className="flex justify-between">
                  <span>PUT /ai-assistants/:id</span>
                  <span className="text-gray-500">Update assistant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gray-900 p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Build?</h2>
            <p className="text-gray-400 mb-8">
              Get started with our API today and build amazing integrations.
            </p>
            <Link href="#" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl transition-all text-lg font-semibold">
              Get API Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}