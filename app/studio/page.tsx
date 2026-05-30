'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';
import { AUDIENCES } from '@/data/campaignData';
import { AudienceKey } from '@/types/campaign';
import HeroSection from '@/components/HeroSection';
import VideoStorySection from '@/components/VideoStorySection';
import DiscoveryCards from '@/components/DiscoveryCards';
import CampaignInteractions from '@/components/CampaignInteractions';
import AudienceSwitcher from '@/components/AudienceSwitcher';
import { useWritingMode } from '@/components/WritingModeContext';
import { useI18n } from '@/components/I18nContext';
import { getLocalizedDiscoveryCards, getLocalizedSceneChapters } from '@/data/campaignContent';

export default function StudioPage() {
  const [selectedAudienceKey, setSelectedAudienceKey] = useState<AudienceKey>('global');
  const { writingMode, setWritingMode } = useWritingMode();
  const { locale, setAudienceLocale, t } = useI18n();
  const [isSaving, setIsSaving] = useState(false);
  const [shareLink, setShareLink] = useState('');

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

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call/save
    setTimeout(() => {
      const slug = `${selectedAudienceKey}-${writingMode}`;
      setShareLink(`${window.location.origin}/p/${slug}`);
      setIsSaving(false);
    }, 1500);
  };

  return (
    <div className={`${styles.studioContainer} ${styles[`studioContainer--${writingMode}`]}`}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.backBtn}>{t('app.studio.back')}</Link>
          <h2>{t('app.studio.title')}</h2>
          <p>{t('app.studio.description')}</p>
        </div>

        <div className={styles.controls}>
          <div className={styles.controlGroup}>
            <label>{t('app.studio.controls.targetAudience')}</label>
            <div className={styles.audienceGrid}>
              {AUDIENCES.map((a) => (
                <button
                  key={a.key}
                  className={`${styles.audienceBtn} ${selectedAudienceKey === a.key ? styles.active : ''}`}
                  onClick={() => handleAudienceChange(a.key)}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.controlGroup}>
            <label>{t('app.studio.controls.writingMode')}</label>
            <div className={styles.toggleGroup}>
              <button
                className={writingMode === 'horizontal' ? styles.active : ''}
                onClick={() => setWritingMode('horizontal')}
              >
                {t('app.preview.toggle.horizontal')}
              </button>
              <button
                className={writingMode === 'vertical' ? styles.active : ''}
                onClick={() => setWritingMode('vertical')}
              >
                {t('app.preview.toggle.vertical')}
              </button>
            </div>
          </div>

          <div className={styles.controlGroup}>
            <label>{t('app.studio.controls.videoPlaceholder')}</label>
            <div className={styles.videoInfo}>
              <div className={styles.dot}></div>
              <span>Vietnam Discovery (PixVerse)</span>
            </div>
          </div>
        </div>

        <div className={styles.sidebarFooter}>
          <button 
            className={styles.saveBtn} 
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? t('app.studio.generating') : t('app.studio.generate')}
          </button>
          
          {shareLink && (
            <div className={styles.shareBox}>
              <p>{t('app.studio.shareReady')}</p>
              <input readOnly value={shareLink} />
              <Link href={shareLink} className={styles.previewLink} target="_blank">
                {t('app.studio.openPreview')}
              </Link>
            </div>
          )}
        </div>
      </aside>

      <main className={`${styles.preview} ${styles[`preview--${writingMode}`]}`}>
        <div className={styles.previewHeader}>
          <span>{t('app.studio.previewHeader')}</span>
          <div className={styles.deviceIcons}>
            <span>📱</span>
            <span>💻</span>
          </div>
        </div>
        <div className={styles.previewContent}>
          <HeroSection
            variant={currentAudience}
            onCtaClick={() => {}}
            onExploreClick={() => {}}
          />

          <div id="discovery">
            <VideoStorySection chapters={chapters} />
          </div>

          <DiscoveryCards cards={cards} />

          <div id="booking">
            <CampaignInteractions />
          </div>

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
          </div>

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
        </div>
      </main>
    </div>
  );
}
