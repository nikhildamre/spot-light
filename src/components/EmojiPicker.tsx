'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

interface EmojiPickerProps {
  onEmojiSelect: (emoji: string) => void
}

const commonEmojis = ['👍', '❤️', '😂', '😮', '😢', '😡', '👏', '🔥', '💯', '🎉']

const EmojiPicker: React.FC<EmojiPickerProps> = ({ onEmojiSelect }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-xs"
      >
        😊
      </Button>
      
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 bg-card border border-border rounded-lg p-2 shadow-lg z-10">
          <div className="grid grid-cols-5 gap-1">
            {commonEmojis.map((emoji) => (
              <button
                key={emoji}
                onClick={() => {
                  onEmojiSelect(emoji)
                  setIsOpen(false)
                }}
                className="p-1 hover:bg-muted rounded text-lg"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default EmojiPicker