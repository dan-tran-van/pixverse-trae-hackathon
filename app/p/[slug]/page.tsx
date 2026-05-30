'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import VideoStorySection from '@/components/VideoStorySection';
import VerticalWritingPreview from '@/components/VerticalWritingPreview';
import DiscoveryCards from '@/components/DiscoveryCards';
import { AUDIENCES, SCENE_CHAPTERS, DISCOVERY_CARDS } from '@/data/campaignData';
import { AudienceKey, WritingMode } from '@/types/campaign';
import styles from './page.module.scss';

export default function PublicCampaignPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Extract audience and writing mode from slug (e.g., "japan-vertical")
  const parts = slug.split('-');
  const audienceKey = parts[0] as AudienceKey;
  const writingMode = (parts[1] || 'horizontal') as WritingMode;
  
  const currentAudience = AUDIENCES.find(a => a.key === audienceKey) || AUDIENCES[0];

  return (
    <main className={`${styles.main} ${writingMode === 'vertical' ? 'isVerticalLayout' : ''}`}>
      <div className={styles.topBar}>
        <p>You are viewing a shared Vietnam Discovery Campaign localized for <strong>{currentAudience.label}</strong> ({writingMode})</p>
      </div>
      
      <HeroSection 
        variant={currentAudience} 
        onCtaClick={() => alert('This is a shared preview page.')}
        onExploreClick={() => document.getElementById('discovery')?.scrollIntoView({ behavior: 'smooth' })}
      />

      <div id="discovery">
        <VideoStorySection chapters={SCENE_CHAPTERS} />
      </div>

      <div className={styles.previewWrapper}>
        <VerticalWritingPreview variant={currentAudience} />
      </div>

      <DiscoveryCards cards={DISCOVERY_CARDS} />

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2026 Vietnam Discovery Campaign. Powered by PixVerse AI Video.</p>
        </div>
      </footer>
    </main>
  );
}
