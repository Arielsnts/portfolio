"use client"

import { useEffect, useState } from "react"
import { api } from "@/lib/api"
import styles from "./pageProjetos.module.css"

type Projeto = {
   id: number
   nome: string
   img: string
   link: string
   tags: string[]
}

export default function Page() {
   const [projetos, setProjetos] = useState<Projeto[]>([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      async function getProjetos() {
         try {
            setLoading(true)
            const response = await api.get<Projeto[]>("/api/projetos")
            setProjetos(response.data)
         }
         catch (e) {
            console.log("Erro de busca:", e)
         }
         finally {
            setLoading(false)
         }
      }

      getProjetos()
   }, [])

   return (
      <div className={styles.sect}>
         <h1>Principais Projetos</h1>
         {loading ? (
            <div className={styles.loading}>
               <div className={styles.spinner}></div>
               <p>Carregando projetos...</p>
            </div>
         ) : (
            <div className={styles.divProjetos}>
               {projetos.map((projeto) => (
                  <a href={projeto.link} target="_blank" className={styles.projeto} key={projeto.id}>
                     <img src={projeto.img} alt={projeto.nome} />
                     <h2>{projeto.nome}</h2>
                     <div>
                        {projeto.tags.map((tag, index) => (
                           <p key={index}>{tag}</p>
                        ))}
                     </div>
                  </a>
               ))}
            </div>
         )}
      </div>
   )
}
