import type { Metadata } from 'next'
import Link from 'next/link'
import { FiGithub, FiArrowLeft } from 'react-icons/fi'
import { knowledgeBase } from '@/data/knowledgeBase'

export const metadata: Metadata = {
  title: 'Mushroom Classification | Ahsan Ullah',
  description:
    'Case study: a Machine Learning classification project predicting edible vs poisonous mushrooms.',
}

export default function MushroomClassificationPage() {
  const project = knowledgeBase.projects.find((p) => p.slug === 'mushroom-classification')!

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom max-w-3xl">
        <Link
          href="/projects"
          className="inline-flex items-center text-primary text-sm font-medium hover:underline mb-6"
        >
          <FiArrowLeft className="mr-2" /> Back to Projects
        </Link>

        <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold font-heading">{project.title}</h1>
          <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap">
            {project.result}
          </span>
        </div>

        <p className="text-lg text-gray-700 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center mb-12"
        >
          <FiGithub className="mr-2" /> View on GitHub
        </a>

        <div className="space-y-8">
          <div className="card">
            <h2 className="text-xl font-bold font-heading mb-2 text-primary">Problem</h2>
            <p className="text-gray-700">{project.details.problem}</p>
          </div>
          <div className="card">
            <h2 className="text-xl font-bold font-heading mb-2 text-primary">Dataset</h2>
            <p className="text-gray-700">{project.details.dataset}</p>
          </div>
          <div className="card">
            <h2 className="text-xl font-bold font-heading mb-2 text-primary">Preprocessing</h2>
            <p className="text-gray-700">{project.details.preprocessing}</p>
          </div>
          <div className="card">
            <h2 className="text-xl font-bold font-heading mb-2 text-primary">Model</h2>
            <p className="text-gray-700">{project.details.model}</p>
          </div>
          <div className="card">
            <h2 className="text-xl font-bold font-heading mb-2 text-primary">Evaluation</h2>
            <p className="text-gray-700">{project.details.evaluation}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
