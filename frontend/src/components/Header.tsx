"use client"

import { useEffect, useState } from "react"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname();

  const isProjetosPage = pathname.startsWith("/projetos");

  if (isProjetosPage) {
    return (
      <header className={"header-menu scrolled"}>
        <a href="/" className="titulo">Ariel Santos</a>

        <nav className="nav-projetos">
          <ThemeSwitcher />
          <a href="/">Home</a>
        </nav>
      </header>
    )
  }

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>

      <header className={scrolled ? "scrolled" : ""}>
        <div className="header-menu">
          <a href="/" className="titulo">Ariel Santos</a>

          <nav>
            <ThemeSwitcher />
            <a href="#">Home</a>
            <a onClick={() => scrollToSection("sobre")}>Sobre</a>
            <a onClick={() => scrollToSection("skills")}>Skills</a>
            <a onClick={() => scrollToSection("projetos")}>Projetos</a>
            <a onClick={() => scrollToSection("contato")}>Contato</a>
          </nav>
        </div>

        <button className="menu-button" onClick={() => setMenuOpen(true)}>☰</button>
      </header>
      {
        menuOpen && (
          <div className="overlay" onClick={() => setMenuOpen(false)}></div>
        )
      }

      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        <ThemeSwitcher />

        <a href="#" onClick={() => setMenuOpen(false)}>Home</a>

        <a
          onClick={() => {
            scrollToSection("sobre");
            setMenuOpen(false);
          }}
        >
          Sobre
        </a>

        <a
          onClick={() => {
            scrollToSection("skills");
            setMenuOpen(false);
          }}
        >
          Skills
        </a>

        <a
          onClick={() => {
            scrollToSection("projetos");
            setMenuOpen(false);
          }}
        >
          Projetos
        </a>

        <a
          onClick={() => {
            scrollToSection("contato");
            setMenuOpen(false);
          }}
        >
          Contato
        </a>

      </aside>

    </>
  )
}
