import React from 'react';
import styles from '@/styles/modules/DiscoveryCards.module.scss';
import { DiscoveryCard } from '@/types/campaign';

interface DiscoveryCardsProps {
  cards: DiscoveryCard[];
}

const DiscoveryCards: React.FC<DiscoveryCardsProps> = ({ cards }) => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Discovery Moments</h2>
        <p className={styles.description}>
          Dive deeper into the details that make Vietnam a destination like no other.
        </p>
      </div>

      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.category}>{card.category}</span>
            </div>
            <div className={styles.info}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
              <button className={styles.learnMore}>Learn More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoveryCards;
