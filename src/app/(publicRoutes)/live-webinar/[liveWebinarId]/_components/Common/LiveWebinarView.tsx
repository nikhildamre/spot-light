"use client"
import { WebinarWithPresenter } from '@/lib/type'
import { MessageSquare, Users, Bot, Video, Monitor } from 'lucide-react'
import { StreamChat } from 'stream-chat'
import { ParticipantView, useCallStateHooks } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { CtaTypeEnum } from '@prisma/client'
import { generateChatToken } from '@/actions/stream'
import WebinarAIAgent from '@/components/WebinarAIAgent'
import MediaControls from '@/components/MediaControls'
import { getWebinarWithAIAgent } from '@/actions/webinarAgent'

type Props = {
  showChat: boolean
  setShowChat: (show: boolean) => void
  webinar: WebinarWithPresenter
  isHost?: boolean
  username: string
  userId: string
  userToken: string
}

const LiveWebinarView = ({
  showChat,
  setShowChat,
  webinar,
  isHost,
  username,
  userId,
}: Props) => {
    const { useParticipantCount, useParticipants } = useCallStateHooks()
    const participants = useParticipants()
    const viewerCount = useParticipantCount()

    const [chatClient, setChatClient] = useState<StreamChat | null>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [channel, setChannel] = useState<any>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [messages, setMessages] = useState<any[]>([])
    const [showCtaDialog, setShowCtaDialog] = useState(false)
    const [showAIPanel, setShowAIPanel] = useState(false)
    const [showBreakoutPanel, setShowBreakoutPanel] = useState(false)
    const [aiAgent, setAiAgent] = useState<any>(null)
    const [isScreenSharing, setIsScreenSharing] = useState(false)
    const [showMediaControls, setShowMediaControls] = useState(false)
    const [viewMode, setViewMode] = useState<'single' | 'grid' | 'speaker'>('single')
    const messagesEndRef = React.useRef<HTMLDivElement>(null)
    
    // Get the host participant (the one who is broadcasting)
    const hostParticipant = participants.find(p => 
        p.publishedTracks.length > 0 || 
        p.userId === webinar.presenterId
    ) || participants[0]

    // Get participants with video streams (simplified check)
    const participantsWithVideo = participants.filter(p => 
        p.publishedTracks.length > 0
    )

    // For screen sharing, we'll use a simpler approach for now
    const screenSharingParticipant: any = null // Will be implemented when screen sharing is active

    const handleScreenShare = (isSharing: boolean) => {
        setIsScreenSharing(isSharing)
        if (isSharing) {
            setViewMode('single') // Switch to single view when screen sharing
        }
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    React.useEffect(() => {
        scrollToBottom()
    }, [messages])

    // Load AI agent and breakout rooms
    useEffect(() => {
        const loadWebinarData = async () => {
            try {
                console.log('🤖 Loading AI agent for webinar:', webinar.id)
                const result = await getWebinarWithAIAgent(webinar.id)
                console.log('🤖 AI agent result:', result)
                
                if (result.success && result.aiAgent) {
                    console.log('🤖 AI agent found:', result.aiAgent.name)
                    setAiAgent(result.aiAgent)
                } else {
                    console.log('🤖 No AI agent assigned to this webinar')
                }
            } catch (error) {
                console.error('Error loading webinar data:', error)
            }
        }

        loadWebinarData()
    }, [webinar.id])

    const handleAIResponse = (message: string) => {
        // Send AI response to chat
        if (channel) {
            channel.sendMessage({
                text: `🤖 AI Agent: ${message}`,
                user: {
                    id: 'ai-agent',
                    name: aiAgent?.name || 'AI Agent'
                }
            })
        }
    }

    const handleCTAButtonClick = async () => {
        if (!channel) return
        console.log('CTA button clicked', channel)
        
        // Send event to all participants
        await channel.sendEvent({
            type: 'open_cta_dialog',
        })
        
        // Also show dialog for host
        setShowCtaDialog(true)
    }
        useEffect(() => {
        const initChat = async () => {
            try {
                // Generate a fresh chat token for this user
                const tokenResult = await generateChatToken(userId)
                
                if (!tokenResult.success) {
                    console.error('Failed to generate chat token:', tokenResult.error)
                    return
                }

                const client = StreamChat.getInstance(tokenResult.apiKey!)

                // Check if user is already connected with the same ID
                if (client.userID !== userId) {
                    // Disconnect any existing user first
                    if (client.userID) {
                        await client.disconnectUser()
                    }
                    
                    await client.connectUser(
                        {
                            id: userId,
                            name: username,
                        },
                        tokenResult.token
                    )
                }

                const channel = client.channel('livestream', webinar.id, {
                    name: webinar.title,
                })

                await channel.watch()

                // Get existing messages
                const state = await channel.query({
                    messages: { limit: 50 }
                })
                setMessages(state.messages || [])

                setChatClient(client)
                setChannel(channel)
            } catch (error) {
                console.error('Error initializing chat:', error)
            }
        }

        if (userId && username) {
            initChat()
        }

        return () => {
            if (chatClient && chatClient.userID) {
                chatClient.disconnectUser().catch((err: any) => {
                    console.error('Error disconnecting user:', err)
                })
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [userId, username, webinar.id, webinar.title])

        useEffect(() => {
        if (chatClient && channel) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const handleEvent = (event: any) => {
                if (event.type === 'message.new') {
                    setMessages((prev) => [...prev, event.message])
                } else if (event.type === 'open_cta_dialog') {
                    setShowCtaDialog(true)
                    console.log('Open CTA dialog')
                }
            }

            channel.on(handleEvent)

            return () => {
                channel.off(handleEvent)
            }
        }
        }, [chatClient, channel, isHost])

        // if (!chatClient || !channel) return null


  return (
    <div className="flex flex-col w-full h-screen max-h-screen overflow-hidden bg-background text-foreground">
    <div className="py-2 px-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center space-x-2">
        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive animate-pulse"></span>
            </span>
            LIVE
        </div>
        </div>

        <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1 bg-muted/50 px-3 py-1 rounded-full">
            <Users size={16} />
            <span className="text-sm">{viewerCount}</span>
        </div>
        
        {/* View Mode Toggle */}
        {participantsWithVideo.length > 1 && (
            <div className="flex items-center space-x-1 bg-muted/50 rounded-full p-1">
                <button
                    onClick={() => setViewMode('single')}
                    className={`px-2 py-1 rounded-full text-xs ${
                        viewMode === 'single' ? 'bg-primary text-primary-foreground' : ''
                    }`}
                >
                    Single
                </button>
                <button
                    onClick={() => setViewMode('grid')}
                    className={`px-2 py-1 rounded-full text-xs ${
                        viewMode === 'grid' ? 'bg-primary text-primary-foreground' : ''
                    }`}
                >
                    Grid
                </button>
                <button
                    onClick={() => setViewMode('speaker')}
                    className={`px-2 py-1 rounded-full text-xs ${
                        viewMode === 'speaker' ? 'bg-primary text-primary-foreground' : ''
                    }`}
                >
                    Speaker
                </button>
            </div>
        )}
        
        {/* Media Controls Toggle - PROMINENT VERSION */}
        <button
            onClick={() => setShowMediaControls(!showMediaControls)}
            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 border-2 ${
                showMediaControls
                    ? "bg-blue-500 text-white border-blue-600"
                    : "bg-yellow-400 text-black border-yellow-500 hover:bg-yellow-300"
            }`}
            style={{ minWidth: '100px' }}
        >
            <Video size={18} />
            <span>📹 MEDIA</span>
        </button>
        
        {/* Participants Button */}
        <button
            onClick={() => setShowBreakoutPanel(!showBreakoutPanel)}
            className={`px-3 py-1 rounded-full text-sm flex items-center space-x-1 ${
            showBreakoutPanel
                ? "bg-green-500 text-white"
                : "bg-muted/50"
            }`}
        >
            <Users size={16} />
            <span>Members</span>
        </button>
        
        {/* AI Agent Button */}
        {aiAgent && (
            <button
                onClick={() => setShowAIPanel(!showAIPanel)}
                className={`px-3 py-1 rounded-full text-sm flex items-center space-x-1 ${
                showAIPanel
                    ? "bg-purple-500 text-white"
                    : "bg-muted/50"
                }`}
            >
                <Bot size={16} />
                <span>AI Agent</span>
            </button>
        )}
        
        {/* Test AI Button (for testing without assigned agent) */}
        {!aiAgent && isHost && (
            <button
                onClick={() => setShowAIPanel(!showAIPanel)}
                className={`px-3 py-1 rounded-full text-sm flex items-center space-x-1 ${
                showAIPanel
                    ? "bg-purple-500 text-white"
                    : "bg-muted/50"
                }`}
            >
                <Bot size={16} />
                <span>Test AI</span>
            </button>
        )}
        
        <button
            onClick={() => setShowChat(!showChat)}
            className={`px-3 py-1 rounded-full text-sm flex items-center space-x-1 ${
            showChat
                ? "bg-accent-primary text-primary-foreground"
                : "bg-muted/50"
            }`}
        >
            <MessageSquare size={16} />
            <span>Chat</span>
        </button>
        </div>
    </div>
    <div className='flex flex-1 p-2 gap-2 overflow-hidden'>
    <div className={`${showChat ? 'flex-1' : 'w-full'} p-2 gap-2 overflow-hidden border border-border flex flex-col bg-card`}>
    <div className="flex-1 relative overflow-hidden bg-black rounded-lg">
        {/* Screen Share Priority View */}
        {screenSharingParticipant && false ? ( // Disabled for now until proper screen share detection
            <div className="w-full h-full relative">
                <ParticipantView
                    participant={screenSharingParticipant}
                    className="w-full h-full object-contain !max-w-full rounded-lg"
                />
                {/* Screen Share Overlay */}
                <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium flex items-center space-x-2">
                    <Monitor size={16} />
                    <span>Screen Share - Host</span>
                </div>
                
                {/* Small video thumbnails for other participants */}
                {participantsWithVideo.length > 0 && (
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                        {participantsWithVideo.slice(0, 3).map((participant) => (
                            <div key={participant.userId} className="w-24 h-16 rounded-lg overflow-hidden border-2 border-white/20">
                                <ParticipantView
                                    participant={participant}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                        {participantsWithVideo.length > 3 && (
                            <div className="w-24 h-16 rounded-lg bg-black/50 flex items-center justify-center text-white text-xs">
                                +{participantsWithVideo.length - 3}
                            </div>
                        )}
                    </div>
                )}
            </div>
        ) : participantsWithVideo.length > 1 ? (
            /* Multiple Video Streams */
            <div className="w-full h-full">
                {viewMode === 'grid' ? (
                    <div className="w-full h-full grid grid-cols-2 gap-2 p-2">
                        {participantsWithVideo.slice(0, 4).map((participant) => (
                            <div key={participant.userId} className="relative rounded-lg overflow-hidden">
                                <ParticipantView
                                    participant={participant}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                    {participant.name?.slice(0, 10) || 'User'}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : viewMode === 'speaker' ? (
                    <div className="w-full h-full flex flex-col">
                        {/* Main speaker */}
                        <div className="flex-1 relative">
                            <ParticipantView
                                participant={participantsWithVideo[0]}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full">
                                {participantsWithVideo[0].name || 'Speaker'}
                            </div>
                        </div>
                        {/* Other participants strip */}
                        {participantsWithVideo.length > 1 && (
                            <div className="h-24 flex space-x-2 p-2 bg-black/20">
                                {participantsWithVideo.slice(1, 6).map((participant) => (
                                    <div key={participant.userId} className="w-32 h-20 rounded-lg overflow-hidden">
                                        <ParticipantView
                                            participant={participant}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    /* Single View with Thumbnails */
                    <div className="w-full h-full relative">
                        <ParticipantView
                            participant={hostParticipant || participantsWithVideo[0]}
                            className="w-full h-full object-cover !max-w-full rounded-lg"
                        />
                        {/* Video Thumbnails */}
                        <div className="absolute bottom-4 right-4 flex flex-col space-y-2 max-h-64 overflow-y-auto">
                            {participantsWithVideo.slice(1, 5).map((participant) => (
                                <div 
                                    key={participant.userId} 
                                    className="w-32 h-20 rounded-lg overflow-hidden border-2 border-white/20 cursor-pointer hover:border-white/40 transition-colors"
                                    onClick={() => {
                                        // Switch main view to this participant
                                        // This would require more complex state management
                                    }}
                                >
                                    <ParticipantView
                                        participant={participant}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-1 text-center">
                                        {participant.name?.slice(0, 10) || 'User'}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Main Speaker Overlay */}
                        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                            {(hostParticipant || participantsWithVideo[0])?.name || 'Host'} {isHost && '(You)'}
                        </div>
                    </div>
                )}
            </div>
        ) : hostParticipant ? (
            /* Single Participant View */
            <div className="w-full h-full relative">
                <ParticipantView
                    participant={hostParticipant}
                    className="w-full h-full object-cover !max-w-full rounded-lg"
                />
                {/* Host Overlay */}
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                    {hostParticipant.name || 'Host'} {isHost && '(You)'}
                </div>
            </div>
        ) : (
            /* Waiting for Stream */
            <div className="w-full h-full flex items-center justify-center text-muted-foreground flex-col space-y-4 bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users
                        size={40}
                        className="text-primary"
                    />
                </div>
                <div className="text-center">
                    <p className="text-lg font-medium">Waiting for stream to start...</p>
                    <p className="text-sm text-muted-foreground mt-1">The host will begin broadcasting shortly</p>
                </div>
            </div>
        )}
        
        {/* Host Badge */}
        {isHost && (
            <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary-foreground text-sm font-medium">
                Host
            </div>
        )}
        
        {/* Live Indicator */}
        {(hostParticipant || participantsWithVideo.length > 0) && (
            <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>LIVE</span>
            </div>
        )}
    </div>

    <div className="p-3 border-t border-border flex items-center justify-between bg-muted/30">
        <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-red-500">LIVE</span>
            </div>
            <div className="text-sm font-medium">
                {webinar?.title || 'Live Webinar'}
            </div>
            {/* Video Stats */}
            {participantsWithVideo.length > 0 && (
                <div className="text-xs text-muted-foreground">
                    {participantsWithVideo.length} video stream{participantsWithVideo.length !== 1 ? 's' : ''}
                    {isScreenSharing && ' • Screen sharing active'}
                </div>
            )}
        </div>
        {isHost && (
            <div className="flex items-center space-x-2">
                <Button onClick={handleCTAButtonClick} size="sm">
                    {webinar.ctaType === CtaTypeEnum.BOOK_A_CALL
                        ? 'Book a Call'
                        : 'Buy Now'}
                </Button>
            </div>
        )}
    </div>
    
    {/* Media Controls Section */}
    {showMediaControls && (
        <div className="border-t border-border bg-muted/20">
            <MediaControls 
                isHost={isHost || false}
                onScreenShare={handleScreenShare}
            />
        </div>
    )}
    </div>
    
    {/* Chat Section */}
    {showChat && (
        <div className="w-80 border border-border bg-card flex flex-col">
            <div className="p-3 border-b border-border">
                <h3 className="font-semibold text-sm">Live Chat</h3>
            </div>
            <div className="flex-1 overflow-hidden">
                {chatClient && channel ? (
                    <div className="h-full flex flex-col">
                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-3 space-y-2">
                            {messages.length === 0 ? (
                                <div className="text-xs text-muted-foreground text-center">
                                    Chat is connected. Start the conversation!
                                </div>
                            ) : (
                                messages.map((message, index) => (
                                    <div key={`${message.id}-${index}`} className="text-sm">
                                        <div className="flex items-start space-x-2">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-1">
                                                    <span className={`font-medium text-xs ${
                                                        message.user?.id === 'ai-agent' ? 'text-purple-500' : ''
                                                    }`}>
                                                        {message.user?.name || 'Anonymous'}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground">
                                                        {new Date(message.created_at).toLocaleTimeString([], {
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        })}
                                                    </span>
                                                </div>
                                                <div className="text-sm mt-1">
                                                    {message.text}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                        
                        {/* Message Input */}
                        <div className="p-3 border-t border-border">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background"
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                                            channel.sendMessage({
                                                text: e.currentTarget.value.trim(),
                                            })
                                            e.currentTarget.value = ''
                                        }
                                    }}
                                />
                                <Button 
                                    size="sm"
                                    onClick={(e) => {
                                        const input = e.currentTarget.parentElement?.querySelector('input')
                                        if (input && input.value.trim()) {
                                            channel.sendMessage({
                                                text: input.value.trim(),
                                            })
                                            input.value = ''
                                        }
                                    }}
                                >
                                    Send
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="h-full flex items-center justify-center text-muted-foreground">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto mb-2"></div>
                            <p className="text-xs">Connecting to chat...</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )}
    
    {/* AI Agent Panel */}
    {showAIPanel && (
        <div className="w-80 border border-border bg-card flex flex-col">
            <div className="p-3 border-b border-border">
                <h3 className="font-semibold text-sm flex items-center space-x-2">
                    <Bot size={16} />
                    <span>{aiAgent ? aiAgent.name : 'Test AI Agent'}</span>
                </h3>
            </div>
            <div className="flex-1 overflow-y-auto p-3">
                {aiAgent ? (
                    <WebinarAIAgent
                        aiAgent={aiAgent}
                        webinarId={webinar.id}
                        isHost={isHost || false}
                        onAIResponse={handleAIResponse}
                    />
                ) : (
                        <div className="space-y-4">
                        <div className="text-center">
                            <Bot className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                            <h4 className="font-semibold mb-2">Test AI Voice Interaction</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                                Test VAPI voice interaction with a demo agent. Create a real webinar with AI for full functionality.
                            </p>
                        </div>
                        
                        <div className="bg-muted/50 p-3 rounded-lg">
                            <h5 className="font-medium mb-2">Quick Voice Test:</h5>
                            <div className="space-y-2">
                                <Button 
                                    onClick={() => {
                                        // Quick VAPI test with demo assistant
                                        const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || '3f3bf2e8-f1d3-401d-8125-3196dfa2db37'
                                        if (typeof window !== 'undefined' && (window as any).Vapi) {
                                            const vapi = new (window as any).Vapi(publicKey)
                                            vapi.start('demo-assistant-id')
                                        } else {
                                            alert('VAPI not loaded. Create a real AI agent for voice interaction.')
                                        }
                                    }}
                                    className="w-full"
                                    variant="outline"
                                >
                                    🎤 Quick Voice Test
                                </Button>
                                <p className="text-xs text-muted-foreground">
                                    This will test VAPI connection. For full functionality, create a webinar with AI agent.
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg">
                            <h5 className="font-medium mb-2">How Voice Interaction Works:</h5>
                            <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                                <li>AI joins webinar as voice participant</li>
                                <li>Participants speak normally in webinar</li>
                                <li>AI listens and responds with voice</li>
                                <li>Host can mute/unmute AI as needed</li>
                                <li>AI responses appear in chat too</li>
                            </ol>
                        </div>
                        
                        {/* Debug: Show webinar AI agent ID */}
                        <div className="bg-yellow-50 dark:bg-yellow-950/20 p-3 rounded-lg">
                            <h5 className="font-medium mb-2">Debug Info:</h5>
                            <p className="text-xs text-muted-foreground">
                                Webinar ID: {webinar.id}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                AI Agent ID: {webinar.aiAgentId || 'None assigned'}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                AI Agent Loaded: {aiAgent ? aiAgent.name : 'No'}
                            </p>
                            
                            {/* Manual Fix Button */}
                            {isHost && !webinar.aiAgentId && (
                                <Button 
                                    onClick={async () => {
                                        try {
                                            // Get the first available AI agent
                                            const response = await fetch('/api/ai-agents')
                                            const agents = await response.json()
                                            
                                            if (agents.length > 0) {
                                                // Assign the first AI agent to this webinar
                                                const assignResponse = await fetch('/api/webinar/assign-ai', {
                                                    method: 'POST',
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: JSON.stringify({
                                                        webinarId: webinar.id,
                                                        aiAgentId: agents[0].id
                                                    })
                                                })
                                                
                                                if (assignResponse.ok) {
                                                    alert('AI Agent assigned! Refresh the page.')
                                                    window.location.reload()
                                                } else {
                                                    alert('Failed to assign AI agent')
                                                }
                                            } else {
                                                alert('No AI agents found. Create one first.')
                                            }
                                        } catch (error) {
                                            console.error('Error assigning AI agent:', error)
                                            alert('Error assigning AI agent')
                                        }
                                    }}
                                    className="w-full mt-2"
                                    size="sm"
                                    variant="outline"
                                >
                                    🔧 Fix: Assign AI Agent
                                </Button>
                            )}
                        </div>
                        
                        <Button 
                            onClick={() => window.open('/ai-agents', '_blank')}
                            className="w-full"
                        >
                            Create Real AI Agent
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )}
    
    {/* Members/Participants Panel */}
    {showBreakoutPanel && (
        <div className="w-80 border border-border bg-card flex flex-col">
            <div className="p-3 border-b border-border">
                <h3 className="font-semibold text-sm flex items-center space-x-2">
                    <Users size={16} />
                    <span>Members ({viewerCount})</span>
                </h3>
            </div>
            <div className="flex-1 overflow-y-auto p-3">
                <div className="space-y-2">
                    {participants.length === 0 ? (
                        <div className="text-center text-muted-foreground">
                            <Users className="h-8 w-8 mx-auto mb-2" />
                            <p className="text-sm">No participants yet</p>
                        </div>
                    ) : (
                        // Filter out duplicate participants by userId
                        participants
                            .filter((participant, index, self) => 
                                index === self.findIndex(p => p.userId === participant.userId)
                            )
                            .map((participant, index) => (
                            <div key={`${participant.userId}-${index}`} className="flex items-center space-x-3 p-2 rounded-lg bg-muted/30">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="text-xs font-medium">
                                        {participant.name?.charAt(0)?.toUpperCase() || participant.userId.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-medium">
                                        {participant.name || `User ${participant.userId.slice(0, 8)}`}
                                        {participant.userId === webinar.presenterId && (
                                            <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                                                Host
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {participant.publishedTracks.length > 0 ? (
                                            <span className="text-green-500">● Broadcasting</span>
                                        ) : (
                                            <span>Viewing</span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex space-x-1">
                                    {participant.publishedTracks.length > 0 && (
                                        <div className="w-2 h-2 bg-green-500 rounded-full" title="Broadcasting" />
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
                
                {isHost && (
                    <div className="mt-4 pt-4 border-t border-border">
                        <h4 className="font-medium mb-2 text-sm">Host Controls</h4>
                        <div className="space-y-2">
                            <Button 
                                variant="outline" 
                                size="sm" 
                                className="w-full"
                                onClick={() => {
                                    // TODO: Implement invite functionality
                                    navigator.clipboard.writeText(window.location.href)
                                    alert('Webinar link copied to clipboard!')
                                }}
                            >
                                Copy Invite Link
                            </Button>
                            <Button 
                                variant="outline" 
                                size="sm" 
                                className="w-full"
                                onClick={() => setShowBreakoutPanel(false)}
                            >
                                Close Panel
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )}
    </div>
    
    {/* CTA Dialog */}
    {showCtaDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-card border border-border rounded-lg p-6 max-w-md w-full mx-4">
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">
                        {webinar.ctaType === CtaTypeEnum.BOOK_A_CALL ? 'Book a Call' : 'Special Offer'}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                        {webinar.ctaType === CtaTypeEnum.BOOK_A_CALL 
                            ? 'Schedule a consultation call with our expert.'
                            : 'Don\'t miss this limited-time offer!'
                        }
                    </p>
                    <div className="flex space-x-3">
                        <Button 
                            variant="outline" 
                            onClick={() => setShowCtaDialog(false)}
                            className="flex-1"
                        >
                            Maybe Later
                        </Button>
                        <Button 
                            onClick={() => {
                                // Handle the actual CTA action
                                if (webinar.ctaType === CtaTypeEnum.BOOK_A_CALL) {
                                    // Open booking link or calendar
                                    if (webinar.ctaUrl) {
                                        window.open(webinar.ctaUrl, '_blank')
                                    } else {
                                        // Fallback - could integrate with Calendly or similar
                                        alert('Booking functionality would be integrated here')
                                    }
                                } else {
                                    // Handle buy now
                                    if (webinar.ctaUrl) {
                                        window.open(webinar.ctaUrl, '_blank')
                                    } else {
                                        alert('Purchase functionality would be integrated here')
                                    }
                                }
                                setShowCtaDialog(false)
                            }}
                            className="flex-1"
                        >
                            {webinar.ctaLabel || (webinar.ctaType === CtaTypeEnum.BOOK_A_CALL ? 'Book Now' : 'Buy Now')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )}
    </div>
  )
}

export default LiveWebinarView