'use client'

import { useState, useEffect } from 'react'
import { FiMessageSquare, FiX } from 'react-icons/fi'
import AIChat from './AIChat'

export default function AIChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    document.addEventListener('openAIChat', handleOpen)
    return () => document.removeEventListener('openAIChat', handleOpen)
  }, [])

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Open AI Assistant"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </button>

      {isOpen && <AIChat onClose={() => setIsOpen(false)} />}
    </>
  )
}
