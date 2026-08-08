import type { Metadata } from 'next'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import ContactForm from '@/components/ui/ContactForm'
import { knowledgeBase } from '@/data/knowledgeBase'

export const metadata: Metadata = {
  title: 'Contact | Ahsan Ullah',
  description: 'Get in touch with Ahsan Ullah.',
}

export default function ContactPage() {
  const { contact } = knowledgeBase

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom max-w-4xl">
        <h1 className="section-title text-center">Get In Touch</h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
          I&rsquo;m always open to interesting opportunities and collaborations in AI/ML.
          Send a message or reach out directly.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <ContactForm />

          <div className="space-y-4">
            <a
              href={`mailto:${contact.email}`}
              className="card flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <FiMail className="text-2xl text-primary" />
              <div>
                <h3 className="font-heading font-semibold">Email</h3>
                <p className="text-gray-600 text-sm">{contact.email}</p>
              </div>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <FiLinkedin className="text-2xl text-primary" />
              <div>
                <h3 className="font-heading font-semibold">LinkedIn</h3>
                <p className="text-gray-600 text-sm">Connect with me</p>
              </div>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <FiGithub className="text-2xl text-primary" />
              <div>
                <h3 className="font-heading font-semibold">GitHub</h3>
                <p className="text-gray-600 text-sm">Check out my code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
