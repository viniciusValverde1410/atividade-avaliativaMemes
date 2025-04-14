import styles from "./creatorsSection.module.css";
import CreatorCard from "../creatorCard";

const CreatorsSection = ({ topCreators }) => {
    return (
        <section className={styles.creatorsSection}>
        <h2 className={styles.sectionTitle}>Criadores em Destaque</h2>
        <div className={styles.creatorsGrid}>
          {topCreators.map((creator) => (
            // COMPONENTE: CreatorCard
            <CreatorCard creator={creator} key={creator.id}/>
            // FIM COMPONENTE: CreatorCard
          ))}
        </div>
      </section>
    )
}

export default CreatorsSection