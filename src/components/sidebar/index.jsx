import styles from "./sidebar.module.css";
import EventCard from "../eventCard/";

const Sidebar = ({upcomingEvents}) => {
    return (
        <aside className={styles.sidebar}>
        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Eventos Próximos</h3>
          {upcomingEvents.map((event) => (
            // COMPONENTE: EventCard
            <EventCard key={event.id} event={event} />
            // FIM COMPONENTE: EventCard
          ))}
        </div>

        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>MemeVerse Premium</h3>
          <div className={styles.premiumCard}>
            <h4 className={styles.premiumTitle}>
              Desbloqueie recursos exclusivos!
            </h4>
            <ul className={styles.premiumFeatures}>
              <li>Sem anúncios</li>
              <li>Uploads ilimitados</li>
              <li>Ferramentas de edição avançadas</li>
              <li>Estatísticas detalhadas</li>
            </ul>
            <button className={styles.premiumButton}>
              Experimentar Grátis
            </button>
          </div>
        </div>

        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Tags Populares</h3>
          <div className={styles.tagCloud}>
            <span className={`${styles.tag} ${styles.tagLarge}`}>
              #memeday
            </span>
            <span className={styles.tag}>#programação</span>
            <span className={`${styles.tag} ${styles.tagMedium}`}>
              #humor
            </span>
            <span className={styles.tag}>#escola</span>
            <span className={`${styles.tag} ${styles.tagLarge}`}>
              #trabalhoremoto
            </span>
            <span className={styles.tag}>#segundafeira</span>
            <span className={`${styles.tag} ${styles.tagMedium}`}>
              #games
            </span>
            <span className={styles.tag}>#nofilter</span>
          </div>
        </div>
      </aside>
    )
}

export default Sidebar;