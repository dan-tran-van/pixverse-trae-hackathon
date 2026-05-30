'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';
import HeroSection from '@/components/HeroSection';
import VideoStorySection from '@/components/VideoStorySection';
import AudienceSwitcher from '@/components/AudienceSwitcher';
import VerticalWritingPreview from '@/components/VerticalWritingPreview';
import DiscoveryCards from '@/components/DiscoveryCards';
import ConversionPanel from '@/components/ConversionPanel';
import { AUDIENCES, SCENE_CHAPTERS, DISCOVERY_CARDS } from '@/data/campaignData';
import { AudienceKey, WritingMode } from '@/types/campaign';

export default function CampaignPage() {
  const [selectedAudienceKey, setSelectedAudienceKey] = useState<AudienceKey>('global');
  const [writingMode, setWritingMode] = useState<WritingMode>('horizontal');

  const currentAudience = AUDIENCES.find(a => a.key === selectedAudienceKey) || AUDIENCES[0];

  const handleAudienceChange = (key: AudienceKey) => {
    setSelectedAudienceKey(key);
    const audience = AUDIENCES.find(a => a.key === key);
    if (audience) {
      setWritingMode(audience.defaultWritingMode);
    }
  };

  const scrollToDiscovery = () => {
    const el = document.getElementById('discovery');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={styles.main}>
      {/* Featured Main Video Hero */}
      <HeroSection 
        variant={currentAudience} 
        onCtaClick={() => document.getElementById('conversion')?.scrollIntoView({ behavior: 'smooth' })}
        onExploreClick={scrollToDiscovery}
      />

      <div id="discovery">
        <VideoStorySection chapters={SCENE_CHAPTERS} />
      </div>

      {/* Language / Audience Switcher - Deeply integrated layout changes */}
      <div className={styles.localizationSection}>
        <AudienceSwitcher 
          audiences={AUDIENCES} 
          selectedKey={selectedAudienceKey} 
          onSelect={handleAudienceChange} 
        />
        
        <div className={styles.layoutPreviewWrapper}>
          <div className={styles.sectionHeader}>
            <span className={styles.accent}>Cultural Differentiation</span>
            <h2>Layout & Typography</h2>
            <p>Switching language adapts the visual layout. East Asian versions support native vertical writing.</p>
          </div>
          <VerticalWritingPreview variant={currentAudience} />
        </div>
      </div>

      <DiscoveryCards cards={DISCOVERY_CARDS} />

      <div id="conversion">
        <ConversionPanel 
          selectedAudience={selectedAudienceKey} 
          writingMode={writingMode} 
        />
      </div>

      {/* Studio Bridge Section */}
      <section className={styles.studioBridge}>
        <div className={styles.studioContent}>
          <div className={styles.studioText}>
            <span className={styles.badge}>Campaign Studio</span>
            <h2>Create Your Own Localized Version</h2>
            <p>
              Want to customize this campaign for your specific market? 
              Our studio allows you to experiment with different audiences, 
              writing modes, and preview the final result in real-time.
            </p>
            <Link href="/studio" className={styles.studioBtn}>
              Enter Studio Mode →
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
          <p>© 2026 Vietnam Discovery Campaign. Powered by PixVerse AI Video.</p>
          <div className={styles.footerLinks}>
            <span>Travel</span>
            <span>Food</span>
            <span>Culture</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
