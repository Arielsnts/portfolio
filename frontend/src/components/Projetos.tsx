import styles from "@/styles/projetos.module.css"
import Link from "next/link"

export default function Projetos() {
    return (
        <div className={styles.projetos} id="projetos">


            <h1>Projetos</h1>
            <div className={styles.bgWrapper}>
                <div className={`${styles.block} ${styles.block1}`}></div>
                <div className={`${styles.block} ${styles.block2}`}></div>
            </div>
            <Link href={"/projetos"} className={styles.quadro}>
                <img src="/projetos.png" alt="projeto" />
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, repellat facere. Rem, cupiditate! Vitae alias fugit nulla</p>
                    <button className="button-style">Ver Projetos</button>
                </div>
            </Link>
        </div>
    )
}