import { knowledgeBase } from '@/data/knowledgeBase'

const skillGroups = [
  { title: 'Programming', items: knowledgeBase.skills.programming },
  { title: 'Machine Learning', items: knowledgeBase.skills.machineLearning },
  { title: 'Deep Learning', items: knowledgeBase.skills.deepLearning },
  { title: 'AI', items: knowledgeBase.skills.ai },
  { title: 'Tools', items: knowledgeBase.skills.tools },
]

export default function SkillsSection() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="section-title text-center">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="card">
              <h3 className="font-heading font-semibold mb-3 text-primary">
                {group.title}
              </h3>
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
