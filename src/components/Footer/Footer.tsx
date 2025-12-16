import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <span className={styles.logo}>Ari</span>
          <p className={styles.description}>
            Plataforma para gestão e acompanhamento acadêmico.
          </p>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <span className={styles.title}>Navegação</span>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/turmas" className={styles.link}>Minhas turmas</Link>
          <Link href="/perfil" className={styles.link}>Perfil</Link>
        </nav>

        {/* Support */}
        <div className={styles.nav}>
          <span className={styles.title}>Suporte</span>
          <Link href="/ajuda" className={styles.link}>Ajuda</Link>
          <Link href="/contato" className={styles.link}>Contato</Link>
          <Link href="/privacidade" className={styles.link}>Privacidade</Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Ari. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}

