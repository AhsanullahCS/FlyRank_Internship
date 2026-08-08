import Image from 'next/image'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi'
import ProjectCard from '@/components/projects/ProjectCard'
import SkillsSection from '@/components/home/SkillsSection'
import AIChatOpenButton from '@/components/ai-assistant/AIChatOpenButton'
import { knowledgeBase } from '@/data/knowledgeBase'

export default function Home() {
  const featuredProjects = knowledgeBase.projects

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
                Ahsan Ullah
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
                AI/ML Developer
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
                &ldquo;I build practical Machine Learning and AI applications that solve real-world problems.&rdquo;
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <Link href="/projects" className="btn-primary">
                  View My Projects
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Me
                </Link>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/AhsanullahCS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 hover:text-primary transition-colors"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahsan-ullah-cs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 hover:text-primary transition-colors"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary bg-gray-200 flex items-center justify-center">
                <Image
                  src="/images/img.jpeg"
                  alt="Ahsan Ullah"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <SkillsSection />

      {/* About Preview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">About Me</h2>
            <p className="text-lg text-gray-700 mb-6">
              I&rsquo;m a BSCS student passionate about Artificial Intelligence, Machine Learning,
              and building practical AI applications. Currently exploring Deep Learning and AI Agents
              to solve real-world problems.
            </p>
            <Link href="/about" className="inline-flex items-center text-primary font-semibold hover:underline">
              Read More <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Internship */}
      <section className="py-16 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Internship Experience</h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold font-heading mb-2">FlyRank AI Internship</h3>
              <p className="text-gray-600 mb-4">AI/ML Intern</p>
              <p className="text-gray-700 mb-6">
                Working on AI applications, Machine Learning projects, and building AI-powered solutions.
                Completed assignments include Data Contract and portfolio development.
              </p>
              <Link href="/internship" className="inline-flex items-center text-primary font-semibold hover:underline">
                Learn More <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">AI Assistant</h2>
            <p className="text-lg text-gray-700 mb-6">
              Have a question about my work, projects, or experience? Ask my AI assistant!
            </p>
            <AIChatOpenButton />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-nearBlack text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title text-white">Let&rsquo;s Build Something Intelligent</h2>
            <p className="text-lg text-gray-300 mb-8">
              I&rsquo;m always open to interesting opportunities and collaborations in AI/ML.
            </p>
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
