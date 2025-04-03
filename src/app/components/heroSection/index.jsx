import styles from './heroSection.module.css';


const heroSection = ({title, description, image, likes, comments, author, authorAvatar}) => {
    return (
        <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Meme do Dia</span>
          <h2 className={styles.heroTitle}>{title}</h2>
          <p className={styles.heroDescription}>
            {description}
          </p>
          <div className={styles.heroAuthor}>
            <img
              src={authorAvatar}
              alt={author}
            />
            <span>Por {author}</span>
          </div>
          <div className={styles.heroStats}>
            <span>❤️ {likes}</span>
            <span>💬 {comments}</span>
          </div>
          <button className={styles.heroButton}>Ver meme completo</button>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            src={image}
            alt={title}
            className={styles.heroImage}
          />
        </div>
      </section>
    )
}


export default heroSection;
