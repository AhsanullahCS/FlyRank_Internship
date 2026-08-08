'use client'

import { useState, useRef, useEffect } from 'react'
import { FiSend, FiX, FiMessageCircle } from 'react-icons/fi'
import { knowledgeBase } from '@/data/knowledgeBase'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function AIChat({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Ahsan's AI assistant. Ask me anything about Ahsan's work, projects, or skills!",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const suggestedQuestions = [
    'Tell me about Ahsan.',
    'What projects has Ahsan built?',
    "What are Ahsan's ML skills?",
    'Tell me about the Mushroom Classification project.',
    'How can I contact Ahsan?',
  ]

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const lowerQuery = userMessage.content.toLowerCase()
      let response = findAnswerInKnowledgeBase(lowerQuery)

      if (!response) {
        response = await queryLLM(userMessage.content)
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content:
          response ||
          "I don't have verified information about that yet. Feel free to ask about Ahsan's projects, skills, or experience!",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error getting AI response:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content:
          "I'm having trouble connecting right now. Please try again or contact Ahsan directly through the contact page.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const findAnswerInKnowledgeBase = (query: string): string | null => {
    const kb = knowledgeBase

    if (query.match(/hi|hello|hey|greetings|good morning|good afternoon|good evening/)) {
      return "Hello! I'm Ahsan's AI assistant. How can I help you learn more about Ahsan and his work?"
    }

    if (query.match(/who is ahsan|tell me about ahsan|about ahsan|ahsan's background|ahsan's role/)) {
      return `Ahsan Ullah is an AI/ML Developer and BSCS student passionate about Artificial Intelligence, Machine Learning, and building practical AI applications. ${kb.about.bio}`
    }

    if (query.match(/skills|technologies|tech stack|what can ahsan do|what does ahsan know/)) {
      const skills =
        kb.skills.programming.join(', ') +
        ', ' +
        kb.skills.machineLearning.join(', ') +
        ', ' +
        kb.skills.deepLearning.join(', ')
      return `Ahsan works with: ${skills}. He specializes in Machine Learning and AI development.`
    }

    if (query.match(/projects|built|worked on|what has ahsan built|portfolio/)) {
      const projects = kb.projects.map((p) => `${p.title} - ${p.description}`).join('; ')
      return `Ahsan has worked on several projects including: ${projects}. Each project demonstrates his skills in Machine Learning and AI development.`
    }

    if (query.match(/mushroom|classification|mushroom classification/)) {
      const project = kb.projects.find((p) => p.title.includes('Mushroom'))
      if (project) {
        return `The Mushroom Classification project is a Machine Learning system that predicts whether mushrooms are edible or poisonous using scikit-learn and pandas. ${project.description} It achieved ${project.result}. You can find more details in the case study.`
      }
    }

    if (query.match(/heart disease|heart|cardiovascular|heart disease prediction/)) {
      const project = kb.projects.find((p) => p.title.includes('Heart Disease'))
      if (project) {
        return `The Heart Disease Prediction project is an ML classification system designed to predict heart disease risk using health and lifestyle features. ${project.description} It achieved ${project.result}. Check the case study for more information.`
      }
    }

    if (query.match(/contact|reach|email|get in touch|how to contact|message/)) {
      return `You can contact Ahsan through the contact page on this website, connect on LinkedIn, or email him directly. The contact page has a form for sending messages.`
    }

    if (query.match(/internship|flyrank|work experience/)) {
      return `Ahsan is currently completing the FlyRank AI Internship - General AI Fluency Capstone. He's working on AI applications, Machine Learning projects, and building AI-powered solutions. Check the Internship page for more details.`
    }

    return null
  }

  const queryLLM = async (query: string): Promise<string> => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          context: knowledgeBase,
        }),
      })

      if (!response.ok) {
        throw new Error('API request failed')
      }

      const data = await response.json()
      return data.response || "I don't have verified information about that yet."
    } catch (error) {
      console.error('Error querying LLM:', error)
      return "I'm having trouble connecting right now. Please try again or contact Ahsan directly through the contact page."
    }
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-white rounded-xl shadow-2xl flex flex-col border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <FiMessageCircle className="text-primary" />
          <span className="font-semibold text-nearBlack">Ahsan&apos;s AI Assistant</span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-nearBlack transition-colors"
          aria-label="Close chat"
        >
          <FiX size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === 'user' ? 'bg-primary text-white' : 'bg-gray-100 text-nearBlack'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              <span className="text-xs opacity-70 mt-1 block">
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-nearBlack p-3 rounded-lg">
              <span className="text-sm">Typing...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length <= 2 && (
        <div className="px-4 pb-2">
          <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q, index) => (
              <button
                key={index}
                onClick={() => sendMessage(q)}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
          >
            <FiSend size={20} />
          </button>
        </div>
      </form>
    </div>
  )
}
