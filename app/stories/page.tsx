'use client';

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/components/I18nContext';
import { useWritingMode } from '@/components/WritingModeContext';
import { getLocalizedSceneChapters } from '@/data/campaignContent';
import styles from './page.module.scss';

export default function StoriesIndexPage() {
  const { locale, t } = useI18n();
  const { writingMode } = useWritingMode();
  const chapters = getLocalizedSceneChapters(locale);

  return (
    <main className={`${styles.page} ${styles[`page--${writingMode}`]}`}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          {t('app.stories.backToCampaign')}
        </Link>
        <h1 className={styles.title}>{t('app.stories.title')}</h1>
        <p className={styles.subtitle}>{t('app.stories.subtitle')}</p>
      </header>

      <section className={styles.grid}>
        {chapters.map((c) => (
          <Link key={c.id} href={`/stories/${c.id}`} className={styles.card}>
            <div className={styles.cover} data-chapter={c.id}>
              <span className={styles.coverHint}>{t('app.stories.imagePlaceholder', { path: `/images/stories/${c.id}.jpg` })}</span>
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{c.title}</h2>
              <p className={styles.cardDesc}>{c.description}</p>
              <span className={styles.cardCta}>{t('app.stories.readStory')}</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

