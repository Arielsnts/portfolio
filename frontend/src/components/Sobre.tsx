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
                    <p>
                        Meu nome é Ariel Santos, sou estudante de Sistemas de Informação na Universidade Federal de Sergipe. <br />
                        Tenho interesse na área de programação como forma de resolver problemas organizacionais por meio da tecnologia. <br />
                        Atualmente, estou focado no desenvolvimento web, buscando aprimorar minhas habilidades tanto no front-end quanto no back-end.
                    </p>
                    <button onClick={() => scrollToSection("projetos")}>Projetos</button>
                </div>
            </div>
        </div>
    )
}