import prisma from "@/lib/prisma"
import styles from "./pageProjetos.module.css"
import { FaArrowRight } from "react-icons/fa";

export const dynamic = 'force-dynamic'
export const revalidate = 0

type Projeto = {
   id: number
   nome: string
   img: string
   link: string
   tags: string[]
   ordem: number
}

export default async function Page() {
   const projetos: Projeto[] = await prisma.projeto.findMany({
      orderBy: {
         ordem: "asc"
      }
   })

   return (
      <div className={styles.sect}>
         <h1>Principais Projetos</h1>

         <div className={styles.divProjetos}>
            {projetos.map((projeto) => (
               <a
                  href={projeto.link}
                  target="_blank"
                  className={styles.projeto}
                  key={projeto.id}
               >
                  <img src={projeto.img} alt={projeto.nome} />
                  <h2>{projeto.nome}</h2>
                  <div className={styles.tags}>
                     {projeto.tags.map((tag, index) => (
                        <p key={index}>{tag}</p>
                     ))}
                  </div>
                  
                  <div className={styles.divButton}>
                     <div className={styles.button}>
                        <FaArrowRight />
                     </div>
                  </div>
               </a>
            ))}
         </div>
      </div>
   )
}
