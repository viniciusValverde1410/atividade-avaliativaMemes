import styles from "./creatorsSection.module.css";

const CreatorsSection = ({ topCreators }) => {
    return (
        <section className={styles.creatorsSection}>
        <h2 className={styles.sectionTitle}>Criadores em Destaque</h2>
        <div className={styles.creatorsGrid}>
          {topCreators.map((creator) => (
            // COMPONENTE: CreatorCard
            <div key={creator.id} className={styles.creatorCard}>
              <img
                src={creator.avatar}
                alt={creator.name}
                className={styles.creatorAvatar}
              />
              <h3 className={styles.creatorName}>{creator.name}</h3>
              <p className={styles.creatorBio}>{creator.bio}</p>
              <div className={styles.creatorStats}>
                <span className={styles.creatorFollowers}>
                  {creator.followers} seguidores
                </span>
              </div>
              <button className={styles.followButton}>Seguir</button>
            </div>
            // FIM COMPONENTE: CreatorCard
          ))}
        </div>
      </section>
    )
}

export default CreatorsSection