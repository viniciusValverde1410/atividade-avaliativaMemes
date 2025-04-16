import styles from './header.module.css';

const Header = ({ logo, navItems }) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>{logo[0].title}</h1>
                <span>{logo[0].span}</span>
            </div>
            <nav className={styles.nav}>
            {navItems.map((navItems, item) => (
                    <a key={navItems.id} href="#" className={item === 0 ? styles.active : undefined}>
                        {navItems.title}
                    </a>
                ))}

            </nav>

            <div className={styles.userActions}>
                <button className={styles.notificationBtn}>🔔</button>
                <button className={styles.userAvatar}>
                    <img src="https://i.pravatar.cc/150?img=3" alt="Your profile" />
                </button>
            </div>
        </header>
    )
}

export default Header;