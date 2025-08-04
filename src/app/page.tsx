import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import ClerkDebug from '@/components/ClerkDebug'

export default async function Home() {
  const user = await currentUser()
  
  // If user is already signed in, redirect to home
  if (user) {
    redirect('/home')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Spotlight
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            AI Powered Webinar Streaming & Sales Platform
          </p>
          <p className="text-lg text-gray-400 mb-12">
            Create engaging webinars, connect with your audience, and grow your business with AI-powered features.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/sign-in" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link 
            href="/sign-up" 
            className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
          >
            Create Account
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">🎥 Live Streaming</h3>
            <p className="text-gray-300">Host live webinars with HD video and interactive features</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">🤖 AI Agents</h3>
            <p className="text-gray-300">Automate sales with intelligent AI voice assistants</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">💰 Monetization</h3>
            <p className="text-gray-300">Integrated payments and lead tracking systems</p>
          </div>
        </div>
      </div>
      <ClerkDebug />
    </div>
  )
}
