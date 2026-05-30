'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import VideoStorySection from '@/components/VideoStorySection';
import VerticalWritingPreview from '@/components/VerticalWritingPreview';
import DiscoveryCards from '@/components/DiscoveryCards';
import { AUDIENCES } from '@/data/campaignData';
import { AudienceKey, WritingMode } from '@/types/campaign';
import styles from './page.module.scss';
import { useWritingMode } from '@/components/WritingModeContext';
import { useI18n } from '@/components/I18nContext';
import { getLocalizedDiscoveryCards, getLocalizedSceneChapters } from '@/data/campaignContent';

export default function PublicCampaignPage() {
  const { writingMode, setWritingMode } = useWritingMode();
  const { locale, setAudienceLocale, t } = useI18n();
  const params = useParams();
  const slug = params.slug as string;
  
  // Extract audience and writing mode from slug (e.g., "japan-vertical")
  const parts = slug.split('-');
  const audienceKey = parts[0] as AudienceKey;
  const slugWritingMode = (parts[1] || 'horizontal') as WritingMode;
  
  const currentAudience = AUDIENCES.find(a => a.key === audienceKey) || AUDIENCES[0];

  useEffect(() => {
    setWritingMode(slugWritingMode);
    setAudienceLocale(audienceKey);
  }, [audienceKey, setAudienceLocale, setWritingMode, slugWritingMode]);

  const chapters = getLocalizedSceneChapters(locale);
  const cards = getLocalizedDiscoveryCards(locale);

  return (
    <main className={`${styles.main} ${styles[`main--${writingMode}`]}`}>
      <div className={styles.topBar}>
        <p>{t('app.preview.topBar', { audience: currentAudience.label, mode: writingMode })}</p>
      </div>
      
      <HeroSection 
        variant={currentAudience} 
        onCtaClick={() => alert(t('app.preview.sharedAlert'))}
        onExploreClick={() => document.getElementById('discovery')?.scrollIntoView({ behavior: 'smooth' })}
      />

      <div id="discovery">
        <VideoStorySection chapters={chapters} />
      </div>

      <div className={styles.previewWrapper}>
        <VerticalWritingPreview variant={currentAudience} />
      </div>

      <DiscoveryCards cards={cards} />

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>{t('app.footer.copyright')}</p>
        </div>
      </footer>
    </main>
  );
}
