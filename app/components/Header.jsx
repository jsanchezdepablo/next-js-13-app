import Link from 'next/link';
import styles from '@/components/Header.module.css';

const LINKS = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Posts', route: '/posts' }
];

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.navigation}>
        {LINKS.map(({ label, route }) => (
          <li key={route}>
            {/* nextjs prefecth the routes by default */}
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
