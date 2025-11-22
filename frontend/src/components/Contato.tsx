"use client"

import styles from "@/styles/contato.module.css"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { MdEmail } from "react-icons/md"
import { api } from "@/lib/api"
import { useState } from "react"

export default function Contato() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const [loading, setLoading] = useState(false)

  async function enviarContato() {
    if (loading) return

    if (!nome.trim() || !email.trim() || !msg.trim()) {
      alert("Preencha todos os campos antes de enviar.")
      return
    }

    try {
      setLoading(true)

      const response = await api.post("/api/contato", {
        nome,
        email,
        mensagem: msg
      })

      if (response.status === 201) {
        alert("Mensagem enviada com sucesso!")
        setNome("")
        setEmail("")
        setMsg("")
      } else {
        alert("Não foi possível enviar. Tente novamente.")
      }
    }
    catch (e) {
      console.error(e)
      alert("Ocorreu um erro ao enviar sua mensagem.")
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.contato} id="contato">
      <div className={styles.bgWrapper}>
        <div className={`${styles.block} ${styles.block1}`}></div>
        <div className={`${styles.block} ${styles.block2}`}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.form}>
          <h2>Contato:</h2>

          <label htmlFor="nome">Nome:</label>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            id="nome"
          />

          <label htmlFor="email">Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
          />

          <label htmlFor="msg">Mensagem:</label>
          <textarea
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            id="msg"
            className={styles.msg}
          ></textarea>

          <button onClick={enviarContato} disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </div>

        <div className={styles.redes}>
          <h2>Ou acesse:</h2>
          <div className={styles.redesLista}>

            <a href="https://github.com/Arielsnts" target="_blank" className={styles.redeItem}>
              <div className={styles.fundoRede}>
                <SiGithub size={40} />
              </div>
              <p>GitHub</p>
            </a>

            <a href="https://www.linkedin.com/in/ariel-santos-souza-998b8b31a" target="_blank" className={styles.redeItem}>
              <div className={styles.fundoRede}>
                <SiLinkedin size={40} />
              </div>
              <p>LinkedIn</p>
            </a>

            <div title="arielsant520@gmail.com" className={styles.redeItem}>
              <div className={styles.fundoRede}>
                <MdEmail size={40} />
              </div>
              <p>Email</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
