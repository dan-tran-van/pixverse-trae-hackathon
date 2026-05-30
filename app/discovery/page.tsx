'use client';

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/components/I18nContext';
import { useWritingMode } from '@/components/WritingModeContext';
import { getLocalizedDiscoveryCards } from '@/data/campaignContent';
import styles from './page.module.scss';

export default function DiscoveryIndexPage() {
  const { locale, t } = useI18n();
  const { writingMode } = useWritingMode();
  const cards = getLocalizedDiscoveryCards(locale);

  return (
    <main className={`${styles.page} ${styles[`page--${writingMode}`]}`}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          {t('app.stories.backToCampaign')}
        </Link>
        <h1 className={styles.title}>{t('app.sections.discoveryMoments.title')}</h1>
        <p className={styles.subtitle}>{t('app.sections.discoveryMoments.description')}</p>
      </header>

      <div className={styles.grid}>
        {cards.map((card) => (
          <Link key={card.id} href={`/discovery/${card.id}`} className={styles.card}>
            <div className={styles.cover}>
              <img
                className={styles.coverImage}
                src={`/images/discovery/${card.id}.jpg`}
                alt={card.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className={styles.category}>{t(`app.categories.${card.category}` as const)}</span>
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.cardDesc}>{card.description}</p>
              <span className={styles.cardCta}>{t('app.sections.discoveryMoments.learnMore')}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

