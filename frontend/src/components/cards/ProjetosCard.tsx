import Image from "next/image";
import styles from "./projetoscard.module.css";
import Link from "next/link";

export default function ProjetosCard() {
    return (
        <Link href={"/projetos"} className={styles.card}>
            <div className={styles.glow} />

            <div className={styles.content}>

                <div className={styles.image}>
                    <Image
                        src="/projetos.png"
                        alt="Projeto"
                        fill
                    />
                </div>

                <div className={styles.text}>
                    <p className={styles.title}>
                        Projetos
                    </p>

                    <p className={styles.description}>
                        Projetos desenvolvidos para demonstrar minhas habilidades
                        em desenvolvimento web, incluindo aplicações de estudo e
                        projetos acadêmicos realizados na UFS.
                    </p>

                    <div className={styles.button}>
                        <p>Ver Projetos</p>
                    </div>
                </div>

            </div>
        </Link>
    );
}