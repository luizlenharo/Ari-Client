import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/ari.svg"
          alt="Logo Ari"
          width={142}
          height={50}
          priority
        />
      </Link>
      <div className={styles.content}>
        <nav className={styles.navlinks}>
          <Link href="/" className={styles.link}>Minhas turmas</Link>
          <Link href="/faq" className={styles.link}>Dúvidas?</Link>
        </nav>
        <div className={styles.profile}>
          <Image
            src="/profile.svg"
            alt="Profile Picture"
            width={40}
            height={40}
            className={styles.profileImage}
          />
        </div>
      </div>
    </header>
  );
}
