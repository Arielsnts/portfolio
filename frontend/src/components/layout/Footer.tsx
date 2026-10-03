import { SiGithub, SiLinkedin } from "react-icons/si"

export default function Footer() {
    return (
    <footer>
        <p>Ariel Santos</p>
        <nav>
            <a
                href="https://www.linkedin.com/in/ariel-santos-souza-998b8b31a"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SiLinkedin size={25} />
            </a>
            <a
                href="https://github.com/Arielsnts"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SiGithub size={25} />
            </a>
        </nav>
    </footer>
    )
}