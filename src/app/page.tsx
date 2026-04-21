import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Home() {
  const user = await currentUser()
  
  if (user) {
    redirect('/home')
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-black"></div>
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      <div className="fixed inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Navigation */}
      <nav className="relative z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Spotlight</span>
                <div className="text-xs text-violet-400 font-medium tracking-wider">AI-POWERED PLATFORM</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
              <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/sign-in" className="text-gray-300 hover:text-white transition-colors">Sign In</Link>
              <Link href="/sign-up" className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-xl transition-all shadow-lg">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gray-900 border border-violet-500/30 rounded-full text-violet-300 text-sm font-medium mb-8 backdrop-blur-sm shadow-lg">
              <span className="w-2 h-2 bg-violet-400 rounded-full mr-3 animate-ping"></span>
              <span className="w-2 h-2 bg-violet-400 rounded-full mr-3 absolute animate-pulse"></span>
              <span className="text-violet-300 font-semibold">Now with GPT-4 AI Integration</span>
              <span className="ml-3 px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">LIVE</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-white">
                Transform Your
              </span>
              <br />
              <span className="text-violet-400">
                Webinar Experience
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Create <span className="text-violet-400 font-semibold">stunning live webinars</span> with AI-powered voice assistants, 
              <span className="text-purple-400 font-semibold"> real-time audience engagement</span>, 
              and <span className="text-pink-400 font-semibold">enterprise-grade streaming</span> technology. 
              Convert viewers into customers effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/sign-up" className="group relative bg-violet-600 hover:bg-violet-700 text-white px-12 py-5 rounded-2xl transition-all shadow-2xl transform hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center space-x-3 text-lg font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Start Free Trial</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link href="#demo" className="group relative border-2 border-gray-700 hover:border-violet-500 text-white px-12 py-5 rounded-2xl transition-all hover:bg-violet-500/10 backdrop-blur-sm">
                <span className="flex items-center space-x-3 text-lg font-semibold">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h10a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2z" />
                  </svg>
                  <span>Watch Demo</span>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </span>
              </Link>
            </div>
            
            {/* Trusted By */}
            <div className="text-center">
              <p className="text-slate-400 text-sm mb-8 font-medium">Trusted by 10,000+ companies worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                  <span className="text-2xl font-bold text-slate-600">Microsoft</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <span className="text-2xl font-bold text-slate-600">Salesforce</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">H</span>
                  </div>
                  <span className="text-2xl font-bold text-slate-600">HubSpot</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Z</span>
                  </div>
                  <span className="text-2xl font-bold text-slate-600">Zoom</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <span className="text-2xl font-bold text-slate-600">Stripe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-24">
            <div className="text-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all">
              <div className="text-4xl font-bold mb-2 text-violet-400">10M+</div>
              <div className="text-gray-400">Viewers Reached</div>
            </div>
            <div className="text-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all">
              <div className="text-4xl font-bold mb-2 text-violet-400">50K+</div>
              <div className="text-gray-400">Webinars Hosted</div>
            </div>
            <div className="text-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all">
              <div className="text-4xl font-bold mb-2 text-violet-400">99.9%</div>
              <div className="text-gray-400">Uptime SLA</div>
            </div>
            <div className="text-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all">
              <div className="text-4xl font-bold mb-2 text-violet-400">150+</div>
              <div className="text-gray-400">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-32 px-6 bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">
                What Our Customers
              </span>
              <br />
              <span className="text-violet-400">
                Are Saying
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their business with Spotlight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-8 bg-black border border-gray-800 rounded-2xl hover:border-violet-500/30 transition-all">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Spotlight has completely transformed our webinar strategy. The AI voice assistant handles customer queries in real-time, and our conversion rates have increased by 300%. It's like having a sales team that never sleeps."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-4">
                  <div className="text-white font-semibold">Sarah Johnson</div>
                  <div className="text-gray-400 text-sm">CEO, TechStart Inc.</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 bg-black border border-gray-800 rounded-2xl hover:border-violet-500/30 transition-all">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "The streaming quality is phenomenal - 4K without any lag, even with 10,000+ viewers. The breakout rooms feature has made our training sessions incredibly interactive. Best investment we've made this year."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-4">
                  <div className="text-white font-semibold">Michael Chen</div>
                  <div className="text-gray-400 text-sm">Head of Marketing, GlobalCorp</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-8 bg-black border border-gray-800 rounded-2xl hover:border-violet-500/30 transition-all">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "From Mumbai to global reach - Spotlight helped us scale our educational platform internationally. The analytics are incredibly detailed, and the AI insights have improved our content strategy significantly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div className="ml-4">
                  <div className="text-white font-semibold">Priya Sharma</div>
                  <div className="text-gray-400 text-sm">Founder, EduTech Solutions</div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="p-8 bg-black border border-gray-800 rounded-2xl hover:border-violet-500/30 transition-all">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "The security features are enterprise-grade. SOC 2 compliance was crucial for our financial services webinars. The customer support team is exceptional - they helped us migrate from our old platform seamlessly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="ml-4">
                  <div className="text-white font-semibold">Robert Williams</div>
                  <div className="text-gray-400 text-sm">CTO, FinanceFirst</div>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="p-8 bg-black border border-gray-800 rounded-2xl hover:border-violet-500/30 transition-all">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "ROI was immediate. Within the first month, we generated 5x more leads than our previous webinar solution. The AI agent qualification feature saves our sales team hours every day."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-4">
                  <div className="text-white font-semibold">Amanda Davis</div>
                  <div className="text-gray-400 text-sm">VP Sales, SaaS Solutions Ltd.</div>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="p-8 bg-black border border-gray-800 rounded-2xl hover:border-violet-500/30 transition-all">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Perfect for our healthcare webinars. HIPAA compliance, crystal clear audio for medical presentations, and the recording quality is broadcast-level. Our medical conferences have never been more professional."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  D
                </div>
                <div className="ml-4">
                  <div className="text-white font-semibold">Dr. James Miller</div>
                  <div className="text-gray-400 text-sm">Medical Director, HealthCare Plus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">
                Everything You Need to
              </span>
              <br />
              <span className="text-violet-400">
                Scale Your Business
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Powerful features designed for modern businesses who want to create engaging webinars that convert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {[
              {
                icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                title: "4K Live Streaming",
                description: "Ultra-high definition streaming with adaptive bitrate, multi-camera support, and global CDN delivery for flawless viewing experience."
              },
              {
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                title: "AI Voice Assistants",
                description: "GPT-4 powered AI agents that engage with your audience, answer questions, qualify leads, and drive conversions in real-time."
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
                title: "Revenue Optimization",
                description: "Built-in payment processing, subscription management, automated invoicing, and advanced analytics to maximize your revenue."
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Audience Engagement",
                description: "Interactive polls, Q&A sessions, breakout rooms, gamification, and real-time sentiment analysis to keep viewers engaged."
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "Advanced Analytics",
                description: "Comprehensive insights with viewer behavior tracking, engagement metrics, conversion funnels, and ROI analysis."
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Enterprise Security",
                description: "SOC 2 Type II certified with end-to-end encryption, SSO, SAML, GDPR compliance, and comprehensive audit logs."
              }
            ].map((feature, index) => (
              <div key={index} className="group p-8 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all duration-300 hover:bg-gray-900/50">
                <div className="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative p-16 bg-gray-900 backdrop-blur-sm rounded-3xl border border-violet-500/20 text-center overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">
                  Ready to Transform
                </span>
                <br />
                <span className="text-violet-400">
                  Your Business?
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Join thousands of companies using Spotlight to create engaging webinars, 
                convert more leads, and scale their revenue with AI-powered automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/sign-up" className="bg-violet-600 hover:bg-violet-700 text-white px-12 py-5 rounded-xl transition-all shadow-2xl transform hover:scale-105 text-lg font-semibold">
                  Start Free Trial
                </Link>
                <Link href="/sign-in" className="border-2 border-gray-700 hover:border-violet-500 text-white px-12 py-5 rounded-xl transition-all hover:bg-violet-500/10 text-lg font-semibold">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Footer */}
      <footer className="relative z-10 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-3xl font-bold text-white">Spotlight</span>
                  <div className="text-sm text-violet-400 font-medium tracking-wider">AI-POWERED PLATFORM</div>
                </div>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Spotlight is the world's most advanced AI-powered webinar platform, proudly made in Mumbai, India. 
                Trusted by over 10,000 companies worldwide to create engaging live experiences that convert viewers into customers. 
                Transform your business with cutting-edge AI technology and enterprise-grade streaming solutions.
              </p>
              
              {/* Company Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-gray-400">
                  <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Mumbai, India • San Francisco, CA • London, UK</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hello@spotlight.ai</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 98765 43210</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-violet-600 rounded-xl flex items-center justify-center transition-all transform hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-violet-600 rounded-xl flex items-center justify-center transition-all transform hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-violet-600 rounded-xl flex items-center justify-center transition-all transform hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-violet-600 rounded-xl flex items-center justify-center transition-all transform hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-white font-semibold mb-6">Product</h3>
              <ul className="space-y-4">
                <li><Link href="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/api" className="text-gray-400 hover:text-white transition-colors">API</Link></li>
                <li><Link href="/integrations" className="text-gray-400 hover:text-white transition-colors">Integrations</Link></li>
                <li><Link href="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/press" className="text-gray-400 hover:text-white transition-colors">Press</Link></li>
                <li><Link href="/partners" className="text-gray-400 hover:text-white transition-colors">Partners</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-6">Support</h3>
              <ul className="space-y-4">
                <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/api" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/status" className="text-gray-400 hover:text-white transition-colors">Status</Link></li>
                <li><Link href="/community" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
                <li><Link href="/contact-support" className="text-gray-400 hover:text-white transition-colors">Contact Support</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-800 mt-20 pt-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
                <p className="text-slate-400 font-medium">© 2026 Spotlight AI Technologies Inc. All rights reserved.</p>
                <div className="flex flex-wrap justify-center md:justify-start space-x-6">
                  <Link href="/privacy" className="text-gray-400 hover:text-violet-400 transition-colors text-sm font-medium">Privacy Policy</Link>
                  <Link href="/terms" className="text-gray-400 hover:text-violet-400 transition-colors text-sm font-medium">Terms of Service</Link>
                  <Link href="#" className="text-gray-400 hover:text-violet-400 transition-colors text-sm font-medium">Cookie Policy</Link>
                  <Link href="#" className="text-gray-400 hover:text-violet-400 transition-colors text-sm font-medium">GDPR</Link>
                  <Link href="#" className="text-gray-400 hover:text-violet-400 transition-colors text-sm font-medium">Security</Link>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-slate-400 text-sm">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></span>
                  <span className="font-medium">All systems operational</span>
                </div>
                <div className="text-slate-500 text-sm">•</div>
                <div className="text-slate-400 text-sm font-medium">99.9% uptime</div>
              </div>
            </div>
            
            {/* Additional Footer Info */}
            <div className="mt-8 pt-8 border-t border-gray-800/50 text-center">
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
                <span>SOC 2 Type II Certified</span>
                <span>•</span>
                <span>GDPR Compliant</span>
                <span>•</span>
                <span>ISO 27001 Certified</span>
                <span>•</span>
                <span>Enterprise Grade Security</span>
                <span>•</span>
                <span>24/7 Support Available</span>
              </div>
              <p className="mt-4 text-xs text-gray-600">
                Proudly Made in Mumbai, India ❤️ • Powered by GPT-4 & Advanced AI • Serving customers in 150+ countries
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}