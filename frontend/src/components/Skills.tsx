import styles from "@/styles/skills.module.css"
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiMongodb, SiPostgresql, SiPython
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

export default function Skills() {
    return (
        <div className={styles.skills} id="skills">
            <div className={styles.bgWrapper}>
                <div className={`${styles.block} ${styles.block1}`}></div>
                <div className={`${styles.block} ${styles.block2}`}></div>
            </div>

            <h1>Skills</h1>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, hic. Consectetur veritatis culpa omnis. Sed explicabo soluta quod nam autem</h2>

            <div className={styles.container}>

                <div className={styles.linha1}>
                    <div title="HTML" className={styles.box}><SiHtml5 size={60} /></div>
                    <div title="CSS" className={styles.box}><SiCss3 size={60} /></div>
                    <div title="JavaScript" className={styles.box}><SiJavascript size={60} /></div>
                    <div title="TypeScript" className={styles.box}><SiTypescript size={60} /></div>
                    <div title="React" className={styles.box}><SiReact size={60} /></div>
                </div>

                <div className={styles.linha2}>
                    <div title="Next.js" className={styles.box}><SiNextdotjs size={60} /></div>
                    <div title="Mongodb" className={styles.box}><SiMongodb size={60} /></div>
                    <div title="PostgreSQL" className={styles.box}><SiPostgresql size={60} /></div>
                    <div title="Python" className={styles.box}><SiPython size={60} /></div>
                    <div title="Java" className={styles.box}><FaJava size={60} /></div>
                </div>

            </div>
        </div>
    )
}
