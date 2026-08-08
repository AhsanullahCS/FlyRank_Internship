import type { Metadata } from 'next'
import { FiGithub, FiCheckCircle, FiClock } from 'react-icons/fi'
import { knowledgeBase } from '@/data/knowledgeBase'

export const metadata: Metadata = {
  title: 'Internship | Ahsan Ullah',
  description: "Details on Ahsan Ullah's FlyRank AI internship experience.",
}

export default function InternshipPage() {
  const { internship } = knowledgeBase

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom max-w-3xl">
        <h1 className="section-title">Internship Experience</h1>

        <div className="card mb-10">
          <h2 className="text-2xl font-bold font-heading mb-1">{internship.company} AI Internship</h2>
          <p className="text-gray-600 mb-4">{internship.position}</p>
          <p className="text-gray-700 mb-6">
            Working on AI applications, Machine Learning projects, and building AI-powered
            solutions as part of the General AI Fluency Capstone.
          </p>
          <a
            href={internship.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            <FiGithub className="mr-2" /> View Internship Repo
          </a>
        </div>

        <h2 className="text-2xl font-bold font-heading mb-6">Assignments</h2>
        <div className="space-y-4">
          {internship.assignments.map((assignment) => (
            <div key={assignment.name} className="card flex items-start gap-4">
              {assignment.status === 'completed' ? (
                <FiCheckCircle className="text-green-500 text-2xl mt-1 shrink-0" />
              ) : (
                <FiClock className="text-yellow-500 text-2xl mt-1 shrink-0" />
              )}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-semibold">{assignment.name}</h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      assignment.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {assignment.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
                <p className="text-gray-700 text-sm mt-1">{assignment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
