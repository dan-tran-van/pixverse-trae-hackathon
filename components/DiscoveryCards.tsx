import React from 'react';
import styles from '@/styles/modules/DiscoveryCards.module.scss';
import { DiscoveryCard } from '@/types/campaign';
import { useWritingMode } from '@/components/WritingModeContext';
import { useI18n } from '@/components/I18nContext';

interface DiscoveryCardsProps {
  cards: DiscoveryCard[];
}

const DiscoveryCards: React.FC<DiscoveryCardsProps> = ({ cards }) => {
  const { writingMode } = useWritingMode();
  const { t } = useI18n();

  return (
    <section className={`${styles.container} ${styles[`container--${writingMode}`]}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t('app.sections.discoveryMoments.title')}</h2>
        <p className={styles.description}>
          {t('app.sections.discoveryMoments.description')}
        </p>
      </div>

      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.category}>{t(`app.categories.${card.category}` as const)}</span>
            </div>
            <div className={styles.info}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
              <button className={styles.learnMore}>{t('app.sections.discoveryMoments.learnMore')}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoveryCards;
