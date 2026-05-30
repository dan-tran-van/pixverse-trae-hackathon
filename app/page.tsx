'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';
import HeroSection from '@/components/HeroSection';
import VideoStorySection from '@/components/VideoStorySection';
import AudienceSwitcher from '@/components/AudienceSwitcher';
import DiscoveryCards from '@/components/DiscoveryCards';
import CampaignInteractions from '@/components/CampaignInteractions';
import { AUDIENCES } from '@/data/campaignData';
import { AudienceKey } from '@/types/campaign';
import { useWritingMode } from '@/components/WritingModeContext';
import { useI18n } from '@/components/I18nContext';
import { getLocalizedDiscoveryCards, getLocalizedSceneChapters } from '@/data/campaignContent';

export default function CampaignPage() {
  const [selectedAudienceKey, setSelectedAudienceKey] = useState<AudienceKey>('global');
  const { writingMode, setWritingMode } = useWritingMode();
  const { locale, setAudienceLocale, t } = useI18n();

  const currentAudience = AUDIENCES.find(a => a.key === selectedAudienceKey) || AUDIENCES[0];
  const chapters = getLocalizedSceneChapters(locale);
  const cards = getLocalizedDiscoveryCards(locale);

  const handleAudienceChange = (key: AudienceKey) => {
    setSelectedAudienceKey(key);
    const audience = AUDIENCES.find(a => a.key === key);
    if (audience) {
      setWritingMode(audience.defaultWritingMode);
    }
    setAudienceLocale(key);
  };

  const scrollToDiscovery = () => {
    const el = document.getElementById('discovery');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={`${styles.main} ${styles[`main--${writingMode}`]}`}>
      {/* Featured Main Video Hero */}
      <HeroSection 
        variant={currentAudience} 
        onCtaClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        onExploreClick={scrollToDiscovery}
      />

      {/* Visual Storytelling Section */}
      <div id="discovery">
        <VideoStorySection chapters={chapters} />
      </div>

      {/* Discovery Moments Cards */}
      <DiscoveryCards cards={cards} />

      {/* Community Interactions - Likes, Comments, Booking */}
      <div id="booking">
        <CampaignInteractions />
      </div>

      {/* Global Audience View Switcher */}
      <div className={styles.localizationSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.accent}>{t('app.page.section.worldwideInterest')}</span>
          <h2>{t('app.page.section.globalStoryTitle')}</h2>
          <p>{t('app.page.section.globalStoryDescription')}</p>
        </div>
        
        <AudienceSwitcher 
          audiences={AUDIENCES} 
          selectedKey={selectedAudienceKey} 
          onSelect={handleAudienceChange} 
        />
        
        {/* <div className={styles.layoutPreviewWrapper}>
          <div className={styles.sectionHeader}>
            <span className={styles.accent}>Cultural Elegance</span>
            <h2>Localized Experience</h2>
            <p>Our campaign adapts to the local soul, including native vertical typography for East Asian audiences.</p>
          </div>
          <VerticalWritingPreview variant={currentAudience} />
        </div> */}
      </div>

      {/* Final Bridge to Studio - The only mention of Studio on this page */}
      <section className={styles.studioBridge}>
        <div className={styles.studioContent}>
          <div className={styles.studioText}>
            <span className={styles.badge}>{t('app.studioBridge.badge')}</span>
            <h2>{t('app.studioBridge.title')}</h2>
            <p>
              {t('app.studioBridge.description')}
            </p>
            <Link href="/studio" className={styles.studioBtn}>
              {t('app.studioBridge.enter')}
            </Link>
          </div>
          <div className={styles.studioVisual}>
            <div className={styles.mockInterface}>
              <div className={styles.mockSidebar}></div>
              <div className={styles.mockMain}>
                <div className={styles.mockVideo}></div>
                <div className={styles.mockLines}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>{t('app.footer.copyright')}</p>
          <div className={styles.footerLinks}>
            <span>{t('app.footer.link.destinations')}</span>
            <span>{t('app.footer.link.gastronomy')}</span>
            <span>{t('app.footer.link.culturalHeritage')}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
