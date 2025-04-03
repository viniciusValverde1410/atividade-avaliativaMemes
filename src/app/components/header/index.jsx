import styles from './header.module.css';

const Header = ({logo, logoIcon, navItem,navItem1 , navItem2, navItem3, navItem4}) => {
    return (
      <header className={styles.header}>
      <div className={styles.logo}>
        {logo} {logoIcon}
      </div>
      <nav className={styles.nav}>
        
        <a href="#" className={styles.active}> {navItem}
        </a>
        <a href="#">{navItem1}</a>
        <a href="#">{navItem2}</a>
        <a href="#">{navItem3}</a>
        <a href="#">{navItem4}</a>
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