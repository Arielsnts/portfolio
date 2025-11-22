import express from "express"
import type { Request, Response } from "express"
import { prisma } from "../../lib/prisma"

const router = express.Router()

router.post("/api/contato", async (req: Request, res: Response) => {
  try {
    const { nome, email, mensagem } = req.body as {
      nome: string
      email: string
      mensagem: string
    }

    const novaMsg = await prisma.contato.create({
      data: { nome, email, mensagem },
    })

    res.status(201).json({
      msg: "Mensagem enviada com sucesso",
      data: novaMsg,
    })
  } catch (e) {
    console.error(e)

    res.status(500).json({
      msg: "Erro interno",
      error: e,
    })
  }
})

export default router
