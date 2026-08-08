import type { Metadata } from 'next'
import ProjectCard from '@/components/projects/ProjectCard'
import { knowledgeBase } from '@/data/knowledgeBase'

export const metadata: Metadata = {
  title: 'Projects | Ahsan Ullah',
  description: 'Machine Learning and AI projects built by Ahsan Ullah.',
}

export default function ProjectsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <h1 className="section-title text-center">Projects</h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
          A collection of Machine Learning and AI projects demonstrating practical, real-world
          problem solving.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {knowledgeBase.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
