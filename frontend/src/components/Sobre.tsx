"use client"

import styles from "@/styles/sobre.module.css"

export default function Sobre() {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className={styles.sobre} id="sobre">

            <div className={styles.bgWrapper}>
                <div className={`${styles.block} ${styles.block1}`}></div>
                <div className={`${styles.block} ${styles.block2}`}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.imagem}>
                    <img src="/foto.png" alt="foto" />
                    <h1>Ariel Santos</h1>
                    <h2>Desenvolvedor Full-Stack</h2>
                </div>
                <div className={styles.texto}>
                    <h1>Sobre Mim</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque nulla aliquam natus. Rerum, ea autem nobis ullam tenetur voluptatibus quam quibusdam nesciunt reprehenderit aliquid recusandae unde quae soluta, quas iste!</p>
                    <button onClick={() => scrollToSection("projetos")}>Projetos</button>
                </div>
            </div>
        </div>
    )
}