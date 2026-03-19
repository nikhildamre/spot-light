'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, XCircle, AlertCircle, Loader2, RefreshCw } from 'lucide-react'
import { getVapiAssistants } from '@/actions/vapi'
import { testStreamCredentials } from '@/actions/streamTest'

type StatusItem = {
  name: string
  status: 'checking' | 'success' | 'warning' | 'error'
  message: string
  details?: string
}

const SystemStatusCheck = () => {
  const [statusItems, setStatusItems] = useState<StatusItem[]>([
    { name: 'Environment Variables', status: 'checking', message: 'Checking configuration...' },
    { name: 'VAPI Connection', status: 'checking', message: 'Testing API connection...' },
    { name: 'Stream Credentials', status: 'checking', message: 'Testing Stream API...' },
    { name: 'Assistant Configuration', status: 'checking', message: 'Verifying assistants...' },
    { name: 'Browser Compatibility', status: 'checking', message: 'Checking browser support...' },
    { name: 'Microphone Access', status: 'checking', message: 'Testing audio permissions...' }
  ])
  
  const [isRunning, setIsRunning] = useState(false)

  const updateStatus = (name: string, status: StatusItem['status'], message: string, details?: string) => {
    setStatusItems(prev => prev.map(item => 
      item.name === name ? { ...item, status, message, details } : item
    ))
  }

  const runSystemCheck = async () => {
    setIsRunning(true)
    
    // Reset all to checking
    setStatusItems(prev => prev.map(item => ({ ...item, status: 'checking' as const })))

    // 1. Check Environment Variables
    const vapiPrivateKey = process.env.VAPI_PRIVATE_KEY || process.env.VAPI_API_KEY
    const vapiPublicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY
    const streamApiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY
    const streamSecret = process.env.STREAM_API_SECRET
    
    if (!vapiPrivateKey || !vapiPublicKey || !streamApiKey || !streamSecret) {
      updateStatus('Environment Variables', 'error', 'Missing API keys', 
        `VAPI Private: ${vapiPrivateKey ? '✅' : '❌'}, VAPI Public: ${vapiPublicKey ? '✅' : '❌'}, Stream Key: ${streamApiKey ? '✅' : '❌'}, Stream Secret: ${streamSecret ? '✅' : '❌'}`)
    } else {
      updateStatus('Environment Variables', 'success', 'All keys configured', 
        `VAPI: ✅, Stream: ✅`)
    }

    await new Promise(resolve => setTimeout(resolve, 500))

    // 2. Test VAPI Connection
    try {
      const result = await getVapiAssistants()
      if (result.success) {
        updateStatus('VAPI Connection', 'success', 'API connection working', 
          `Found ${result.assistants?.length || 0} assistants`)
      } else {
        updateStatus('VAPI Connection', 'error', 'API connection failed', result.error)
      }
    } catch (error: any) {
      updateStatus('VAPI Connection', 'error', 'Connection error', error.message)
    }

    await new Promise(resolve => setTimeout(resolve, 500))

    // 3. Test Stream Credentials
    try {
      const streamResult = await testStreamCredentials()
      if (streamResult.success) {
        updateStatus('Stream Credentials', 'success', 'Stream API working', 
          `Token generation successful`)
      } else {
        updateStatus('Stream Credentials', 'error', 'Stream API failed', streamResult.error)
      }
    } catch (error: any) {
      updateStatus('Stream Credentials', 'error', 'Stream connection error', error.message)
    }

    await new Promise(resolve => setTimeout(resolve, 500))

    // 4. Check Assistant Configuration
    try {
      const result = await getVapiAssistants()
      if (result.success && result.assistants && result.assistants.length > 0) {
        const assistant = result.assistants[0]
        const hasModel = assistant.model && assistant.model.model
        const hasVoice = assistant.voice && assistant.voice.provider
        
        if (hasModel && hasVoice) {
          updateStatus('Assistant Configuration', 'success', 'Assistants properly configured', 
            `Model: ${assistant.model.model}, Voice: ${assistant.voice.provider}`)
        } else {
          updateStatus('Assistant Configuration', 'warning', 'Assistant config incomplete', 
            `Model: ${hasModel ? '✅' : '❌'}, Voice: ${hasVoice ? '✅' : '❌'}`)
        }
      } else {
        updateStatus('Assistant Configuration', 'warning', 'No assistants found', 
          'Create an assistant to enable voice calls')
      }
    } catch (error: any) {
      updateStatus('Assistant Configuration', 'error', 'Failed to check assistants', error.message)
    }

    await new Promise(resolve => setTimeout(resolve, 500))

    // 5. Browser Compatibility
    const hasWebRTC = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
    const hasAudioContext = !!(window.AudioContext || (window as any).webkitAudioContext)
    const isHTTPS = location.protocol === 'https:' || location.hostname === 'localhost'
    
    if (hasWebRTC && hasAudioContext && isHTTPS) {
      updateStatus('Browser Compatibility', 'success', 'Browser fully supported', 
        'WebRTC, AudioContext, and secure context available')
    } else {
      updateStatus('Browser Compatibility', 'warning', 'Limited browser support', 
        `WebRTC: ${hasWebRTC ? '✅' : '❌'}, Audio: ${hasAudioContext ? '✅' : '❌'}, HTTPS: ${isHTTPS ? '✅' : '❌'}`)
    }

    await new Promise(resolve => setTimeout(resolve, 500))

    // 6. Test Microphone Access
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      stream.getTracks().forEach(track => track.stop()) // Clean up
      updateStatus('Microphone Access', 'success', 'Microphone access granted', 
        'Audio input is available for voice calls')
    } catch (error: any) {
      if (error.name === 'NotAllowedError') {
        updateStatus('Microphone Access', 'warning', 'Microphone permission denied', 
          'Grant microphone access to enable voice calls')
      } else {
        updateStatus('Microphone Access', 'error', 'Microphone access failed', error.message)
      }
    }

    setIsRunning(false)
  }

  useEffect(() => {
    runSystemCheck()
  }, [])

  const getStatusIcon = (status: StatusItem['status']) => {
    switch (status) {
      case 'checking':
        return <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      case 'error':
        return <XCircle className="h-4 w-4 text-red-500" />
    }
  }

  const getStatusBadge = (status: StatusItem['status']) => {
    switch (status) {
      case 'checking':
        return <Badge variant="secondary">Checking</Badge>
      case 'success':
        return <Badge variant="default" className="bg-green-500">Ready</Badge>
      case 'warning':
        return <Badge variant="secondary" className="bg-yellow-500">Warning</Badge>
      case 'error':
        return <Badge variant="destructive">Error</Badge>
    }
  }

  const overallStatus = statusItems.every(item => item.status === 'success') ? 'success' :
                      statusItems.some(item => item.status === 'error') ? 'error' : 'warning'

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              {getStatusIcon(overallStatus)}
              <span>System Status Check</span>
            </CardTitle>
            <CardDescription>
              Verify VAPI integration and system readiness
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={runSystemCheck}
            disabled={isRunning}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isRunning ? 'animate-spin' : ''}`} />
            Recheck
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {statusItems.map((item) => (
          <div key={item.name} className="flex items-start space-x-3 p-3 rounded-lg border">
            {getStatusIcon(item.status)}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">{item.name}</h4>
                {getStatusBadge(item.status)}
              </div>
              <p className="text-sm text-muted-foreground mt-1">{item.message}</p>
              {item.details && (
                <p className="text-xs text-muted-foreground mt-1 font-mono bg-muted/50 p-2 rounded">
                  {item.details}
                </p>
              )}
            </div>
          </div>
        ))}

        {/* Overall Status Summary */}
        <div className="mt-6 p-4 rounded-lg bg-muted/50">
          <h4 className="font-semibold mb-2 flex items-center space-x-2">
            {getStatusIcon(overallStatus)}
            <span>Overall Status</span>
          </h4>
          {overallStatus === 'success' && (
            <p className="text-sm text-green-600">
              ✅ System is ready for VAPI voice calls. All components are working correctly.
            </p>
          )}
          {overallStatus === 'warning' && (
            <p className="text-sm text-yellow-600">
              ⚠️ System has some warnings but should work. Check items above for details.
            </p>
          )}
          {overallStatus === 'error' && (
            <p className="text-sm text-red-600">
              ❌ System has critical errors. Fix the issues above before testing voice calls.
            </p>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20">
          <h4 className="font-semibold mb-2">Next Steps</h4>
          <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
            <li>If all checks pass, try the "Quick Test" on an AI agent</li>
            <li>Expect calls to end after ~30 seconds (normal for free VAPI tier)</li>
            <li>Focus on testing speech detection and AI responses</li>
            <li>Consider upgrading VAPI account for longer call durations</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

export default SystemStatusCheck