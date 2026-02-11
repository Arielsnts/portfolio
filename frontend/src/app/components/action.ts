"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function action(data: {
  nome: string
  email: string
  mensagem: string
}) {
  const { nome, email, mensagem } = data

  if (!nome?.trim() || !email?.trim() || !mensagem?.trim()) {
    return { error: "Preencha todos os campos." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { error: "Email inválido." }
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "arielsant520@gmail.com",
      subject: `Nova mensagem de ${nome}`,
      html: `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `
    })

    return { success: true }
  } catch (error) {
    console.error(error)
    return { error: "Erro ao enviar email." }
  }
}
