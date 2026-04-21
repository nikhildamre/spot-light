import Link from 'next/link'

export default function Community() {
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
            Join Our
            <span className="text-violet-400 block">Community</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Connect with fellow webinar creators, share best practices, and get the most out of Spotlight's AI-powered platform.
          </p>
        </div>
      </section>

      {/* Community Platforms */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Connect With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[300px] flex flex-col">
              <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">Discord Server</h3>
                <p className="text-gray-400 mb-6">Join our active Discord community for real-time discussions, tips, and support from fellow creators.</p>
                <Link href="#" className="text-violet-400 hover:text-violet-300 font-semibold">Join Discord →</Link>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[300px] flex flex-col">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">Reddit Community</h3>
                <p className="text-gray-400 mb-6">Share your webinar experiences, ask questions, and discover new strategies on our subreddit.</p>
                <Link href="#" className="text-violet-400 hover:text-violet-300 font-semibold">Visit r/Spotlight →</Link>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[300px] flex flex-col">
              <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white">Twitter/X</h3>
                <p className="text-gray-400 mb-6">Follow us for product updates, webinar tips, and industry insights from the Spotlight team.</p>
                <Link href="#" className="text-violet-400 hover:text-violet-300 font-semibold">Follow @SpotlightAI →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Community Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[200px] flex flex-col justify-center">
              <div className="text-4xl font-bold mb-2 text-violet-400">25K+</div>
              <div className="text-gray-400">Community Members</div>
              <div className="text-gray-500 text-sm mt-2">Across all platforms</div>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[200px] flex flex-col justify-center">
              <div className="text-4xl font-bold mb-2 text-purple-400">500+</div>
              <div className="text-gray-400">Daily Discussions</div>
              <div className="text-gray-500 text-sm mt-2">Questions & answers</div>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[200px] flex flex-col justify-center">
              <div className="text-4xl font-bold mb-2 text-pink-400">150+</div>
              <div className="text-gray-400">Countries</div>
              <div className="text-gray-500 text-sm mt-2">Global community</div>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 h-[200px] flex flex-col justify-center">
              <div className="text-4xl font-bold mb-2 text-blue-400">95%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
              <div className="text-gray-500 text-sm mt-2">Community feedback</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Community Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Be Respectful</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Treat all members with kindness and respect</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No harassment, discrimination, or hate speech</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Keep discussions constructive and helpful</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Respect different perspectives and experiences</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Share Knowledge</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Share your webinar tips and best practices</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Help others solve problems and learn</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Provide detailed context when asking questions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Credit sources and avoid plagiarism</span>
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
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Connect?</h2>
            <p className="text-gray-400 mb-8">
              Join thousands of webinar creators sharing knowledge, tips, and building amazing experiences together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl transition-all text-lg font-semibold">
                Join Discord
              </Link>
              <Link href="#" className="border border-gray-700 hover:border-violet-500 text-white px-8 py-4 rounded-xl transition-all text-lg font-semibold">
                Follow on Twitter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}