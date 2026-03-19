import React from 'react'
import { onAuthenticateUser } from '@/actions/auth'
import { redirect } from 'next/navigation'
import AIAgentsView from './_components/AIAgentsView'

const AIAgentsPage = async () => {
  const user = await onAuthenticateUser()
  
  if (!user.user) {
    redirect('/sign-in')
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">AI Agents</h1>
            <p className="text-muted-foreground">
              Manage your AI voice assistants for automated sales calls
            </p>
          </div>
        </div>
        
        <AIAgentsView user={user.user} />
      </div>
    </div>
  )
}

export default AIAgentsPage