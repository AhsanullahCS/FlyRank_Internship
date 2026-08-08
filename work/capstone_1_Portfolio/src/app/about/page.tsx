import type { Metadata } from 'next'
import { knowledgeBase } from '@/data/knowledgeBase'

export const metadata: Metadata = {
  title: 'About | Ahsan Ullah',
  description: 'Learn more about Ahsan Ullah, an AI/ML Developer and BSCS student.',
}

const skillGroups = [
  { title: 'Programming', items: knowledgeBase.skills.programming },
  { title: 'Machine Learning', items: knowledgeBase.skills.machineLearning },
  { title: 'Deep Learning', items: knowledgeBase.skills.deepLearning },
  { title: 'AI', items: knowledgeBase.skills.ai },
  { title: 'Tools', items: knowledgeBase.skills.tools },
]

export default function AboutPage() {
  const { about } = knowledgeBase

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom max-w-4xl">
        <h1 className="section-title">About Me</h1>
        <p className="text-lg text-gray-700 mb-6">{about.bio}</p>

        <div className="grid sm:grid-cols-2 gap-6 my-10">
          <div className="card">
            <h3 className="font-heading font-semibold mb-2 text-primary">Education</h3>
            <p className="text-gray-700 text-sm">{about.education}</p>
          </div>
          <div className="card">
            <h3 className="font-heading font-semibold mb-2 text-primary">Goal</h3>
            <p className="text-gray-700 text-sm">{about.goal}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold font-heading mb-4">Interests</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {about.interests.map((interest) => (
            <span
              key={interest}
              className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
            >
              {interest}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold font-heading mb-6">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="card">
              <h3 className="font-heading font-semibold mb-3 text-primary">{group.title}</h3>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
