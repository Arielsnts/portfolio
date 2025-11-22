import express from "express"
import type { Request, Response } from "express"
import { prisma } from "../../lib/prisma"

const router = express.Router()

router.get("/api/projetos", async (req: Request, res: Response) => {
    try {
        const projetos = await prisma.projeto.findMany()
        res.status(200).json(projetos)
    }
    catch (e) {
        console.error(e);

        res.status(500).json({
            msg: "Erro interno",
            error: e,
        })
    }
})

export default router
