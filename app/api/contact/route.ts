import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nome, email, messaggio } = body

    if (!nome || !email) {
      return NextResponse.json({ error: 'Campi obbligatori mancanti' }, { status: 400 })
    }

    // In a real implementation, send an email here
    console.log('Contact form submission:', { nome, email, messaggio })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Errore del server' }, { status: 500 })
  }
}
