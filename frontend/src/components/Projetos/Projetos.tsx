import styles from "./projetos.module.css"
import Link from "next/link"
import ProjetosCard from "@/components/cards/ProjetosCard"

export default function Projetos() {
    return (
        <div className={styles.projetos} id="projetos">

            <div className={styles.bgWrapper}>
                <div className={`${styles.block} ${styles.block1}`}></div>
                <div className={`${styles.block} ${styles.block2}`}></div>
            </div>

            <ProjetosCard />
        </div>
    )
}