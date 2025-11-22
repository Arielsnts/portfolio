"use client"

import styles from "@/styles/telaInicial.module.css"

export default function TelaInicial() {

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className={styles.telaInicial}>

            <div className={styles.bgWrapper}>
                <div className={`${styles.block} ${styles.block1}`}></div>
                <div className={`${styles.block} ${styles.block2}`}></div>
                <div className={`${styles.block} ${styles.block3}`}></div>
                <div className={`${styles.block} ${styles.block4}`}></div>
            </div>

            <article className={styles.article}>
                <h1>Ariel Santos</h1>
                <h2>Desenvolvedor Full-Stack</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nisi esse corporis dolor in quas dolore, quibusdam, autem</p>

                <div className={styles.buttons}>
                    <button
                        className={styles.buttonContato}
                        onClick={() => scrollToSection("contato")}
                    >
                        Contato
                    </button>

                    <button
                        className={styles.buttonSobre}
                        onClick={() => scrollToSection("sobre")}
                    >
                        Sobre
                    </button>
                </div>
            </article>
        </div>
    )
}
