import styles from './'

const feedSection = () => { 

return (
    <section className={styles.feedSection}>
    <div className={styles.feedHeader}>
      <h2 className={styles.sectionTitle}>Memes Populares</h2>
      <div className={styles.feedFilters}>
        <button className={`${styles.filterButton} ${styles.active}`}>
          Recentes
        </button>
        <button className={styles.filterButton}>Mais curtidos</button>
        <button className={styles.filterButton}>Mais comentados</button>
      </div>
    </div>

    <div className={styles.feedGrid}>
      {/* Aqui mapeamos os memes do array para criar múltiplos cards */}
      {memes.map((meme) => (
        // COMPONENTE: MemeCard
        <div key={meme.id} className={styles.memeCard}>
          <div className={styles.memeCardHeader}>
            <div className={styles.memeAuthor}>
              <img src={meme.authorAvatar} alt={meme.author} />
              <span>{meme.author}</span>
            </div>
            <span className={styles.memeCategory}>{meme.category}</span>
          </div>
          <img
            src={meme.image}
            alt={meme.title}
            className={styles.memeImage}
          />
          <div className={styles.memeContent}>
            <h3 className={styles.memeTitle}>{meme.title}</h3>
            <p className={styles.memeDescription}>{meme.description}</p>

            {/* COMPONENTE: InteractionBar */}
           <InteractionBar meme={meme}/>
            {/* FIM COMPONENTE: InteractionBar */}
          </div>
        </div>
        // FIM COMPONENTE: MemeCard
      ))}
    </div>

    <button className={styles.loadMoreButton}>
      Carregar mais memes
    </button>
  </section>
)

}
