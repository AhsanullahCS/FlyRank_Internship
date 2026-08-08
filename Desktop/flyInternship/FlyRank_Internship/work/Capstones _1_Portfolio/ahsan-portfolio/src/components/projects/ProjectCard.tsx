import Link from 'next/link'
import { FiGithub, FiArrowRight } from 'react-icons/fi'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  result: string
  slug: string
  github: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  result,
  slug,
  github,
}: ProjectCardProps) {
  return (
    <div className="card flex flex-col h-full">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold font-heading">{title}</h3>
        <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap">
          {result}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between mt-auto pt-2">
        <Link
          href={`/projects/${slug}`}
          className="text-primary font-medium text-sm inline-flex items-center hover:underline"
        >
          View Case Study <FiArrowRight className="ml-1" />
        </Link>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-nearBlack transition-colors text-lg"
          aria-label={`${title} GitHub repository`}
        >
          <FiGithub />
        </a>
      </div>
    </div>
  )
}
