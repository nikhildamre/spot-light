export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build the future of webinar technology with us. We are looking for passionate individuals who want to make a difference.
          </p>
        </div>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-violet-400">Our Culture</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in creating an environment where innovation thrives and every team member can reach their full potential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-6 flex-shrink-0">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-violet-400 flex-shrink-0">Innovation First</h3>
              <p className="text-gray-300 flex-grow">
                We encourage creative thinking and provide the resources to turn bold ideas into reality.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-6 flex-shrink-0">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-violet-400 flex-shrink-0">Collaborative Spirit</h3>
              <p className="text-gray-300 flex-grow">
                We work together across departments and time zones. Our diverse team brings different perspectives.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 h-[280px] flex flex-col">
              <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-6 flex-shrink-0">
                <span className="text-2xl">��</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-violet-400 flex-shrink-0">Growth Mindset</h3>
              <p className="text-gray-300 flex-grow">
                We invest in our people through continuous learning opportunities and career development paths.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20 bg-gray-950 p-8 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-violet-400">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our growing team and help shape the future of digital communication.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-violet-400 mb-2">Senior Frontend Developer</h3>
              <p className="text-gray-400 mb-4">Engineering • Full-time • Remote</p>
              <p className="text-gray-300 mb-6">
                Lead the development of our next-generation webinar platform using React, TypeScript, and modern web technologies.
              </p>
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Apply Now
              </button>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-violet-400 mb-2">Backend Engineer</h3>
              <p className="text-gray-400 mb-4">Engineering • Full-time • Mumbai/Remote</p>
              <p className="text-gray-300 mb-6">
                Build scalable backend systems that power millions of webinar sessions. Work with microservices and cloud infrastructure.
              </p>
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-violet-900 to-purple-900 p-12 rounded-xl">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Do not see a position that fits? We are always looking for talented individuals who share our passion for innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-violet-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Send Us Your Resume
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-violet-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact HR Team
            </button>
          </div>
          <div className="mt-8 text-gray-300">
            <p className="mb-2">📧 careers@spotlight.com</p>
            <p>📍 Mumbai, India & Remote Worldwide</p>
          </div>
        </section>
      </div>
    </div>
  )
}
