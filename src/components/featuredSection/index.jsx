import styles from "./featuredSection.module.css";
import FeaturedMemeCard from "../featuredMemeCard";

const FeaturedSection = ({featuredMemes}) => {
    return (
        <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>Memes em Destaque</h2>
        <div className={styles.featuredGrid}>
          {featuredMemes.map((meme) => (
            // COMPONENTE: FeaturedMemeCard
            <FeaturedMemeCard meme={meme} key={meme.id}/>
            // FIM COMPONENTE: FeaturedMemeCard
          ))}
        </div>
      </section>
    )
}

export default FeaturedSection;