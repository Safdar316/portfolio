import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Here you can:
    // - Send email (Nodemailer)
    // - Save to database
    // - Connect to external service

    console.log("Contact Form Data:", body)

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}