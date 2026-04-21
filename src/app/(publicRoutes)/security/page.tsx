import Link from 'next/link'

export default function Security() {
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
            Enterprise-Grade
            <span className="text-violet-400 block">Security</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Your data security is our top priority. We implement the highest standards of security and compliance.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">End-to-End Encryption</h3>
                <p className="text-gray-400">All data is encrypted in transit and at rest using AES-256 encryption standards.</p>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">SOC 2 Type II Certified</h3>
                <p className="text-gray-400">Independently audited and certified for security, availability, and confidentiality.</p>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">SSO & SAML</h3>
                <p className="text-gray-400">Single Sign-On integration with your existing identity providers and SAML support.</p>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">Audit Logs</h3>
                <p className="text-gray-400">Comprehensive logging and monitoring of all system activities and user actions.</p>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">Global Infrastructure</h3>
                <p className="text-gray-400">Distributed infrastructure across multiple regions with 99.9% uptime guarantee.</p>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">Threat Detection</h3>
                <p className="text-gray-400">Advanced threat detection and prevention systems with real-time monitoring.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Compliance & Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 h-[200px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                SOC 2
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">SOC 2 Type II</h3>
              <p className="text-gray-400 text-sm">Security & Availability</p>
            </div>

            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 h-[200px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                GDPR
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">GDPR</h3>
              <p className="text-gray-400 text-sm">Data Protection</p>
            </div>

            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 h-[200px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                ISO
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">ISO 27001</h3>
              <p className="text-gray-400 text-sm">Information Security</p>
            </div>

            <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 h-[200px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                HIPAA
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">HIPAA</h3>
              <p className="text-gray-400 text-sm">Healthcare Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Security Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Data Protection</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AES-256 encryption for data at rest</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>TLS 1.3 encryption for data in transit</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regular security audits and penetration testing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automated backup and disaster recovery</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Access Control</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multi-factor authentication (MFA)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Role-based access control (RBAC)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Session management and timeout controls</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>IP whitelisting and geo-blocking</span>
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
            <h2 className="text-3xl font-bold mb-6 text-white">Questions About Security?</h2>
            <p className="text-gray-400 mb-8">
              Our security team is here to help. Contact us for detailed security documentation.
            </p>
            <Link href="#" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl transition-all text-lg font-semibold">
              Contact Security Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}