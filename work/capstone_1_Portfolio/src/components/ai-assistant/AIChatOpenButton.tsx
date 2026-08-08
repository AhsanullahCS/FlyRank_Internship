'use client'

import { FiExternalLink } from 'react-icons/fi'

export default function AIChatOpenButton() {
  return (
    <button
      onClick={() => document.dispatchEvent(new CustomEvent('openAIChat'))}
      className="btn-primary inline-flex items-center"
    >
      Ask My AI <FiExternalLink className="ml-2" />
    </button>
  )
}
