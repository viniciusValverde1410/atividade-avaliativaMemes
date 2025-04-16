import styles from "./footer.module.css";

const Footer = ({logo, navItems, navItemsRecurso, navItemsEmpresa,navItemsLegal, redes  }) => {
    return (
              <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <h2>{logo[0].title} </h2>
            <p>O universo dos melhores memes da internet.</p>
          </div>

          <div className={styles.footerNavContainer}>
            <div className={styles.footerNavSection}>
              <h3>Navegação</h3>
              <nav className={styles.footerNav}>
              {navItems.map((navItems) => (
                    <a key={navItems.id} href="#">
                        {navItems.title}
                    </a>
                ))}
                <a href="#"></a>
              </nav>
            </div>

            <div className={styles.footerNavSection}>
              <h3>Recursos</h3>
              <nav className={styles.footerNav}>
              {navItemsRecurso.map((navItemsR) => (
                    <a key={navItemsR.id} href="#">
                        {navItemsR.title}
                    </a>
                ))}
              </nav>
            </div>

            <div className={styles.footerNavSection}>
              <h3>Empresa</h3>
              <nav className={styles.footerNav}>
              {navItemsEmpresa.map((navItemsE) => (
                    <a key={navItemsE.id} href="#">
                        {navItemsE.title}
                    </a>
                ))}
              </nav>
            </div>

            <div className={styles.footerNavSection}>
              <h3>Legal</h3>
              <nav className={styles.footerNav}>
              {navItemsLegal.map((navItemsL) => (
                    <a key={navItemsL.id} href="#">
                        {navItemsL.title}
                    </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2025 MemeVerse - Todos os direitos reservados</p>
          <div className={styles.socialLinks}>

          {redes.map((rede) => (
                    <a key={rede.id} href="#" className={styles.socialLink} >
                    <span>{rede.icon}</span>
                    </a>
                ))}


          </div>
        </div>
      </footer>
    )
}

export default Footer