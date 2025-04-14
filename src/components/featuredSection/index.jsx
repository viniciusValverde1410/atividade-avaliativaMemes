import styles from "./featuredSection.module.css";
import FeaturedMemeCard from "../featuredMemeCard";

const FeaturedSection = ({featuredMemes}) => {
    return (
        <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>Memes em Destaque</h2>
        <div className={styles.featuredGrid}>
          {featuredMemes.map((meme) => (
            // COMPONENTE: FeaturedMemeCard
            <div key={meme.id} className={styles.featuredCard}>
              <div className={styles.featuredImageContainer}>
                <img
                  src={meme.image}
                  alt={meme.title}
                  className={styles.featuredImage}
                />
                {meme.trending && (
                  <span className={styles.trendingBadge}>🔥 Trending</span>
                )}
              </div>
              <div className={styles.featuredContent}>
                <h3 className={styles.featuredTitle}>{meme.title}</h3>
                <div className={styles.featuredInfo}>
                  <span className={styles.featuredAuthor}>
                    Por {meme.author}
                  </span>
                  <span className={styles.featuredCategory}>
                    {meme.category}
                  </span>
                </div>
              </div>
            </div>
            // FIM COMPONENTE: FeaturedMemeCard
          ))}
        </div>
      </section>
    )
}

export default FeaturedSection;