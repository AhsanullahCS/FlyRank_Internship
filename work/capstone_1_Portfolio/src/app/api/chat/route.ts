import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function POST(request: NextRequest) {
  try {
    const { query, context } = await request.json()

    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 })
    }

    // If no API key is configured, gracefully fall back instead of crashing.
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        response:
          "I don't have verified information about that yet. Try asking about Ahsan's projects, skills, internship, or how to get in touch — or set an OPENAI_API_KEY in .env.local to enable open-ended answers.",
      })
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

    const systemPrompt = `
You are Ahsan's AI Assistant. Your role is to help visitors learn about Ahsan Ullah, his work, and his projects.
ONLY use the provided context to answer questions.
If you don't know something, say "I don't have verified information about that yet."
Be friendly, professional, and helpful. Keep answers concise (2-4 sentences).

Context about Ahsan:
Name: ${context.about.name}
Role: ${context.about.role}
Bio: ${context.about.bio}
Education: ${context.about.education}
Skills: ${Object.values(context.skills).flat().join(', ')}
Projects: ${context.projects
      .map((p: any) => `${p.title} (${p.result}) - ${p.description}`)
      .join(' | ')}
Internship: ${context.internship.position} at ${context.internship.company}
Contact: ${context.contact.email}, ${context.contact.linkedin}, ${context.contact.github}
`

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: query },
      ],
      max_tokens: 300,
      temperature: 0.7,
    })

    const responseText =
      completion.choices[0]?.message?.content ||
      "I don't have verified information about that yet."

    return NextResponse.json({ response: responseText })
  } catch (error) {
    console.error('Error in chat API route:', error)
    return NextResponse.json(
      { error: 'Something went wrong processing your request.' },
      { status: 500 }
    )
  }
}
