import styles from './eventCard.module.css';

const EventCard = () => {

    const upcomingEvents = [
        {
          id: 1,
          title: "Competição de Memes 2025",
          date: "15 de Maio, 2025",
          participants: 356,
        },
        {
          id: 2,
          title: "Workshop: Como Criar Memes Virais",
          date: "22 de Maio, 2025",
          participants: 127,
        },
      ];

      
    return (
        <div>

            {upcomingEvents.map((event) => (
                // COMPONENTE: EventCard
                <div key={event.id} className={styles.eventCard}>
                    <h4 className={styles.eventTitle}>{event.title}</h4>
                    <p className={styles.eventDate}>{event.date}</p>
                    <p className={styles.eventParticipants}>
                        {event.participants} participantes
                    </p>
                    <button className={styles.eventButton}>Participar</button>
                </div>
                // FIM COMPONENTE: EventCard
            ))}
        </div>
    )
}

export default EventCard;