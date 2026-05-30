'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';
import { AUDIENCES } from '@/data/campaignData';
import { AudienceKey, WritingMode } from '@/types/campaign';
import HeroSection from '@/components/HeroSection';
import VerticalWritingPreview from '@/components/VerticalWritingPreview';

export default function StudioPage() {
  const [selectedAudienceKey, setSelectedAudienceKey] = useState<AudienceKey>('global');
  const [writingMode, setWritingMode] = useState<WritingMode>('horizontal');
  const [isSaving, setIsSaving] = useState(false);
  const [shareLink, setShareLink] = useState('');

  const currentAudience = AUDIENCES.find(a => a.key === selectedAudienceKey) || AUDIENCES[0];

  const handleAudienceChange = (key: AudienceKey) => {
    setSelectedAudienceKey(key);
    const audience = AUDIENCES.find(a => a.key === key);
    if (audience) {
      setWritingMode(audience.defaultWritingMode);
    }
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
    <div className={styles.studioContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.backBtn}>← Back to Campaign</Link>
          <h2>Campaign Studio</h2>
          <p>Experiment and customize your campaign preview using the PixVerse demo video.</p>
        </div>

        <div className={styles.controls}>
          <div className={styles.controlGroup}>
            <label>Target Audience</label>
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
            <label>Writing Mode</label>
            <div className={styles.toggleGroup}>
              <button
                className={writingMode === 'horizontal' ? styles.active : ''}
                onClick={() => setWritingMode('horizontal')}
              >
                Horizontal
              </button>
              <button
                className={writingMode === 'vertical' ? styles.active : ''}
                onClick={() => setWritingMode('vertical')}
              >
                Vertical
              </button>
            </div>
          </div>

          <div className={styles.controlGroup}>
            <label>Video Placeholder</label>
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
            {isSaving ? 'Generating...' : 'Generate Campaign Link'}
          </button>
          
          {shareLink && (
            <div className={styles.shareBox}>
              <p>Your campaign is ready!</p>
              <input readOnly value={shareLink} />
              <Link href={shareLink} className={styles.previewLink} target="_blank">
                Open Preview ↗
              </Link>
            </div>
          )}
        </div>
      </aside>

      <main className={`${styles.preview} ${writingMode === 'vertical' ? 'isVerticalLayout' : ''}`}>
        <div className={styles.previewHeader}>
          <span>Live Preview</span>
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
          <div className={styles.previewDivider}></div>
          <VerticalWritingPreview variant={currentAudience} />
        </div>
      </main>
    </div>
  );
}
