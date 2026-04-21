import Link from 'next/link'

export default function TermsOfService() {
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

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Terms of Service</h1>
        <p className="text-gray-400 mb-12">Last updated: March 22, 2026</p>

        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing and using Spotlight's services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not 
              use this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">2. Service Description</h2>
            <p className="text-gray-300 mb-4">
              Spotlight provides an AI-powered webinar platform that enables users to create, host, and 
              manage live webinars with advanced features including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>4K live streaming capabilities</li>
              <li>AI voice assistants powered by GPT-4</li>
              <li>Real-time audience engagement tools</li>
              <li>Advanced analytics and reporting</li>
              <li>Enterprise-grade security features</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">3. User Responsibilities</h2>
            <p className="text-gray-300 mb-4">Users are responsible for:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Maintaining the confidentiality of account credentials</li>
              <li>All activities that occur under their account</li>
              <li>Ensuring content complies with applicable laws and regulations</li>
              <li>Respecting intellectual property rights</li>
              <li>Not using the service for illegal or unauthorized purposes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">4. Payment Terms</h2>
            <p className="text-gray-300">
              Subscription fees are billed in advance on a monthly or annual basis. All fees are 
              non-refundable except as required by law. We reserve the right to change our pricing 
              with 30 days' notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">5. Intellectual Property</h2>
            <p className="text-gray-300">
              The service and its original content, features, and functionality are and will remain 
              the exclusive property of Spotlight and its licensors. The service is protected by 
              copyright, trademark, and other laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">6. Limitation of Liability</h2>
            <p className="text-gray-300">
              In no event shall Spotlight be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including without limitation, loss of profits, 
              data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">7. Termination</h2>
            <p className="text-gray-300">
              We may terminate or suspend your account and bar access to the service immediately, 
              without prior notice or liability, under our sole discretion, for any reason whatsoever 
              and without limitation, including but not limited to a breach of the Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">8. Contact Information</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 text-gray-300">
              <p>Email: legal@spotlight.ai</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: Mumbai, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
