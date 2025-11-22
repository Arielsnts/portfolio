import express from "express"
import type { Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"

import contato from "./routes/contato"
import projetos from "./routes/projetos"

dotenv.config()

const app = express()

app.use(cors({
  origin: "https://portifolio-puce-nine-15.vercel.app",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(express.json())


app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API funcionando!" })
})

app.use(contato)
app.use(projetos)

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
