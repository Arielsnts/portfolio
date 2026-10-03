import styles from "./skills.module.css"
import SkillCard from "@/components/cards/SkillCard"
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiMongodb,
    SiPostgresql,
    SiPython
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

export default function Skills() {
    return (
        <div className={styles.skills} id="skills">
            <div className={styles.bgWrapper}>
                <div className={`${styles.block} ${styles.block1}`}></div>
                <div className={`${styles.block} ${styles.block2}`}></div>
            </div>

            <div className={styles.content}>
                <h1>Skills</h1>
                <p>Tecnologias com as quais já desenvolvi aplicações.</p>

                <div className={styles.skillsGrid}>
                    <SkillCard icon={<SiHtml5 />} nome="HTML5" />
                    <SkillCard icon={<SiCss3 />} nome="CSS3" />
                    <SkillCard icon={<SiJavascript />} nome="JavaScript" />
                    <SkillCard icon={<SiTypescript />} nome="TypeScript" />
                    <SkillCard icon={<SiReact />} nome="React" />

                    <SkillCard icon={<SiNextdotjs />} nome="Next.js" />
                    <SkillCard icon={<SiMongodb />} nome="MongoDB" />
                    <SkillCard icon={<SiPostgresql />} nome="PostgreSQL" />
                    <SkillCard icon={<SiPython />} nome="Python" />
                    <SkillCard icon={<FaJava />} nome="Java" />
                </div>
            </div>
        </div>
    )
}