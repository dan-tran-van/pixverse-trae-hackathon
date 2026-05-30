'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useI18n } from '@/components/I18nContext';
import { useWritingMode } from '@/components/WritingModeContext';
import { getLocalizedDiscoveryCards, getLocalizedDiscoveryDetail } from '@/data/campaignContent';
import type { DiscoveryCard } from '@/types/campaign';
import styles from './page.module.scss';

function isCardId(value: string): value is DiscoveryCard['id'] {
  return value === 'card-1' || value === 'card-2' || value === 'card-3' || value === 'card-4';
}

export default function DiscoveryDetailPage() {
  const params = useParams();
  const cardIdParam = String(params.cardId ?? '');
  const { locale, t } = useI18n();
  const { writingMode } = useWritingMode();
  const [showHeroHint, setShowHeroHint] = useState(false);

  const cards = useMemo(() => getLocalizedDiscoveryCards(locale), [locale]);
  const cardId: DiscoveryCard['id'] = isCardId(cardIdParam) ? cardIdParam : 'card-1';
  const card = cards.find((c) => c.id === cardId) ?? cards[0];
  const detail = useMemo(() => getLocalizedDiscoveryDetail(locale, card.id), [card.id, locale]);

  const imagePath = `/images/discovery/${card.id}.jpg`;

  return (
    <main className={`${styles.page} ${styles[`page--${writingMode}`]}`}>
      <header className={styles.topBar}>
        <Link href="/discovery" className={styles.backLink}>
          {t('app.discovery.backToDiscoveries')}
        </Link>
        <Link href="/" className={styles.backLinkSecondary}>
          {t('app.stories.backToCampaign')}
        </Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <img
            className={styles.heroImage}
            src={imagePath}
            alt={card.title}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              setShowHeroHint(true);
            }}
          />
          {showHeroHint ? (
            <span className={styles.heroHint}>
              {t('app.stories.imagePlaceholder', { path: imagePath })}
            </span>
          ) : null}
          <span className={styles.category}>{t(`app.categories.${card.category}` as const)}</span>
        </div>

        <div className={styles.heroText}>
          <span className={styles.kicker}>{t('app.sections.discoveryMoments.title')}</span>
          <h1 className={styles.title}>{card.title}</h1>
          <p className={styles.subtitle}>{card.description}</p>
        </div>
      </section>

      <section className={styles.body}>
        <article className={styles.content}>
          {detail.sections.map((s) => (
            <div key={s.title} className={styles.detailSection}>
              <h2 className={styles.blockTitle}>{s.title}</h2>
              {s.paragraphs.map((p) => (
                <p key={p} className={styles.detailPara}>
                  {p}
                </p>
              ))}
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}
