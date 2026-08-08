'use client'

import { useState } from 'react'
import { FiSend, FiCheckCircle } from 'react-icons/fi'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // No backend wired up yet — this simply confirms receipt client-side.
    // To actually send messages, connect this to an email service (e.g. Resend,
    // Formspree, or your own API route) inside handleSubmit.
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }, 600)
  }

  if (submitted) {
    return (
      <div className="card text-center py-12">
        <FiCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
        <h3 className="text-xl font-bold font-heading mb-2">Message Received!</h3>
        <p className="text-gray-600 mb-6">
          Thanks for reaching out. I&rsquo;ll get back to you as soon as possible.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-primary">
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="What would you like to say?"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary inline-flex items-center disabled:opacity-50"
      >
        <FiSend className="mr-2" />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
