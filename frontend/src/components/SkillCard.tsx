import styles from "@/components/skillcard.module.css";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  nome: string;
};

export default function SkillCard({ icon, nome }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.quadro}>
        {icon}
      </div>

      <p className={styles.nome}>
        {nome}
      </p>
    </div>
  );
}
